<template>
  <div>
    <v-btn>{{ columnType }}</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnType: 'Number',
    };
  },
};
</script>

<style lang="scss" scoped></style>
