<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">{{ columnType }}</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Select column type
        </v-card-title>
        <v-card-text></v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Select
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnType: 'Number',
      dialog: false,
    };
  },
  methods: {
    selectColumnType: function () {},
  },
};
</script>

<style lang="scss" scoped></style>
