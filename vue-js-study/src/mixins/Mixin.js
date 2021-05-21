import { mapState } from 'vuex';

export default {
  methods: {
  },

  computed: {
    ...mapState({
      ch1Sec4Message: state => state.ch1Sec4Message,
    }),
  },
}