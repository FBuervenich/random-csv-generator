<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>CSV Generator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-source-branch</v-icon>
      <div class="ml-2">
        <div>
          <span class="mr-2">Version:</span>
          <span class="font-weight-bold">{{ projectVersion }}</span>
        </div>
        <div>
          <span class="mr-2">Release:</span>
          <span class="font-weight-bold">{{ commitHash }}</span>
        </div>
      </div>
    </v-app-bar>
    <v-content class="grey lighten-5">
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
// /* global GIT_DESCRIBE */

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

  data() {
    return {
      projectVersion: process.env.VUE_APP_VERSION,
      commitHash: GIT_DESCRIBE.hash,
    };
  },
  created() {},
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
