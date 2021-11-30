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
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.transform = `translate3d(0, ${100 * i}vh, 0)`;
  }
  function switchTo(event: WheelEvent) {
    if (!event) {
      return;
    }
    const isDownWheel = event.deltaY > 0;

    if (isDownWheel) {
      // length从1开始计数，但是index索引从0开始，所以要减去1
      console.log(index);

      if (index < sections.length - 1) {
        for (let i = 0; i < sections.length; i++) {
          sections[i].style.transform = `translate3d(0, ${
            100 * (i - index - 1)
          }vh, 0)`;
        }
        index++;
      }
    } else {
      if (index > 0) {
        for (let i = 0; i < sections.length; i++) {
          sections[i].style.transform = `translate3d(0, ${
            100 * (i - index + 1)
          }vh, 0)`;
        }
        index--;
      }
    }
  }

  window.onwheel = _.throttle(switchTo, 1000, {
    leading: true,
    trailing: false,
  });
}
</script>

<style scoped>
#fullpage {
  position: relative;
  width: 100vw;
  height: 100vh;
  transition: 1s transform cubic-bezier(0.91, 0.03, 0.12, 1);
  overflow: hidden;
}
section {
  /* 块级元素会自动撑满宽度，所以只需要设置高度就行了 */
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 1s transform cubic-bezier(0.91, 0.03, 0.12, 1),
    1s 1s width cubic-bezier(0.91, 0.03, 0.12, 1);
}
</style>
