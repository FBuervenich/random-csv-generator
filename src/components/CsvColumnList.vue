<template>
  <v-container>
    <draggable v-model="column.columns" handle=".handle">
      <transition-group name="list" tag="div">
        <CsvColumn
          v-for="columnType in column.columns"
          :key="columnType.uuid"
          :columnType="columnType"
          @columnRemoved="removeColumn(columnType.uuid)"
          @columnTypeChanged="updateColumnType($event)"
        />
      </transition-group>
    </draggable>
    <v-btn @click="addDefaultColumn">Add Column</v-btn>
  </v-container>
</template>

<script>
import CsvColumn from '@/components/CsvColumn.vue';
import { NumberColumnType } from '@/features/column_type';
import { mapState, mapActions } from 'vuex';
import draggable from 'vuedraggable';

export default {
  components: {
    CsvColumn,
    draggable,
  },
  data() {
    return {};
  },
  methods: {
    addDefaultColumn: function () {
      this.addColumn(new NumberColumnType());
    },
    updateColumnType(event) {
      this.setColumn({ uuid: event.uuid, payload: event.columnType });
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
