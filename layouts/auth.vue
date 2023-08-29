<template>
    <div
        class="tw-container tw-mx-auto tw-h-screen tw-py-5 tw-px-5 lg:tw-px-0 lg:tw-max-w-lg lg:tw-flex lg:tw-flex-col lg:tw-justify-center"
    >
        <header class="tw-space-5 tw-mt-10">
            <section class="tw-space-x-2">
                <q-img src="~/assets/img/icons/brand_logo.svg" class="tw-w-8" />
                <span class="tw-font-sen tw-font-bold tw-text-lg"
                    >My Admin</span
                >
            </section>
            <section class="tw-space-y-3 tw-mt-3">
                <h1
                    class="tw-font-bold tw-tracking-wide tw-leading-relaxed lg:tw-text-lg"
                    v-html="authPageStore.title"
                ></h1>
                <p>{{ authPageStore.subtitle }}</p>
            </section>
        </header>
        <slot />
    </div>
</template>

<script setup lang="ts">
interface IProps {
    title: string;
    subtitle: string;
}

defineProps<IProps>();
const authPageStore = useAuthPageStore();

onMounted(() => {});
</script>

<style></style>
