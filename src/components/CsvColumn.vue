<template>
  <div>
    <v-row>
      <v-col align="center">
        <span>{{ this.columnType.name }}</span>
      </v-col>
      <v-col>
        <v-text-field label="Enter field name..." outlined></v-text-field>
      </v-col>
      <v-col>
        <CsvColumnTypeSelector />
      </v-col>
      <v-col>
        <v-btn class="mx-2" fab dark x-small color="secondary" @click="removeColumn">
          <v-icon dark>mdi-minus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CsvColumnTypeSelector from '@/components/CsvColumnTypeSelector.vue';
import { BaseColumnType } from '@/features/column_type.js';
export default {
  components: {
    CsvColumnTypeSelector,
  },
  props: {
    columnType: {},
  },
  methods: {
    removeColumn() {
      this.$emit('columnRemoved');
    },
    getColumnName: function () {
      return this.columnType.name;
    },
  },
  computed: {
    columnName: function () {
      return this.columnType.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
