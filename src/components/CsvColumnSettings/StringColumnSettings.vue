<template>
  <div class="d-flex">
    <v-text-field
      @input="updateColumnProperty('amountCharacters', $event)"
      class="mx-1"
      type="number"
      label="length"
      v-model="length"
      outlined
    ></v-text-field>
  </div>
</template>

<script>
import { StringColumnType } from '@/features/column_type';
import ColumnSettingsMixin from '@/components/CsvColumnSettings/ColumnSettingsMixin';

export default {
  mixins: [ColumnSettingsMixin],
  data() {
    return {
      length: new StringColumnType().amountCharacters,
    };
  },
};
</script>

<style lang="scss" scoped></style>
