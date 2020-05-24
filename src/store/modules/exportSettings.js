export const namespaced = false;

export const state = {
  rowCount: 1000,
  includeHeader: true,
};

export const getters = {
  rowCount: (state) => {
    return state.rowCount;
  },
  includeHeader: (state) => {
    return state.includeHeader;
  },
};

export const mutations = {
  UPDATE_ROWCOUNT(state, payload) {
    state.rowCount = payload;
  },
  UPDATE_INCLUDEHEADER(state, payload) {
    state.includeHeader = payload;
  },
};
