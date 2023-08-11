<template>
    <QPage padding class="tw-space-y-5">
        <BaseSectionTitle title="All Employees">
            <BaseButton
                label="Create new"
                class="tw-bg-primary !tw-text-white"
                icon="UserAdd"
                icon-position="left"
            />
        </BaseSectionTitle>
        <BaseCard>
            <q-input
                v-model="keyword"
                borderless
                label="Search employees"
                type="text"
                class="tw-text-xs"
            />
            <q-table
                flat
                selection="multiple"
                v-model:selected="selected"
                :columns="tableColumns"
                :rows="data?.users"
                :loading="pending"
                row-key="firstName"
            >
                <template #header-selection="props">
                    <q-checkbox v-model="props.selected" size="sm" />
                </template>
                <template #body-selection="props">
                    <q-checkbox v-model="props.selected" size="sm" />
                </template>
                <template v-slot:body-cell-name="props">
                    <q-td :props="props">
                        <span
                            class="tw-font-medium tw-text-[#967aa1] tw-underline tw-cursor-pointer"
                            >{{ props.row.maidenName }}</span
                        >
                    </q-td>
                </template>
                <template v-slot:body-cell-action="props">
                    <q-td>
                        <BaseIcon
                            name="More"
                            :size="14"
                            class="tw-cursor-pointer tw-rotate-90"
                        >
                            <q-menu
                                anchor="bottom end"
                                self="top end"
                                class="tw-shadow-sm tw-border tw-text-xs"
                            >
                                <q-list style="min-width: 100px">
                                    <q-item
                                        clickable
                                        v-close-popup
                                        dense
                                        class="!tw-py-2.5"
                                    >
                                        <q-item-section>
                                            <section
                                                class="tw-flex tw-gap-3 tw-whitespace-nowrap"
                                            >
                                                <BaseIcon
                                                    name="DocumentText"
                                                    :size="16"
                                                    color="#003049"
                                                />
                                                View Details
                                            </section>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator />
                                    <q-item
                                        clickable
                                        v-close-popup
                                        dense
                                        class="!tw-py-2.5"
                                    >
                                        <q-item-section>
                                            <section
                                                class="tw-flex tw-gap-3 tw-whitespace-nowrap"
                                            >
                                                <BaseIcon
                                                    name="TickSquare"
                                                    :size="16"
                                                    color="#00296b"
                                                />
                                                Accepts
                                            </section>
                                        </q-item-section>
                                    </q-item>
                                    <q-item
                                        clickable
                                        v-close-popup
                                        dense
                                        class="!tw-py-2.5"
                                    >
                                        <q-item-section>
                                            <section
                                                class="tw-flex tw-gap-3 tw-whitespace-nowrap"
                                            >
                                                <BaseIcon
                                                    name="TickSquare"
                                                    :size="16"
                                                    color="#00296b"
                                                />
                                                Approve
                                            </section>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator />
                                    <q-item
                                        clickable
                                        v-close-popup
                                        dense
                                        class="!tw-py-2.5"
                                    >
                                        <q-item-section>
                                            <section
                                                class="tw-flex tw-gap-3 tw-whitespace-nowrap"
                                            >
                                                <BaseIcon
                                                    name="CloseSquare"
                                                    :size="16"
                                                    color="#941b0c"
                                                />
                                                Reject
                                            </section>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </BaseIcon>
                    </q-td>
                </template>
            </q-table>
        </BaseCard>
    </QPage>
</template>

<script setup>
const menuStore = useMenuStore();

const tableColumns = ref([
    {
        name: "name",
        label: "Name",
        align: "left",
        field: (row) => row.maidenName ?? "-",
    },
    {
        name: "email",
        label: "Email",
        align: "left",
        field: (row) => row.email ?? "-",
    },
    {
        name: "position",
        label: "Position",
        align: "left",
        field: (row) => row.maidenName ?? "-",
    },
    {
        name: "join_date",
        label: "Birth Date",
        align: "left",
        field: (row) => useDateFormatter(row.birthDate) ?? "-",
    },
    {
        name: "action",
        label: "Action",
        align: "left",
    },
]);
const tableRows = ref([
    {
        ID: +new Date(),
        Name: "Kaela Kovalskia",
        Email: "coolestkaela@hololive.com",
        Role: {
            Name: "Vtuber",
        },
        CreatedAt: "2023-06-09 14:20:25.394",
    },
]);

const keyword = ref("");
const selected = ref([]);

const { data, pending } = useFetch("https://dummyjson.com/users", {
    lazy: true,
    server: false,
});

onMounted(() => {
    menuStore.title = "Employees";
    console.log("mounted");
});
</script>

<script>
export default {
    name: "employees",
};
</script>

<style></style>
