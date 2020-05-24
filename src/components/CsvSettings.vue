<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          label="# Rows"
          :value="rowCount"
          @input="updateRowCount"
          type="number"
          outlined
        ></v-text-field>
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
import { mapState } from 'vuex';

export default {
  data() {
    return {
      fileTypes: ['.csv'],
    };
  },
  computed: {
    includeHeader: {
      get() {
        return this.$store.getters.includeHeader;
      },
      set(val) {
        this.$store.commit('UPDATE_INCLUDEHEADER', val);
      },
    },
    ...mapState({
      rowCount: (state) => state.settings.rowCount,
    }),
  },
  methods: {
    updateRowCount(val) {
      this.$store.commit('UPDATE_ROWCOUNT', val);
    },
    updateIncludeHeader(val) {
      this.$store.commit('UPDATE_INCLUDEHEADER', val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
