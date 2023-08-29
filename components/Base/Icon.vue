<template>
    <span class="tw-inline-block tw-cursor-pointer">
        <vsx-icon :iconName="name" :size="size" type="linear" :color="color" />
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
interface Icon {
    name: string;
    size: string | number;
    color?: string;
}

defineProps<Icon>();
</script>

<style></style>
