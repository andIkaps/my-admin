<template>
    <q-item
        v-if="!childrens"
        :to="link"
        class="tw-rounded-md tw-mx-3.5 tw-p-3.5 hover:tw-bg-primary/10"
        dense
    >
        <q-item-section>
            <q-item-label class="tw-flex tw-gap-5 tw-items-center">
                <BaseIcon :name="icon" :size="20" />
                <span class="tw-font-sen tw-tracking-wider">{{ title }}</span>
            </q-item-label>
        </q-item-section>
    </q-item>
    <q-expansion-item
        v-else
        header-class="flex items-center rounded-borders q-mx-md"
        expand-icon-class="hidden"
        :content-inset-level="1"
    >
        <template #header>
            <section class="tw-flex tw-justify-between tw-gap-3 tw-w-full">
                <div class="tw-flex tw-gap-3">
                    <BaseIcon :name="icon" :size="20" />
                    {{ title }}
                </div>
                <BaseIcon name="ArrowDown2" :size="18" />
            </section>
        </template>
        <template #default>
            <section class="tw-space-y-2">
                <q-item
                    v-for="lk in childrens"
                    :to="lk.link"
                    class="tw-rounded-md tw-p-2 hover:tw-bg-primary/10"
                    dense
                >
                    <q-item-section>
                        <q-item-label class="tw-flex tw-gap-5 tw-items-center">
                            <BaseIcon :name="lk.icon" :size="20" />
                            <span class="tw-font-sen tw-tracking-wider">{{
                                lk.title
                            }}</span>
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </section>
        </template>
    </q-expansion-item>
</template>

<script setup>
const props = defineProps({
    icon: String,
    link: String,
    childrens: Array,
    title: String,
});

onMounted(() => {
    console.log("mounted");
});
</script>

<script>
export default {
    name: "menu-item",
};
</script>

<style></style>
