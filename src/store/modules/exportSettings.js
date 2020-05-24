export const namespaced = false;

export const state = {
  rowCount: 1000,
};

export const getters = {
  rowCount: (state) => {
    return state.rowCount;
  },
};

export const mutations = {
  UPDATE_ROWCOUNT(state, payload) {
    state.rowCount = payload;
  },
};
