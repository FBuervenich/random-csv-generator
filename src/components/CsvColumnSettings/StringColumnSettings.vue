<template>
  <div class="d-flex">
    <v-text-field
      class="mx-1"
      type="number"
      label="length"
      v-model="length"
      outlined
    ></v-text-field>
  </div>
</template>

<script>
import { StringColumnType } from '@/features/column_type';

export default {
  data() {
    return {
      length: new StringColumnType().amountCharacters,
    };
  },
};
</script>

<style lang="scss" scoped></style>
