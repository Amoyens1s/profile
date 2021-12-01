<template>
  <video autoplay muted loop id="myVideo">
    <source src="./assets/videos/video.mp4" type="video/mp4" />
  </video>
  <FullPage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloI18n from './components/HelloI18n.vue';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import FullPage from './components/FullPage.vue';

@Options({
  components: {
    HelloWorld,
    HelloI18n,
    Navbar,
    FullPage,
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
  overflow: hidden;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 0;
  min-height: 100%;
  object-fit: cover;
  z-index: -100;
}

#eslint {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
