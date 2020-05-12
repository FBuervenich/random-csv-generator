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
          <CsvExport />
        </v-row>
        <v-divider></v-divider>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CsvColumnList from '@/components/CsvColumnList';
import CsvSettings from '@/components/CsvSettings.vue';
import CsvExport from '@/components/CsvExport.vue';

export default {
  name: 'App',

  components: {
    CsvColumnList,
    CsvSettings,
    CsvExport,
  },

  data: () => ({
    //
  }),

  props: {},
};
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(15px);
}
</style>
