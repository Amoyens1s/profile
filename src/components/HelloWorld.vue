<template>
  <div id="fullpage">
    <section class="bg-yellow-500 animate__animated animate__fadeIn">
      One
    </section>
    <section class="bg-blue-500 animate__animated animate__fadeIn">Two</section>
    <section class="bg-red-500 animate__animated animate__fadeIn">
      Three
    </section>
    <section class="bg-gray-500 animate__animated animate__fadeIn">
      Four
    </section>
    <section class="bg-purple-500 animate__animated animate__fadeIn">
      Five
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import _ from 'lodash';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
  mounted() {
    fullpage();
  },
});

function fullpage() {
  const fullpageRef = document.getElementById('fullpage');
  if (fullpageRef === null) {
    return;
  }
  const sections = fullpageRef.getElementsByTagName('section');
  let index = 0;
  for (let i = 1; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  function switchTo(event: WheelEvent) {
    if (!event) {
      return;
    }
    const isDownWheel = event.deltaY > 0;
    if (isDownWheel) {
      // length从1开始计数，但是index索引从0开始，所以要减去1
      if (index < sections.length - 1) {
        // 如果不是最后一张，则将当前section隐藏
        sections[index].style.display = 'none';
        // window.scrollTo();
        index++;
      }
    } else {
      if (index > 0) {
        // 如果不是第一张，则将当前section隐藏
        sections[index].style.display = 'none';
        index--;
      }
    }
    sections[index].style.display = 'block';
  }

  fullpageRef.onwheel = _.throttle(switchTo, 200, {
    leading: true,
    trailing: false,
  });
}
</script>

<style scoped>
#fullpage {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: scroll;
}
section {
  /* 块级元素会自动撑满宽度，所以只需要设置高度就行了 */
  height: 100%;
}
</style>
