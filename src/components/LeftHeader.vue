<template>
  <aside class="left-header">
    <span class="lh_dec color-bg"></span>
    <span class="icp">沪ICP备2021034435号</span>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.left-header {
  background: #313131;
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 0px !important;
  z-index: 22;
  width: 80px;
}
.left-header:after {
    content: '';
    position: absolute;
    display: none;
}

.icp {
  position: absolute;
  bottom: 150px;
  left: 0;
  right: 0;
  transform: rotate(90deg);
  word-break: keep-all;
  color: aliceblue;
}
</style>
