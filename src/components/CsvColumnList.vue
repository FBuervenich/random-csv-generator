<template>
  <div>
    <div v-for="(column, index) in columns" :key="index">{{ column }}</div>
    <CsvColumn v-for="(column, index) in columns" :key="index" />
  </div>
</template>

<script>
import CsvColumn from '@/components/CsvColumn.vue';
export default {
  components: {
    CsvColumn,
  },
  data() {
    return {
      columns: ['1', '2'],
    };
  },
};
</script>

<style lang="scss" scoped></style>
