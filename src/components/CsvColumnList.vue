<template>
  <div>
    <transition-group name="list" tag="div">
      <CsvColumn
        v-for="(columnType, index) in columns"
        :key="index"
        :columnType="columnType"
        @columnRemoved="removeColumn(index)"
        @columnTypeChanged="updateColumnType($event, index)"
        :test="test"
      />
    </transition-group>
    <v-btn @click="addColumn">Add Column</v-btn>
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
      test: {
        hallo: 'hallo1',
      },
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
      this.columns[id] = columnType;
      this.test['test2'] = 'lalala';
    },
  },
  created() {
    this.columns.push(new NumberColumnType());
    this.columns.push(new NumberColumnType());
    this.columns[0] = { hallo: 'ja' };
  },
};
</script>

<style lang="scss" scoped></style>
