export const namespaced = true;

export const state = {
  columns: [],
};

export const getters = {
  getColumns: (state) => {
    return state.columns;
  },
  getColumn: (state) => (uuid) => {
    return state.columns.find((column) => column.uuid === uuid);
  },
  getColumnIndex: (state) => (uuid) => {
    return state.columns.findIndex((column) => column.uuid === uuid);
  },
};

export const mutations = {
  ADD_COLUMN(state, payload) {
    state.columns.push(payload);
  },
  REMOVE_COLUMN(state, uuid) {
    state.columns = state.columns.filter((column) => column.uuid !== uuid);
  },
  SET_COLUMN(state, { uuid, payload }) {
    let id = getters.getColumnIndex(state)(uuid);
    if (id != -1) {
      // replace the item with splice() because vue cannot observe the change otherwise
      state.columns.splice(id, 1, payload);
    }
  },
  SET_COLUMN_NAME(state, { uuid, newName }) {
    let id = getters.getColumnIndex(state, uuid);
    if (id != -1) {
      this.$set(state.columns[id], 'name', newName);
    }
  },
};

export const actions = {
  addColumn({ commit }, payload) {
    commit('ADD_COLUMN', payload);
  },
  removeColumn({ commit }, id) {
    commit('REMOVE_COLUMN', id);
  },
  setColumn({ commit }, { uuid, payload }) {
    commit('SET_COLUMN', { uuid, payload });
  },
  setColumnName({ commit }, { uuid, newName }) {
    commit('SET_COLUMN_NAME', { uuid, newName });
  },
};
