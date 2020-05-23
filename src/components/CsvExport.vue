<template>
  <div>
    <v-btn @click="initGeneration" color="success">Export</v-btn>
    <!-- <a ref="startDownload" download="export.csv" :href="uri" class="hidden">test</a> -->
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
    ...mapState(['column']),
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
