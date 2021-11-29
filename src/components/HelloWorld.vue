<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<style scoped>
div {
  height: 1000px;
  width: 100vw;
  background-image: url('../assets/images/galaxy.jpg');
}
</style>
