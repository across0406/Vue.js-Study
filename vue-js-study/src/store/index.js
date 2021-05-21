import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      ch1Sec4Message: 'Hello Vue.js!',
      ch1Sec5List: ['Apple', 'Banana'],
      ch1Sec5Message: 'Initial Message',
      ch1Sec5Show: true,
      ch1Sec5TransitionShow: true,
      ch8Sec42Count: 0,
    },
    mutations: {
        updateCh1Sec5Message(state, message) {
            state.ch1Sec5Message = message;
        },

        setCh1Sec5List(state, list) {
            state.ch1Sec5List = list;
        },

        setCh1Sec5Show(state, show) {
            state.ch1Sec5Show = show;
        },

        setCh1Sec5TransitionShow(state, show) {
            state.ch1Sec5TransitionShow = show;
        },

        increment(state) {
            state.ch8Sec42Count++;
        },
    },
    actions: {
    },
    modules: {
    }
  })
  