<template>
    <q-btn
        unelevated
        :color="color"
        text-color="secondary"
        :size="size"
        :dense="dense"
        class="tw-capitalize tw-flex tw-items-center"
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

<script setup lang="ts">
interface IButton {
    label?: string;
    icon?: string;
    iconPosition?: string;
    size?: string;
    dense?: boolean;
    color?: string;
}

defineProps<IButton>();
</script>

<style></style>
