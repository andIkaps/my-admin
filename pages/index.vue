<template>
    <q-page padding class="tw-space-y-5">
        <BaseSectionTitle title="Dashboard Expenditure">
            <BaseButton
                :label="selectedDay"
                icon="ArrowDown2"
                icon-position="right"
                class="tw-bg-white tw-text-black"
            >
                <q-menu
                    fit
                    class="tw-shadow-sm tw-border"
                    anchor="bottom right"
                    self="top end"
                >
                    <q-list style="min-width: 100px">
                        <template v-for="day in days" :key="day.label">
                            <q-item
                                clickable
                                v-close-popup
                                @click="selectedDay = day.value"
                            >
                                <q-item-section>{{ day.label }}</q-item-section>
                            </q-item>
                        </template>
                    </q-list>
                </q-menu>
            </BaseButton>
        </BaseSectionTitle>

        <main class="tw-space-y-5">
            <section class="tw-grid tw-gap-5 tw-grid-cols-1 lg:tw-grid-cols-3">
                <BaseCard
                    v-for="stat in dahsboardStats"
                    :key="stat.Name"
                    class="tw-flex tw-flex-col tw-gap-10"
                >
                    <div
                        class="tw-flex tw-w-full tw-items-center tw-justify-between"
                    >
                        <div
                            class="tw-w-10 tw-h-10 tw-rounded-full tw-grid tw-place-content-center"
                            :style="{
                                backgroundColor: `${stat.Color}15`,
                            }"
                        >
                            <BaseIcon
                                :name="stat.Icon"
                                :size="16"
                                :style="{ color: stat.Color }"
                            />
                        </div>

                        <BaseIcon
                            name="More"
                            :size="14"
                            class="tw-cursor-pointer"
                        >
                            <q-tooltip> Information will be here </q-tooltip>
                        </BaseIcon>
                    </div>
                    <div class="tw-space-y-2">
                        <h1
                            class="tw-font-bold tw-text-3xl tw-font-poppins tw-text-[#001427]"
                        >
                            {{ stat.Value }}
                        </h1>
                        <p class="tw-text-grey-400 tw-font-sen">
                            {{ stat.Name }}
                        </p>
                    </div>
                </BaseCard>
            </section>

            <div class="tw-grid tw-grid-cols-1 tw-gap-5 lg:tw-grid-cols-12">
                <BaseCard
                    class="tw-flex tw-flex-col tw-gap-10 lg:tw-col-span-8"
                >
                    <header class="tw-space-y-1">
                        <h1 class="tw-text-base tw-font-bold">
                            Salary Expenditure
                        </h1>
                        <p class="tw-text-grey-400 tw-text-xs tw-font-sen">
                            {{ selectedDay }}
                        </p>
                    </header>
                    <apexchart
                        type="bar"
                        height="350"
                        :options="columnChart.chartOptions"
                        :series="columnChart.series"
                    ></apexchart>
                </BaseCard>

                <BaseCard
                    class="tw-flex tw-flex-col tw-gap-10 lg:tw-col-span-4"
                >
                    <header class="tw-space-y-1">
                        <h1 class="tw-text-base tw-font-bold">
                            Employees Attendance
                        </h1>
                        <p class="tw-text-grey-400 tw-text-xs tw-font-sen">
                            {{ selectedDay }}
                        </p>
                    </header>

                    <div class="tw-flex tw-justify-center">
                        <apexchart
                            type="donut"
                            :options="pieChart.chartOptions"
                            :series="pieChart.series"
                        ></apexchart>
                    </div>

                    <div
                        class="tw-flex tw-gap-8 tw-flex-wrap tw-justify-center"
                    >
                        <template
                            v-for="(series, index) in pieChart.chartOptions
                                .labels"
                        >
                            <div class="tw-flex tw-gap-2 tw-items-center">
                                <span
                                    class="tw-block tw-w-3 tw-h-3 tw-rounded-sm"
                                    :style="{
                                        backgroundColor:
                                            pieChart.chartOptions.colors[index],
                                    }"
                                ></span>

                                {{ series }}
                            </div>
                        </template>
                    </div>
                </BaseCard>
            </div>

            <BaseCard class="tw-flex tw-flex-col">
                <header class="tw-space-y-1">
                    <h1 class="tw-text-base tw-font-bold">Employees Debt</h1>
                    <p class="tw-text-grey-400 tw-text-xs tw-font-sen">
                        {{ selectedDay }}
                    </p>
                </header>
                <apexchart
                    type="bar"
                    height="550"
                    :options="barChart.chartOptions"
                    :series="barChart.series"
                ></apexchart>
            </BaseCard>

            <section class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-5">
                <BaseCard>
                    <header class="tw-space-y-1">
                        <h1 class="tw-text-base tw-font-bold">
                            Last Activity Attendance
                        </h1>
                        <p class="tw-text-grey-400 tw-text-xs tw-font-sen">
                            {{ selectedDay }}
                        </p>
                    </header>

                    <q-table
                        flat
                        :columns="attendenceColumns"
                        :rows="attendenceRows"
                        row-key="name"
                        class="tw-mt-5"
                    >
                        <template v-slot:body-cell-name="props">
                            <q-td :props="props">
                                <span
                                    class="tw-font-medium tw-text-[#967aa1] tw-underline tw-cursor-pointer"
                                    >{{ props.row.User?.Name }}</span
                                >
                            </q-td>
                        </template>
                    </q-table>
                </BaseCard>

                <BaseCard>
                    <header class="tw-space-y-1">
                        <h1 class="tw-text-base tw-font-bold">
                            Last Loan Activity
                        </h1>
                        <p class="tw-text-grey-400 tw-text-xs tw-font-sen">
                            {{ selectedDay }}
                        </p>
                    </header>

                    <q-table
                        flat
                        :columns="loanColumns"
                        :rows="loanRows"
                        row-key="name"
                        class="tw-mt-5"
                    >
                        <template v-slot:body-cell-name="props">
                            <q-td :props="props">
                                <span
                                    class="tw-font-medium tw-text-[#967aa1] tw-underline tw-cursor-pointer"
                                    >{{ props.row.User?.Name }}</span
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
            </section>
        </main>
    </q-page>
</template>

<script setup lang="ts">
useHead({
    title: "Dashboard",
});

const menuStore = useMenuStore();

const dahsboardStats = ref([
    {
        Name: "Employees Debt",
        Icon: "MoneyTime",
        Color: "#9b2226",
        Value: "Rp. 54.450.000 ,-",
    },
    {
        Name: "Salary Expenditure",
        Icon: "MoneySend",
        Color: "#ff9f1c",
        Value: "Rp. 75.450.000 ,-",
    },
    {
        Name: "Total Expenditure",
        Icon: "MoneyAdd",
        Color: "#2380E3",
        Value: "Rp. 129.900.000 ,-",
    },
]);
const selectedDay = ref("Last 30 days");
const days = ref([
    {
        label: "Today",
        value: "Today",
    },
    {
        label: "This Week",
        value: "This Week",
    },
    {
        label: "Last Week",
        value: "Last Week",
    },
    {
        label: "This Month",
        value: "This Month",
    },
    {
        label: "Last Month",
        value: "Last Month",
    },
    {
        label: "Custom",
        value: "Custom",
    },
]);

const colors = ["#5465ff"];
const columnChart = ref({
    series: [
        {
            data: [
                1300000000, 1450000000, 1600000000, 250000000, 350000000,
                500000000, 700000000, 1800000000, 2100000000, 800000000,
                950000000, 1100000000,
            ],
        },
    ],
    chartOptions: {
        chart: {
            height: 350,
            type: "bar",
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                },
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                borderRadius: 8,
                columnWidth: "45%",
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            labels: {
                // style: {
                //     colors: colors,
                //     fontSize: "12px",
                // },
            },
        },
    },
});
const barChart = ref({
    series: [
        {
            data: [
                1300000000, 1450000000, 1600000000, 250000000, 350000000,
                500000000, 700000000, 1800000000, 2100000000, 800000000,
                950000000, 1100000000,
            ],
        },
    ],
    chartOptions: {
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
    },
});
const pieChart = ref({
    series: [44, 55, 41],
    chartOptions: {
        colors: ["#5465ff", "#E8AA42", "#F45050"],
        chart: {
            type: "donut",
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, { seriesIndex, dataPointIndex, w }) {
                var originalValue = w.globals.series[seriesIndex];
                return originalValue;
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "top",
                    },
                },
            },
        ],
        labels: ["Present", "Permit", "Sick Leave"],
        legend: {
            show: false,
            position: "right",
            offsetY: 0,
            height: 230,
        },
    },
});

const attendenceColumns = ref([
    {
        name: "name",
        label: "Employee Name",
        align: "left",
        field: (row: any) => row.User?.Name ?? "-",
    },
    {
        name: "date",
        label: "Date",
        align: "left",
        field: (row: any) => useDateFormatter(row.Date) ?? "-",
    },
    {
        name: "time_in",
        label: "Time in",
        align: "left",
        field: (row: any) => useDateTimeFormat(row.TimeIn) ?? "-",
    },
    {
        name: "time_out",
        label: "Time Out",
        align: "left",
        field: (row: any) => (row.TimeOut != "" ? row.TimeOut : "-"),
    },
    {
        name: "status",
        label: "Status",
        align: "left",
        field: (row: any) => row.Status?.Name ?? "-",
    },
]);
const attendenceRows = ref([
    {
        ID: +new Date() + Math.random(),
        User: {
            Name: "Vestia Zeta",
        },
        Date: "2023-07-12 13:55:25.394",
        TimeIn: "2023-07-12 08:01:25.394",
        TimeOut: "",
        Status: {
            Name: "Present",
        },
    },
    {
        ID: +new Date() + Math.random(),
        User: {
            Name: "Kaela Kovalskia",
        },
        Date: "2023-07-12 13:55:25.394",
        TimeIn: "2023-07-12 08:01:25.394",
        TimeOut: "",
        Status: {
            Name: "Permit",
        },
    },
    {
        ID: +new Date() + Math.random(),
        User: {
            Name: "Kobo Kanaeru",
        },
        Date: "2023-07-12 13:55:25.394",
        TimeIn: "2023-07-12 08:01:25.394",
        TimeOut: "",
        Status: {
            Name: "Sick Leave",
        },
    },
]);

const loanColumns = ref([
    {
        name: "name",
        label: "Employee Name",
        align: "left",
        field: (row: any) => row.User?.Name ?? "-",
    },
    {
        name: "total_debt",
        label: "Total Debt",
        align: "left",
        field: (row: any) => useRupiahFormat(row.Debt?.Amount) ?? "-",
    },
    {
        name: "reason",
        label: "Reason",
        align: "left",
        field: (row: any) => row.Reason ?? "-",
    },
    {
        name: "amount",
        label: "Amount",
        align: "left",
        field: (row: any) => useRupiahFormat(row.Amount) ?? "-",
    },
    {
        name: "action",
        label: "",
        align: "left",
    },
]);
const loanRows = ref([
    {
        ID: +new Date() + Math.random(),
        User: {
            Name: "Vestia Zeta",
        },
        Debt: {
            Amount: 1250000,
        },
        Reason: "Buat tambahan upgrade PC",
        Amount: 500000,
    },
    {
        ID: +new Date() + Math.random(),
        User: {
            Name: "Kaela Kovalskia",
        },
        Debt: {
            Amount: 250000,
        },
        Reason: "Buat tambahan upgrade Netherite Pickaxe",
        Amount: 350000,
    },
    {
        ID: +new Date() + Math.random(),
        User: {
            Name: "Kobo Kanaeru",
        },
        Debt: {
            Amount: 1550000,
        },
        Reason: "Buat beli nitendo Switch",
        Amount: 4350000,
    },
]);

onMounted(() => {
    menuStore.title = "Dashboard";
});
</script>
