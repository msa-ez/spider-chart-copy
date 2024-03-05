import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedProfile: localStorage.getItem('selectedProfile') || null,
  },
  mutations: {
    setSelectedProfile(state, profile) {
      state.selectedProfile = profile;
      // profile 값이 유효한 경우에만 localStorage에 저장
      if (profile) {
        localStorage.setItem('selectedProfile', profile);
      } else {
        // profile이 null이나 undefined인 경우, localStorage에서 해당 항목을 제거
        localStorage.removeItem('selectedProfile');
      }
    },
  },
  actions: {
    updateSelectedProfile({ commit }, profile) {
      commit('setSelectedProfile', profile);
    }
  }
});
