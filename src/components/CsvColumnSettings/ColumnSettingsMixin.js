/* eslint-disable no-unused-vars */
export default {
  props: {
    uuid: String,
  },
  methods: {
    updateColumnProperty(property, value) {
      this.$store.dispatch('column/setColumnSetting', { uuid: this.uuid, key: property, value });
    },
  },
};
