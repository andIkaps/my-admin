<template>
    <section class="tw-space-x-2 sm:tw-space-x-5">
        <q-btn
            unelevated
            dense
            class="tw-bg-[#F8FAFB] tw-py-2 tw-px-3 tw-rounded-lg"
            @click="toggleLeftDrawer"
        >
            <BaseIcon name="HambergerMenu" :size="20" color="#B3B3B5" />

            <q-tooltip>Toggle Sidebar</q-tooltip>
        </q-btn>

        <q-btn
            unelevated
            dense
            class="tw-bg-[#F8FAFB] tw-py-2 tw-px-3 tw-rounded-lg"
        >
            <BaseIcon name="NotificationBing" :size="20" color="#B3B3B5" />

            <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-avatar
            size="lg"
            color="teal"
            text-color="white"
            class="tw-cursor-pointer"
        >
            <q-img src="https://avatars.githubusercontent.com/u/50601795?v=4" />

            <q-menu
                class="tw-shadow-xl tw-border tw-rounded-lg tw-font-sen"
                :offset="[10, 20]"
            >
                <q-list>
                    <q-item clickable v-close-popup class="tw-p-3.5">
                        <q-item-section>
                            <section class="tw-flex tw-items-center tw-gap-3">
                                <q-avatar size="md">
                                    <q-img
                                        src="https://avatars.githubusercontent.com/u/50601795?v=4"
                                        class="tw-rounded-full"
                                    />
                                </q-avatar>
                                <div>
                                    <h1
                                        class="tw-font-bold tw-font-sen tw-text-sm tw-text-black tw-whitespace-nowrap"
                                    >
                                        Andika Permana Sidiq
                                    </h1>
                                    <p class="tw-text-xs tw-text-grey-300">
                                        Super Admin
                                    </p>
                                </div>
                            </section>
                        </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                        <q-item-section class="tw-px-2 tw-py-1">
                            <section class="tw-flex tw-items-center tw-gap-3">
                                <BaseIcon name="Setting2" :size="18" />
                                <span class="tw-text-black tw-text-sm"
                                    >Account Settings</span
                                >
                            </section>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup>
                        <q-item-section class="tw-px-2 tw-py-1">
                            <NuxtLink
                                to="/auth/login"
                                class="tw-flex tw-items-center tw-gap-3"
                            >
                                <BaseIcon
                                    name="Logout"
                                    :size="18"
                                    color="#FE0000"
                                />
                                <span class="tw-text-red tw-text-sm"
                                    >Logout</span
                                >
                            </NuxtLink>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-avatar>
    </section>
</template>

<script setup>
const menuStore = useMenuStore();

const toggleLeftDrawer = () => {
    menuStore.leftDrawerOpen = !menuStore.leftDrawerOpen;
};
</script>

<script>
export default {
    name: "header-menu",
};
</script>

<style></style>
