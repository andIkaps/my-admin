<template>
    <div
        :class="[
            align != 'top' ? 'md:tw-flex' : null,
            'tw-items-baseline tw-gap-x-3 tw-space-y-1',
        ]"
    >
        <label class="tw-w-52"
            >{{ label }}
            <span v-if="required && !mark" class="text-red">*</span></label
        >
        <div class="tw-w-full">
            <q-select
                outlined
                :use-input="search"
                :dense="dense"
                color="secondary"
                :label="placeholder"
                :model-value="modelValue"
                :disable="disabled"
                :options="valOptions"
                :inputDebounce="0"
                :class="!required ?? 'tw-mb-6'"
                :rules="
                    required ? [(val) => !!val || `${label} is required`] : null
                "
                @update:model-value="
                    (value) => $emit('update:modelValue', value)
                "
                @filter="filterFn"
                :map-options="mapOptions"
                :emit-value="emitValue"
                :multiple="multiple"
                :clearable="clearable"
                :display-value="displayValue"
                :option-value="optionValue"
                :options-cover="optionsCover"
                :use-chips="useChips"
            >
                <template v-slot:no-option>
                    <q-item v-if="!custom_no_options">
                        <q-item-section class="text-grey">
                            No results
                        </q-item-section>
                    </q-item>
                    <slot name="no-option" v-else></slot>
                </template>

                <template v-if="custom_options" v-slot:option="scope">
                    <q-item v-bind="scope.itemProps">
                        <q-item-section avatar>
                            <div
                                :style="{
                                    backgroundColor: scope.opt.color,
                                    color: scope.opt.text_color,
                                }"
                                class="tw-flex tw-justify-center tw-rounded-lg tw-p-2 tw-font-bold tw-items-center"
                            >
                                <p class="tw-font-semibold tw-text-[9px]">
                                    {{ scope.opt.slug }}
                                </p>
                            </div>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ scope.opt.label }}</q-item-label>
                            <q-item-label caption>{{
                                scope.opt.description
                            }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </template>

                <template #after-options>
                    <slot name="after-options"></slot>
                </template>
            </q-select>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    props: [
        "label",
        "placeholder",
        "search",
        "options",
        "modelValue",
        "disabled",
        "required",
        "align",
        "dense",
        "mark",
        "mapOptions",
        "emitValue",
        "multiple",
        "clearable",
        "displayValue",
        "optionValue",
        "optionsCover",
        "custom_options",
        "custom_no_options",
        "useChips",
    ],
    emits: ["update:modelValue"],
    data() {
        const valOptions = ref(this.options);

        return {
            valOptions,
        };
    },
    methods: {
        filterFn(val, update) {
            if (val === "") {
                update(() => {
                    this.valOptions = this.options;
                });
                return;
            }

            update(() => {
                const needle = val.toLowerCase();
                this.valOptions = this.options.filter(
                    (v) => v.label.toLowerCase().indexOf(needle) > -1
                );
            });
        },
    },
};
</script>
