<template>
    <span class="tw-inline-block">
        <vsx-icon :iconName="name" :size="size" type="linear" :color="color" />
        <slot></slot>
    </span>
</template>

<script setup>
defineProps({
    name: String,
    size: Number,
    color: String,
});
</script>

<script>
export default {
    name: "base-icon",
};
</script>

<style></style>
