export const namespaced = false;

export const state = {
  isLoading: false,
};

export const getters = {
  isLoading: (state) => {
    return state.isLoading;
  },
};

export const mutations = {
  UPDATE_ISLOADING(state, payload) {
    state.isLoading = payload;
  },
};
