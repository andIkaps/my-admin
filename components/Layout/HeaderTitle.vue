<template>
    <q-toolbar-title class="tw-space-y-2">
        <h1 class="tw-font-sen tw-font-semibold tw-text-xl">
            {{ menuStore.title }}
        </h1>
        <q-breadcrumbs class="tw-text-xs">
            <q-breadcrumbs-el label="Home" />
            <q-breadcrumbs-el label="Dashboard" />
        </q-breadcrumbs>
    </q-toolbar-title>
</template>

<script setup>
const menuStore = useMenuStore();
</script>

<script>
export default {
    name: "",
};
</script>

<style></style>
