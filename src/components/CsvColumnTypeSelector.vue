<template>
  <div>
    <v-dialog v-model="dialog" width="500" scrollable>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">{{ columnType.identifier }}</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Select column type
        </v-card-title>
        <v-card-text class="pt-5">
          <v-container>
            <v-row>
              <v-col
                v-for="(currColumnType, index) in allowedColumnTypes"
                :key="index"
                @click="selectColumnType(currColumnType)"
                class="columnTypeSelector"
                cols="6"
              >
                <h3>{{ currColumnType.identifier }}</h3>
                <span>{{ currColumnType.getDescription() }}</span>
                <br />
                <span>Example(s): {{ currColumnType.getExamples().join(', ') }}</span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  NumberColumnType,
  BlankColumnType,
  BooleanColumnType,
  StringColumnType,
} from '@/features/column_type';

export default {
  props: ['columnType'],
  data() {
    return {
      dialog: false,
      allowedColumnTypes: [
        new NumberColumnType(),
        new BlankColumnType(),
        new BooleanColumnType(),
        new StringColumnType(),
      ],
    };
  },
  methods: {
    selectColumnType: function (newColumnType) {
      this.dialog = false;
      // pass a new object up so the pointer on the current is not used multiple times
      this.$parent.$emit('columnTypeChanged', {
        uuid: this.columnType.uuid,
        columnType: newColumnType.constructor(),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.columnTypeSelector {
  cursor: pointer;
  border-radius: 4px;
}
.columnTypeSelector:hover {
  background-color: #f0f0f0;
}
</style>
