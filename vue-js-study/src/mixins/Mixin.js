import { mapState } from 'vuex';

export default {
  methods: {
    updateCh1Sec5Message(e) {
        this.$store.commit('updateCh1Sec5Message', e.target.value);
    },

    setCh1Sec5List(list) {
        this.$store.commit('setCh1Sec5List', list);
    },

    setCh1Sec5Show(show) {
        this.$store.commit('setCh1Sec5Show', show);
    },

    setCh1Sec5TransitionShow(show) {
        this.$store.commit('setCh1Sec5TransitionShow', show);
    },

    setCh8Sec42Increment() {
        this.$store.commit('increment');
    },
  },

  getters: {
    ch1Sec5Message(state) {
        return state.ch1Sec5Message;
    },

    ch1Sec5TransitionShow(state) {
        return state.ch1Sec5TransitionShow;
    },

    ch8Sec42Count(state) {
        return state.ch8Sec42Count;
    },
  },

  computed: {
    ...mapState({
      ch1Sec4Message: state => state.ch1Sec4Message,
      ch1Sec5List: state => state.ch1Sec5List,
      ch1Sec5Message: state => state.ch1Sec5Message,
      ch1Sec5Show: state => state.ch1Sec5Show,
      ch1Sec5TransitionShow: state => state.ch1Sec5TransitionShow,
      ch8Sec42Count: state => state.ch8Sec42Count,
    }),
  },
}