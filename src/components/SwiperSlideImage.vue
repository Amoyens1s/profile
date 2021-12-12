<template>
  <div class="swiper-slide">
    <div class="bg" :data-bg="image" data-swiper-parallax="20%"></div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
  },
};
</script>

<style></style>
