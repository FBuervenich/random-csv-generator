<template>
  <div>
    <v-row>
      <!-- <v-col align="center">
        <span>{{ this.columnType.name }}</span>
      </v-col> -->
      <v-col cols="4">
        <v-text-field v-model="columnName" label="Column name" outlined></v-text-field>
      </v-col>
      <v-col cols="7">
        <CsvColumnTypeSelector :columnType="columnType" />
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
