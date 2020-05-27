<template>
  <div class="d-flex">
    <v-text-field
      @input="updateColumnProperty('min', $event)"
      class="mx-1"
      type="number"
      label="min"
      v-model="min"
      outlined
    ></v-text-field>
    <v-text-field
      @input="updateColumnProperty('max', $event)"
      class="mx-1"
      type="number"
      label="max"
      v-model="max"
      outlined
    ></v-text-field>
    <v-text-field
      @input="updateColumnProperty('decimals', $event)"
      class="mx-1"
      type="number"
      label="decimals"
      v-model="decimals"
      outlined
    ></v-text-field>
  </div>
</template>

<script>
import { NumberColumnType } from '@/features/column_type';
import ColumnSettingsMixin from '@/components/CsvColumnSettings/ColumnSettingsMixin';

export default {
  mixins: [ColumnSettingsMixin],
  data() {
    return {
      min: new NumberColumnType().min,
      max: new NumberColumnType().max,
      decimals: new NumberColumnType().decimals,
    };
  },
};
</script>

<style lang="scss" scoped></style>
