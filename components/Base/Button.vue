<template>
    <q-btn
        unelevated
        :color="color"
        text-color="black"
        :size="size"
        :dense="dense"
        class="tw-capitalize tw-flex tw-items-center tw-font-normal !tw-text-xs"
    >
        <template v-if="icon && iconPosition == 'left'">
            <BaseIcon :name="icon" :size="16" class="tw-mr-3" />
        </template>
        {{ label }}
        <template v-if="icon && iconPosition == 'right'">
            <BaseIcon :name="icon" :size="16" class="tw-ml-3" />
        </template>

        <slot></slot>
    </q-btn>
</template>

<script setup>
defineProps({
    label: String,
    icon: String,
    iconPosition: String,
    size: Number,
    dense: Boolean,
    color: String,
});
</script>

<script>
export default {
    name: "base-button",
};
</script>

<style></style>
