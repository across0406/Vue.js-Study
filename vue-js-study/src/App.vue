<template>
  <div id="app">
    <Chapter1/>
  </div>
</template>

<script>
import Chapter1 from './components/Chapter1.vue';
import Mixin from '@/mixins/Mixin.js';

export default {
  name: 'App',
  components: {
    Chapter1,
  },
  mixins: [
    Mixin
  ],

  data: () => ({}),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
