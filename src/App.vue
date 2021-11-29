<template>
  <Navbar />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <HelloI18n />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloI18n from './components/HelloI18n.vue';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';

@Options({
  components: {
    HelloWorld,
    HelloI18n,
    Navbar,
  },
})
export default class App extends Vue {}
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
