<template>
    <q-layout view="lHh LpR fFf">
        <q-header
            class="bg-white tw-text-black tw-border-b tw-h-[5.5rem] tw-px-5 tw-flex tw-items-center"
        >
            <q-toolbar>
                <LayoutHeaderTitle />

                <LayoutHeaderMenu />
            </q-toolbar>
        </q-header>

        <q-drawer
            show-if-above
            v-model="menuStore.leftDrawerOpen"
            side="left"
            bordered
        >
            <q-item
                class="tw-flex tw-items-center tw-gap-3 tw-h-[5.5rem] tw-border-b tw-px-5"
            >
                <section>
                    <q-img
                        src="~/assets/img/icons/brand_logo.svg"
                        class="tw-w-12"
                    />
                </section>
                <section>
                    <q-item-label class="tw-font-bold tw-font-sen tw-text-lg"
                        >My Admin</q-item-label
                    >
                    <q-item-label caption lines="2"
                        >Managements App.</q-item-label
                    >
                </section>
            </q-item>
            <q-list class="tw-px-1.5 tw-mb-10">
                <template v-for="item in linksList" :key="item.title">
                    <q-item-label
                        header
                        class="tw-font-sen tw-text-xs tw-font-bold tw-text-grey-300"
                    >
                        {{ item.title }}
                    </q-item-label>

                    <aside class="tw-space-y-3">
                        <template v-for="link in item.childrens">
                            <LayoutMenuItem v-bind="link" />
                        </template>
                    </aside>
                </template>
            </q-list>
        </q-drawer>

        <q-page-container class="tw-py-10 tw-px-5">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
const menuStore = useMenuStore();

const linksList = reactive([
    {
        title: "Main Menu",
        childrens: [
            {
                title: "Dashboard",
                icon: "ElementEqual",
                link: "/",
            },
            {
                title: "Employees",
                icon: "People",
                link: "/employees",
            },
            {
                title: "Employees Debt",
                icon: "Moneys",
                link: "/employees-debt",
            },
            {
                title: "Absence",
                icon: "CalendarEdit",
                link: "/absence",
            },
            {
                title: "Overtime",
                icon: "CalendarAdd",
                link: "/overtime",
            },
        ],
    },
    {
        title: "Transaction",
        childrens: [
            {
                title: "Overtime Pay",
                icon: "MoneyChange",
                link: "/overtime-pay",
            },
            {
                title: "Salary",
                icon: "WalletMoney",
                link: "/salary",
            },
        ],
    },
    {
        title: "Reports",
        childrens: [
            {
                title: "All Reports",
                icon: "DocumentText",
                link: "/all-reports",
            },
        ],
    },
    {
        title: "Settings",
        childrens: [
            {
                title: "Managements",
                icon: "Setting3",
                link: "/",
                childrens: [
                    {
                        title: "Menus",
                        icon: "Menu",
                        link: "/menus",
                    },
                    {
                        title: "Users",
                        icon: "Profile2User",
                        link: "/users",
                    },
                    {
                        title: "Roles",
                        icon: "Lock1",
                        link: "/lock",
                    },
                ],
            },
        ],
    },
]);
</script>
