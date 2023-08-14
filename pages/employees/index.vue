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
            <section class="tw-flex tw-justify-between tw-items-center">
                <section class="tw-mb-5">
                    <h1 class="tw-text-base tw-font-bold">Filtered By</h1>

                    <section
                        class="tw-flex tw-gap-3 tw-overflow-auto tw-font-sen tw-max-w-xl"
                    >
                        <div
                            class="tw-flex tw-items-center tw-gap-3 tw-text-grey-400 tw-text-xs tw-mt-1 tw-whitespace-nowrap"
                        >
                            Name, <strong>Hoeger</strong>

                            <BaseIcon
                                name="CloseCircle"
                                :size="12"
                                class="tw-text-red"
                            />
                        </div>

                        <div
                            class="tw-flex tw-items-center tw-gap-3 tw-text-grey-400 tw-text-xs tw-mt-1"
                        >
                            Position, <strong>Cole</strong>

                            <BaseIcon
                                name="CloseCircle"
                                :size="12"
                                class="tw-text-red"
                            />
                        </div>

                        <div
                            class="tw-flex tw-items-center tw-gap-3 tw-text-grey-400 tw-text-xs tw-mt-1"
                        >
                            Birth Date, <strong>December 25, 2000</strong>

                            <BaseIcon
                                name="CloseCircle"
                                :size="12"
                                class="tw-text-red"
                            />
                        </div>
                    </section>
                </section>

                <div class="tw-flex tw-items-center tw-gap-3">
                    <BaseButton
                        icon="Grid9"
                        icon-position="left"
                        label="Columns"
                        style="border: 1.1px solid #7c7f85"
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
                                    v-for="col in tableColumns"
                                    :key="col.field"
                                    dense
                                    class="tw-py-2"
                                >
                                    <q-item-section>
                                        <q-checkbox
                                            right-label
                                            size="xs"
                                            color="secondary"
                                            v-model="orange"
                                            :label="col.label"
                                        />
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </BaseButton>

                    <BaseButton
                        icon="DocumentText"
                        icon-position="left"
                        label="Export Data"
                        style="border: 1.1px solid #7c7f85"
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
                                    v-for="col in tableColumns"
                                    :key="col.field"
                                    dense
                                    class="tw-py-2"
                                >
                                    <q-item-section>
                                        <q-checkbox
                                            right-label
                                            size="xs"
                                            color="secondary"
                                            v-model="orange"
                                            :label="col.label"
                                        />
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </BaseButton>
                </div>
            </section>

            <q-table
                flat
                selection="multiple"
                v-model:selected="selected"
                :columns="tableColumns"
                :rows="data?.users"
                :loading="pending"
                row-key="firstName"
            >
                <template v-slot:header="props">
                    <q-tr :props="props">
                        <q-th>
                            <q-checkbox v-model="props.selected" size="xs" />
                        </q-th>
                        <q-th
                            v-for="col in props.cols"
                            :key="col.name"
                            :props="props"
                        >
                            <div class="tw-flex tw-items-center tw-gap-3">
                                {{ col.label }}
                                <BaseIcon
                                    class="tw-cursor-pointer"
                                    name="Sort"
                                    :size="14"
                                    v-if="col.filter"
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
                                                class="tw-py-2"
                                            >
                                                <q-item-section>
                                                    <div
                                                        class="tw-flex tw-items-center tw-gap-3"
                                                    >
                                                        <BaseIcon
                                                            name="ArrowUp"
                                                            :size="12"
                                                        />
                                                        Sort Ascending
                                                    </div>
                                                </q-item-section>
                                            </q-item>
                                            <q-item
                                                clickable
                                                v-close-popup
                                                dense
                                                class="tw-py-2"
                                            >
                                                <q-item-section>
                                                    <div
                                                        class="tw-flex tw-items-center tw-gap-3"
                                                    >
                                                        <BaseIcon
                                                            name="ArrowDown"
                                                            :size="12"
                                                        />
                                                        Sort Descending
                                                    </div>
                                                </q-item-section>
                                            </q-item>
                                            <QSeparator />
                                            <q-item
                                                clickable
                                                dense
                                                v-if="col.type == 'text'"
                                            >
                                                <q-item-section>
                                                    <div
                                                        class="tw-flex tw-items-center tw-gap-3"
                                                    >
                                                        <BaseIcon
                                                            name="FilterSearch"
                                                            :size="12"
                                                        />
                                                        Search
                                                        <q-menu
                                                            anchor="bottom end"
                                                            self="top end"
                                                            class="tw-shadow-sm tw-border tw-text-xs"
                                                        >
                                                            <q-list
                                                                style="
                                                                    min-width: 100px;
                                                                "
                                                            >
                                                                <q-item dense>
                                                                    <q-item-section>
                                                                        <q-input
                                                                            type="text"
                                                                            label="Search"
                                                                            dense
                                                                            borderless
                                                                            color="secondary"
                                                                            input-class="h-1"
                                                                            class="tw-text-xs tw-text-black"
                                                                        >
                                                                            <template
                                                                                #prepend
                                                                            >
                                                                                <BaseIcon
                                                                                    name="SearchStatus1"
                                                                                    :size="
                                                                                        14
                                                                                    "
                                                                                    class="tw-mr-2"
                                                                                />
                                                                            </template>
                                                                        </q-input>
                                                                    </q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-menu>
                                                    </div>
                                                </q-item-section>
                                            </q-item>
                                            <q-item
                                                clickable
                                                dense
                                                class="tw-py-2"
                                                v-if="col.type == 'select'"
                                            >
                                                <q-item-section>
                                                    <div
                                                        class="tw-flex tw-items-center tw-gap-3"
                                                    >
                                                        <BaseIcon
                                                            name="FilterSearch"
                                                            :size="12"
                                                        />
                                                        Select Position
                                                        <q-menu
                                                            anchor="bottom end"
                                                            self="top end"
                                                            class="tw-shadow-sm tw-border tw-text-xs"
                                                        >
                                                            <q-list
                                                                style="
                                                                    min-width: 100px;
                                                                "
                                                            >
                                                                <q-item
                                                                    clickable
                                                                    v-close-popup
                                                                    dense
                                                                >
                                                                    <q-item-section>
                                                                        IT Dev
                                                                    </q-item-section>
                                                                </q-item>
                                                                <q-item
                                                                    clickable
                                                                    v-close-popup
                                                                    dense
                                                                >
                                                                    <q-item-section>
                                                                        Audit
                                                                    </q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-menu>
                                                    </div>
                                                </q-item-section>
                                            </q-item>
                                            <q-item
                                                clickable
                                                dense
                                                class="tw-py-2"
                                                v-if="col.type == 'date'"
                                            >
                                                <q-item-section>
                                                    <div
                                                        class="tw-flex tw-items-center tw-gap-3"
                                                    >
                                                        <BaseIcon
                                                            name="CalendarSearch"
                                                            :size="12"
                                                        />
                                                        Select Date
                                                        <q-menu
                                                            anchor="bottom end"
                                                            self="top end"
                                                            class="tw-shadow-sm tw-border tw-text-xs"
                                                        >
                                                            <q-date
                                                                v-model="date"
                                                                minimal
                                                                range
                                                                color="secondary"
                                                            />
                                                        </q-menu>
                                                    </div>
                                                </q-item-section>
                                            </q-item>
                                        </q-list>
                                    </q-menu>
                                </BaseIcon>
                            </div>
                        </q-th>
                    </q-tr>
                </template>

                <template #header-selection="props"> </template>

                <template #body-selection="props">
                    <q-checkbox v-model="props.selected" size="xs" />
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
        filter: true,
        type: "text",
        field: (row) => row.maidenName ?? "-",
    },
    {
        name: "email",
        label: "Email",
        align: "left",
        filter: true,
        type: "text",
        field: (row) => row.email ?? "-",
    },
    {
        name: "position",
        label: "Position",
        align: "left",
        filter: true,
        type: "select",
        field: (row) => row.maidenName ?? "-",
    },
    {
        name: "join_date",
        label: "Birth Date",
        align: "left",
        filter: true,
        type: "date",
        field: (row) => useDateFormatter(row.birthDate) ?? "-",
    },
    {
        name: "action",
        label: "",
        align: "left",
        filter: false,
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

const drawerRight = ref(false);

const keyword = ref("");
const selected = ref([]);

const params = new URLSearchParams();
params.append("Page", 1);

console.log(params.toString());

const { data, pending } = useFetch(
    `https://dummyjson.com/users?${params.toString()}`,
    {
        lazy: true,
        server: false,
    }
);

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
