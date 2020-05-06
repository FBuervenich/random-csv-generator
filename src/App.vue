<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>CSV Generator</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row>
          <CsvColumnList />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CsvColumnList from '@/components/CsvColumnList';

export default {
  name: 'App',

  components: {
    CsvColumnList,
  },

  data: () => ({
    //
  }),

  props: {},
};
</script>

<style lang="scss"></style>
