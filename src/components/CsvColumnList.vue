<template>
  <div>
    <CsvColumn
      v-for="(column, index) in columns"
      :key="index"
      :columnName="column"
      @columnRemoved="removeColumn(index)"
    />
    <v-btn @click="addColumn">Add Column</v-btn>
  </div>
</template>

<script>
import CsvColumn from '@/components/CsvColumn.vue';
export default {
  components: {
    CsvColumn,
  },
  data() {
    return {
      columns: ['1', '2'],
    };
  },
  methods: {
    addColumn: function () {
      this.columns.push('hallo');
      // console.log(this.columns);
    },
    removeColumn: function (index) {
      this.columns.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
