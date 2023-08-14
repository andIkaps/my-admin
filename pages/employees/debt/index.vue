<template>
    <QPage padding class="tw-space-y-5">
        <BaseSectionTitle title="Assignments List">
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
                :rows="assignments?.data"
                :loading="pending"
                row-key="firstName"
            >
                <template #loading>
                    <q-inner-loading :showing="true" size="lg" />
                </template>

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
// import { Notify } from "quasar";

const menuStore = useMenuStore();

const tableColumns = ref([
    {
        name: "BranchID",
        required: true,
        label: "Branch",
        align: "left",
        field: "BranchID",
    },
    {
        name: "AreaID",
        required: true,
        label: "Area",
        align: "left",
        field: "AreaID",
    },
    {
        name: "AgreementNo",
        required: true,
        label: "Agrement No",
        align: "left",
        field: "AgreementNo",
    },
    {
        name: "FullName",
        required: true,
        label: "Nama",
        align: "left",
        field: "FullName",
    },
    {
        name: "Model",
        required: true,
        label: "Model",
        align: "left",
        field: "Model",
    },
    {
        name: "Tenor",
        required: true,
        label: "Tenor",
        align: "left",
        field: "Tenor",
    },
    {
        name: "Angke",
        required: true,
        label: "Angsuran Ke",
        align: "left",
        field: "Angke",
    },
    {
        name: "Ovd",
        required: true,
        label: "OVD",
        align: "left",
        field: "Ovd",
    },
    {
        name: "InstallmentAmount",
        required: true,
        label: "Angsuran",
        align: "left",
        field: "InstallmentAmount",
    },
    {
        name: "OutstandingPrincipal",
        required: true,
        label: "Saldo Pokok Today",
        align: "left",
        field: "OutstandingPrincipal",
    },
    {
        name: "DisburseAmount",
        required: true,
        label: "Nominal Pencairan",
        align: "left",
        field: "DisburseAmount",
    },
    {
        name: "DisburseDate",
        required: true,
        label: "Tanggal Cair",
        align: "left",
        field: (row) => (row.DisburseDate ? row.DisburseDate : "-"),
    },
    {
        name: "DoDate",
        required: true,
        label: "Tanggal DO",
        align: "left",
        field: (row) => (row.DoDate ? row.DoDate : "-"),
    },
    {
        name: "DueDate",
        required: true,
        label: "Tanggal JT",
        align: "left",
        field: "DueDate",
    },
    {
        name: "ProductOfferingID",
        required: true,
        label: "Product Offering ID",
        align: "left",
        field: (row) => (row.ProductOfferingID ? row.ProductOfferingID : "-"),
    },
    {
        name: "DebtorSubDistrict",
        required: true,
        label: "Kelurahan Residence",
        align: "left",
        field: "DebtorSubDistrict",
    },
    {
        name: "DebtorDistrict",
        required: true,
        label: "Kecamatan Residence",
        align: "left",
        field: "DebtorDistrict",
    },
    {
        name: "surveyor",
        required: true,
        label: "Surveyor",
        align: "left",
        field: (row) => row.Surveyor || "-",
    },
    {
        name: "StatusAsset",
        required: true,
        label: "Status Asset",
        align: "left",
        field: "StatusAsset",
    },
    {
        name: "ApplicationPriority",
        required: true,
        label: "Application Priority",
        align: "left",
        field: (row) =>
            row.ApplicationPriority ? row.ApplicationPriority : "-",
    },
    {
        name: "BusinessAgentName",
        required: true,
        label: "BA Name",
        align: "left",
        field: (row) => (row.BusinessAgentName ? row.BusinessAgentName : "-"),
    },
    {
        name: "SourceApplication",
        required: true,
        label: "Source Application",
        align: "left",
        field: (row) => (row.SourceApplication ? row.SourceApplication : "-"),
    },
    {
        name: "PullDate",
        required: true,
        label: "Tanggal Tarik",
        align: "left",
        field: (row) => (row.PullDate ? row.PullDate : "-"),
    },
    {
        name: "PaymentDate",
        required: true,
        label: "Tanggal Pelunasan",
        align: "left",
        field: (row) => (row.PaymentDate ? row.PaymentDate : "-"),
    },
    {
        name: "ReleaseDate",
        required: true,
        label: "Release Date",
        align: "left",
        field: (row) => (row.ReleaseDate ? row.ReleaseDate : "-"),
    },
    {
        name: "SellingAmount",
        required: true,
        label: "Selling Amount",
        align: "left",
        field: (row) => (row.SellingAmount ? row.SellingAmount : "-"),
    },
    {
        name: "LorPor",
        required: true,
        label: "Lor / Por",
        align: "left",
        field: (row) => (row.LorPor ? row.LorPor : "-"),
    },
    {
        name: "Action",
        required: true,
        label: "Action",
        align: "left",
    },
]);

const tableRows = ref([]);

const keyword = ref("");
const selected = ref([]);

const params = new URLSearchParams();
params.append("BranchID", 404);
const { data: assignments, pending } = await useFetch(
    "http://localhost:7102/api/v1/assignments?BranchID=460",
    {
        lazy: true,
        server: false,
        headers: {
            Accept: "application/json",
            Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBdXRob3JpemVkIjp0cnVlLCJBdmF0YXIiOiJkZWZhdWx0LnBuZyIsIkVtYWlsIjoiYXpyaWVsLmZhdHVyMUBnbWFpbC5jb20iLCJFeHBpcmVkIjoxNjgwNzYzMzkyLCJJRCI6Ijk2YWM0YzUzLTYyZTItNDI1MC1iNjM2LWQ4YWM4Y2JhODZkZiIsIk5hbWUiOiJBenJpZWwgRmF0dXIiLCJSb2xlIjpbeyJJRCI6ImE4MzJiNGJkLWU1YzAtNDIwNS1iYjJkLTBmOTg4MjE4YTFmOCIsIk5hbWUiOiJTUFYiLCJEZXNjcmlwdGlvbiI6IkxvZ2luIHVudHVrIFN1cGVydmlzb3IgQXNzaWdubWVudCIsIkNyZWF0ZWRBdCI6IjIwMjMtMDQtMDRUMDk6Mzk6MTIrMDc6MDAiLCJDcmVhdGVkQnkiOiJTWVNURU0iLCJVcGRhdGVkQXQiOiIyMDIzLTA0LTA0VDA5OjM5OjEyKzA3OjAwIiwiVXBkYXRlZEJ5IjoiU1lTVEVNIiwiRGVsZXRlZEF0IjpudWxsfV0sIlVzZXJuYW1lIjoiYXpyaWVsZmF0dXIifQ.B1byKuhoaYt4dmVATC49bBV9mpwNLqvftw1EbFxKyQs",
        },
        async onResponseError({ request, response, options }) {
            // Log error
            Notify.create({
                type: "negative",
                message: "error while getting new Assignments",
                timeout: 2000,
            });
            console.log(response.body, request);
        },
    }
);

if (assignments._value?.data) {
    tableRows.value = await assignments._value?.data;
}

onMounted(() => {
    menuStore.title = "Create Assignments";
    console.log("mounted");
});
</script>

<script>
export default {
    name: "employees",
};
</script>

<style></style>
