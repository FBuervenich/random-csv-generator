<template>
  <div>
    <transition-group name="list" tag="div">
      <CsvColumn
        v-for="(columnType, index) in columns"
        :key="index"
        :columnType="columnType"
        @columnRemoved="removeColumn(index)"
        @columnTypeChanged="updateColumnType($event, index)"
      />
    </transition-group>
  </div>
</template>

<script>
import CsvColumn from '@/components/CsvColumn.vue';
import { NumberColumnType } from '@/features/column_type';

export default {
  components: {
    CsvColumn,
  },
  data() {
    return {
      columns: [],
    };
  },
  methods: {
    addColumn: function () {
      this.columns.push(new NumberColumnType());
    },
    removeColumn: function (index) {
      this.columns.splice(index, 1);
    },
    updateColumnType: function (columnType, id) {
      // replace the item with splice() because vue cannot observe the change otherwise
      this.columns.splice(id, 1, columnType);
    },
  },
  created() {
    this.columns.push(new NumberColumnType());
    this.columns.push(new NumberColumnType());
  },
};
</script>

<style lang="scss" scoped></style>
