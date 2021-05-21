import { mapState } from 'vuex';

export default {
  methods: {
    setCh1Sec5Message: function(message) {
        this.$store.commit('setCh1Sec5Message', message);
    },

    setCh1Sec5List: function(list) {
        this.$store.commit('setCh1Sec5List', list);
    },

    setCh1Sec5Show: function(show) {
        this.$store.commit('setCh1Sec5Show', show);
    },

    setCh1Sec5TransitionShow: function(show) {
        this.$store.commit('setCh1Sec5TransitionShow', show);
    },
  },

  computed: {
    ...mapState({
      ch1Sec4Message: state => state.ch1Sec4Message,
      ch1Sec5List: state => state.ch1Sec5List,
      ch1Sec5Message: state => state.ch1Sec5Message,
      ch1Sec5Show: state => state.ch1Sec5Show,
      ch1Sec5TransitionShow: state => state.ch1Sec5TransitionShow,
    }),
  },
}