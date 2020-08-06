<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-text-field v-model="columnName" label="Column name" outlined></v-text-field>
      </v-col>
      <v-col cols="2">
        <CsvColumnTypeSelector :columnType="columnType" />
      </v-col>
      <v-col cols="5">
        <Component
          v-bind:is="columnType.columnSettingsComponent"
          :uuid="this.columnType.uuid"
        ></Component>
      </v-col>
      <v-col cols="1">
        <v-btn class="mx-2" fab dark x-small color="secondary" @click="removeColumn">
          <v-icon dark>mdi-minus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CsvColumnTypeSelector from '@/components/CsvColumnTypeSelector.vue';
import NoColumnSettings from '@/components/CsvColumnSettings/NoColumnSettings.vue';
import NumberColumnSettings from '@/components/CsvColumnSettings/NumberColumnSettings.vue';
import StringColumnSettings from '@/components/CsvColumnSettings/StringColumnSettings.vue';
import DateColumnSettings from '@/components/CsvColumnSettings/DateColumnSettings.vue';

export default {
  components: {
    CsvColumnTypeSelector,
    NoColumnSettings,
    NumberColumnSettings,
    StringColumnSettings,
    DateColumnSettings,
  },
  data() {
    return {};
  },
  props: {
    columnType: {},
  },
  methods: {
    removeColumn() {
      this.$emit('columnRemoved');
    },
  },
  computed: {
    columnName: {
      get() {
        return this.columnType.name;
      },
      set(value) {
        this.$store.dispatch('column/setColumnName', { uuid: this.columnUUID, newName: value });
      },
    },
    columnUUID() {
      return this.columnType.uuid;
    },
  },
};
</script>

<style lang="scss" scoped></style>
