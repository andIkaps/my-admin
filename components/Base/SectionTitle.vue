<template>
    <header class="tw-flex tw-justify-between tw-items-center">
        <h1 class="tw-font-semibold tw-text-xl tw-text-black tw-tracking-wide">
            {{ title }}
        </h1>

        <slot></slot>
    </header>
</template>

<script setup>
defineProps({
    title: String,
});
</script>

<script>
export default {
    name: "section-title",
};
</script>

<style></style>
