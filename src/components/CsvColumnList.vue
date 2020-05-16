<template>
  <div>
    <transition-group name="list" tag="div">
      <CsvColumn
        v-for="columnType in column.columns"
        :key="columnType.getUUID()"
        :columnType="columnType"
        @columnRemoved="removeColumn(columnType.getUUID())"
        @columnTypeChanged="setColumn($event, columnType.getUUID())"
      />
    </transition-group>
    <v-btn @click="addDefaultColumn">Add Column</v-btn>
  </div>
</template>

<script>
import CsvColumn from '@/components/CsvColumn.vue';
import { NumberColumnType } from '@/features/column_type';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    CsvColumn,
  },
  data() {
    return {};
  },
  methods: {
    addDefaultColumn: function () {
      this.addColumn(new NumberColumnType());
    },
    ...mapActions('column', ['addColumn', 'setColumn', 'setColumnName', 'removeColumn']),
  },
  created() {
    this.addDefaultColumn();
    this.addDefaultColumn();
  },
  computed: {
    ...mapState(['column']),
  },
};
</script>

<style lang="scss" scoped></style>
