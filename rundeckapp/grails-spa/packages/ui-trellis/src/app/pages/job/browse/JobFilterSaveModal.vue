<template>
    <modal v-model="visible" :title="$t('job.list.filter.save.modal.title')">
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-2 control-label" for="jobFilter">
                    {{ $t("jobquery.title.jobFilter") }}:
                </label>
                <div class="col-sm-10">
                    <input
                        type="text"
                        name="jobFilter"
                        id="jobFilter"
                        v-model="filterName"
                        class="form-control"
                    />
                </div>
            </div>
            <div class="errors" v-if="error">
              {{error}}
            </div>
        </div>
        <template #footer>
            <btn @click="doClose">
                {{ $t("cancel") }}
            </btn>
            <btn type="primary" @click="doSave" :disabled="!filterName">
                {{ $t("job.list.filter.save.button") }}
            </btn>
        </template>
    </modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "JobFilterSaveModal",
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
        error: {
          type: String,
          default: false,
        },
    },
    emits: ["save", "update:modelValue"],
    setup(props) {
        return {
            visible: ref(props.modelValue),
            filterName: ref(""),
        };
    },
    watch: {
      visible(value) {
        this.$emit("update:modelValue", value);
      },
      modelValue(value) {
        this.visible = value;
      },
    },
    methods: {
        doClose() {
            this.visible = false;
            this.$emit("update:modelValue", false);
        },
        doSave() {
            this.$emit("save", this.filterName);
            this.filterName=''
            this.doClose()
        },
    },
});
</script>

<style scoped lang="scss"></style>
