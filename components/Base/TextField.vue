<template>
    <div
        :class="[
            align != 'top' ? 'md:tw-flex' : null,
            'tw-items-baseline tw-gap-x-3 tw-space-y-1',
        ]"
    >
        <label class="tw-w-52"
            >{{ label
            }}<span v-if="required && !mark" class="text-red">*</span></label
        >
        <div class="tw-w-full">
            <q-input
                outlined
                :borderless="isBorderedless"
                :square="isSquare"
                :dense="dense"
                ref="self"
                color="secondary"
                :mask="mask"
                :type="textarea ? 'textarea' : 'text'"
                :prefix="prefix"
                :suffix="suffix"
                :hint="hint"
                :max="max"
                :disable="disabled"
                :readonly="readonly"
                :model-value="modelValue"
                input-class="!tw-border-4"
                :class="!required ?? 'tw-mb-3'"
                :autogrow="autogrow"
                :autofocus="autofocus"
                :rules="rules"
                :placeholder="placeholder"
                @update:model-value="
                    (value) => $emit('update:modelValue', value)
                "
                :input-style="textarea ? { height: '5rem' } : {}"
            >
                <template v-if="icon" v-slot:prepend>
                    <BaseIcon :name="icon" :size="16" class="tw-mr-1" />
                </template>
            </q-input>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    // design input
    isFilled?: boolean;
    isOutlined?: boolean;
    isBorderedless?: boolean;
    isSquare?: boolean;

    // required attribute
    label: string;
    type: string;
    modelValue: string;

    // optional attribute
    dense?: boolean;
    textarea?: boolean;
    autofocus?: boolean;
    prefix?: string;
    suffix?: string;
    hint?: string;
    max?: number;
    placeholder?: string;
    align?: string;
    mark?: boolean;
    mask?: string;
    autogrow?: boolean;

    // Validation Attirbut
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    icon?: string;
}

const props = defineProps<IProps>();
defineEmits<{
    (e: "update:modelValue", value: string): void;
}>();

const rules: Ref<any[]> = ref([]);

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
};

onMounted(() => {
    if (props.required) {
        rules.value.push((val: string) =>
            val ? true : `${props.label} is required`
        );
    }

    if (props.max) {
        const max = props.max;
        rules.value.push((val: number) =>
            val > 0 && val <= max ? true : `${props.label} is required`
        );
    }

    if (props.type == "email") {
        rules.value.push((val: string) =>
            validateEmail(val) ? true : `${props.label} is not a valid email!`
        );
    }
});
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
