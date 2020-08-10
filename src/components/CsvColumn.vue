<template>
  <div>
    <div>
      <v-row>
        <v-col class="handle" align="center" justify="center" cols="1" md="1">
          <v-icon>drag_handle</v-icon>
        </v-col>
        <v-col cols="7" md="3">
          <v-text-field v-model="columnName" label="Column name" outlined></v-text-field>
        </v-col>
        <v-col cols="4" md="2">
          <CsvColumnTypeSelector :columnType="columnType" />
        </v-col>
        <v-col cols="10" md="5">
          <Component
            v-bind:is="columnType.columnSettingsComponent"
            :uuid="this.columnType.uuid"
          ></Component>
        </v-col>
        <v-col cols="1">
          <v-btn class="mx-2" fab dark x-small color="secondary" @click="removeColumn">
            <v-icon dark>mdi-minus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider class="mb-5" v-if="this.$vuetify.breakpoint.smAndDown"></v-divider>
    </div>
  </div>
</template>

<script>
import CsvColumnTypeSelector from '@/components/CsvColumnTypeSelector.vue';
import NoColumnSettings from '@/components/CsvColumnSettings/NoColumnSettings.vue';
import NumberColumnSettings from '@/components/CsvColumnSettings/NumberColumnSettings.vue';
import StringColumnSettings from '@/components/CsvColumnSettings/StringColumnSettings.vue';
import DateColumnSettings from '@/components/CsvColumnSettings/DateColumnSettings.vue';

export default {
  components: {
    CsvColumnTypeSelector,
    NoColumnSettings,
    NumberColumnSettings,
    StringColumnSettings,
    DateColumnSettings,
  },
  data() {
    return {};
  },
  props: {
    columnType: {},
  },
  methods: {
    removeColumn() {
      this.$emit('columnRemoved');
    },
  },
  computed: {
    columnName: {
      get() {
        return this.columnType.name;
      },
      set(value) {
        this.$store.dispatch('column/setColumnName', { uuid: this.columnUUID, newName: value });
      },
    },
    columnUUID() {
      return this.columnType.uuid;
    },
  },
};
</script>

<style lang="scss" scoped>
.handle {
  cursor: grab;
}
</style>
