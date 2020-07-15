<template>
  <div class="d-flex">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-text-field
          @input="updateColumnProperty('format', $event)"
          class="mx-1"
          type="text"
          label="format"
          v-model="min"
          outlined
          v-on="on"
        ></v-text-field>
      </template>
      <span>
        Date format. Can be any format parsed by moment.js (see
        https://momentjs.com/docs/#/displaying/format/ for details). Default is 'DD.MM.YYYY'.
      </span>
    </v-tooltip>
  </div>
</template>

<script>
import { DateColumnType } from '@/features/column_type';
import ColumnSettingsMixin from '@/components/CsvColumnSettings/ColumnSettingsMixin';

export default {
  mixins: [ColumnSettingsMixin],
  data() {
    const defaultDateColumnType = new DateColumnType();
    return {
      min: defaultDateColumnType.min,
    };
  },
};
</script>

<style lang="scss" scoped></style>
