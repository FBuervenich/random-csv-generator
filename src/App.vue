<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>CSV Generator</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row class="mb-5">
          <CsvColumnList />
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <CsvSettings />
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-5 mb-5">
          <v-btn color="success">Export</v-btn>
        </v-row>
        <v-divider></v-divider>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CsvColumnList from '@/components/CsvColumnList';
import CsvSettings from '@/components/CsvSettings.vue';

export default {
  name: 'App',

  components: {
    CsvColumnList,
    CsvSettings,
  },

  data: () => ({
    //
  }),

  props: {},
};
</script>

<style lang="scss"></style>
