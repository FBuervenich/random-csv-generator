<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field label="# Rows" v-model="rowCount" type="number" outlined></v-text-field>
      </v-col>
      <v-col>
        <v-select label="Format" :items="fileTypes" outlined></v-select>
      </v-col>
      <v-col>
        <v-checkbox v-model="includeHeader" label="Include header"></v-checkbox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rowCount: 1000,
      fileTypes: ['.csv'],
      includeHeader: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
