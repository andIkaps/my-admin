<template>
    <div class="tw-flex tw-flex-col tw-items-baseline tw-gap-x-3">
        <label class="tw-w-52"
            >{{ label }}<span v-if="required" class="text-red">*</span></label
        >
        <div class="tw-w-full">
            <q-input
                outlined
                color="secondary"
                :type="isPwd ? 'text' : 'password'"
                :model-value="modelValue"
                @update:model-value="
                    (value: any) => $emit('update:modelValue', value)
                "
                :class="{
                    'tw-mb-3': required,
                }"
                :rules="rules"
                :placeholder="placeholder"
                :dense="dense"
            >
                <template v-if="icon" v-slot:prepend>
                    <div class="tw-px-2 tw-pb-1 tw-bg-white tw-rounded-lg">
                        <q-icon
                            :name="icon"
                            size="24px"
                            class="tw-text-[#4DA99D]"
                        />
                    </div>
                </template>
                <template v-slot:append>
                    <q-icon
                        :name="
                            isPwd ? 'eva-eye-off-outline' : 'eva-eye-outline'
                        "
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    label: string;
    modelValue: string;
    required?: boolean;
    isRegex?: boolean;
    icon?: string;
    placeholder?: string;
    dense?: boolean;
}

const props = defineProps<IProps>();

defineEmits<{
    (e: "update:modelValue", value: string): void;
}>();

const validatePassword = (password: string): boolean => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

const isPwd: Ref<boolean> = ref(false);
const rules: Ref<any[]> = ref([]);

onMounted(() => {
    if (props.required) {
        rules.value.push((val: string) =>
            val ? true : `${props.label} is required`
        );
    }

    if (props.isRegex) {
        rules.value.push((val: string) =>
            validatePassword(val)
                ? true
                : `${props.label} must contain uppercase letters, numbers and symbols!`
        );
    }
});
</script>
