<template>
  <div class="d-flex">
    <v-btn :disabled="isLoading" @click="initGeneration" color="success">Export</v-btn>
    <div v-if="isLoading" class="text-center mx-10">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { CSVDownloader } from '@/features/csv_downloader';
export default {
  data() {
    return {
      uri: '',
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.appState.isLoading,
    }),
  },
  methods: {
    initGeneration() {
      new CSVDownloader().generateAndDownload();
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
</style>
