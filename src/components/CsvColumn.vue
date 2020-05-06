<template>
  <div>
    <v-row>
      <v-col align="center">
        <span>{{ columnName }}</span>
      </v-col>
      <v-col>
        <v-text-field label="Enter field name..." outlined></v-text-field>
      </v-col>
      <v-col>
        <CsvColumnTypeSelector />
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
    columnName: String,
  },
};
</script>

<style lang="scss" scoped></style>
