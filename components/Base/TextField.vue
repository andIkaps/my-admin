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
                :class="!required ?? 'tw-mb-6'"
                :autogrow="autogrow"
                :autofocus="autofocus"
                :rules="[
                    required
                        ? (val) =>
                              (val !== null && val !== '') ||
                              `${label} is required`
                        : null,
                    max
                        ? (val) =>
                              (val > 0 && val <= max) || 'Max value of ' + max
                        : null,
                ]"
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

<script setup>
defineProps({
    // Design Input
    isFilled: Boolean,
    isOutlined: Boolean,
    isBorderedless: Boolean,
    isSquare: Boolean,
    dense: Boolean,

    // Must Have Attribute
    label: String,
    type: String,
    modelValue: String,
    textarea: Boolean,

    // Optional Attribute
    autofocus: Boolean,
    prefix: String,
    suffix: String,
    hint: String,
    max: Number,
    placeholder: String,
    align: String,
    mark: Boolean,
    mask: String,
    autogrow: Boolean,

    // Validation Attirbute
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    icon: String,
});
defineEmits(["update:modelValue"]);
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
