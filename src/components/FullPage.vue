<template>
  <div id="fullpage1">
    <section class="title text-black">一个有趣的人</section>
    <section class="title">兴趣爱好</section>
    <section class="title">技能</section>
    <section class="title">Four</section>
    <section class="title">联系我</section>
  </div>
  <div id="fullpage2">
    <section class="bg-white">
      <p class="text text-9xl animate__animated animate__bounceInRight">
        Hello World!
      </p>
    </section>
    <section class="bg-blue-700"></section>
    <section class="bg-pink-700"></section>
    <section class="bg-gray-700"></section>
    <section class="bg-purple-700"></section>
  </div>
  <div id="count">
    <section class="text-5xl">01</section>
    <section class="text-5xl text-white">02</section>
    <section class="text-5xl text-white">03</section>
    <section class="text-5xl text-white">04</section>
    <section class="text-5xl text-white">05</section>
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
    console.log(window.innerWidth > 1024 ? '70vw' : '100vw');

    const fullpage1 = fullpage('1000px', '4.5rem', 'fullpage1');
    const fullpage2 = fullpage(
      window.innerWidth > 1024 ? '70vw' : '100vw',
      '100vh',
      'fullpage2'
    );
    const count = fullpage('60px', '48px', 'count');

    if (fullpage1 && fullpage2 && count) {
      window.onwheel = _.throttle(
        (event: any) => {
          fullpage1.switchToByWheel(event);
          fullpage2.switchToByWheel(event);
          count.switchToByWheel(event);
        },
        1000,
        {
          leading: true,
          trailing: false,
        }
      );
      window.addEventListener('touchstart', (e) => {
        lastY = ~~(e.changedTouches[0].screenY / 10);
      });
      window.addEventListener(
        'touchend',
        _.throttle(
          (event: any) => {
            fullpage1.switchToByTouch(event);
            fullpage2.switchToByTouch(event);
            count.switchToByTouch(event);
          },
          1000,
          {
            leading: true,
            trailing: false,
          }
        )
      );
    }
  },
});

let lastY: number;
function fullpage(width: string, height: string, id: string) {
  const fullpageRef = document.getElementById(id);
  if (fullpageRef === null) {
    return;
  }
  const heightNum = (height.match(/\d+(.\d+)?/g) as unknown as number[])[0];

  const heightUnit = height.slice(heightNum.toString().length);
  fullpageRef.style.width = width;
  fullpageRef.style.height = height;
  fullpageRef.style.overflow = 'hidden';
  fullpageRef.style.textAlign = 'left';
  const sections = fullpageRef.getElementsByTagName('section');

  let index = 0;
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.transform = `translate3d(0, ${
      heightNum * i
    }${heightUnit}, 0)`;
  }
  function switchToByWheel(event: WheelEvent) {
    if (!event) {
      return;
    }
    const isDownWheel = event.deltaY > 0;

    if (isDownWheel) {
      // length从1开始计数，但是index索引从0开始，所以要减去1
      if (index < sections.length - 1) {
        for (let i = 0; i < sections.length; i++) {
          sections[i].style.transform = `translate3d(0, ${
            heightNum * (i - index - 1)
          }${heightUnit}, 0)`;
        }
        index++;
      }
    } else {
      if (index > 0) {
        for (let i = 0; i < sections.length; i++) {
          sections[i].style.transform = `translate3d(0, ${
            heightNum * (i - index + 1)
          }${heightUnit}, 0)`;
        }
        index--;
      }
    }
  }

  let currentY: number;
  function switchToByTouch(event: TouchEvent) {
    if (!event) {
      return;
    }

    currentY = ~~(event.changedTouches[0].screenY / 10);
    const isDownWheel = lastY > currentY;
    console.log(isDownWheel);

    if (isDownWheel) {
      // length从1开始计数，但是index索引从0开始，所以要减去1
      if (index < sections.length - 1) {
        for (let i = 0; i < sections.length; i++) {
          sections[i].style.transform = `translate3d(0, ${
            heightNum * (i - index - 1)
          }${heightUnit}, 0)`;
        }
        index++;
      }
    } else {
      if (index > 0) {
        for (let i = 0; i < sections.length; i++) {
          sections[i].style.transform = `translate3d(0, ${
            heightNum * (i - index + 1)
          }${heightUnit}, 0)`;
        }
        index--;
      }
    }
  }

  return {
    switchToByWheel,
    switchToByTouch,
  };
}
</script>

<style scoped>
#fullpage1 {
  color: white;
  position: fixed;
  top: 64px;
  left: 10vw;
  transition: 1s;
}
#fullpage2 {
  position: fixed;
  transition: 1s;
  z-index: -2;
}
#count {
  position: fixed;
  transition: 1s;
  left: 48px;
  top: 0;
  bottom: 0;
  margin: auto;
}
h1 {
  position: fixed;
  font-size: 100px;
}
#fullpage1 > section {
  /* 块级元素会自动撑满宽度，所以只需要设置高度就行了 */
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transition: 1s transform cubic-bezier(1, 0, 0, 1);
}
#fullpage2 > section {
  /* 块级元素会自动撑满宽度，所以只需要设置高度就行了 */
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transition: 1s transform cubic-bezier(0.91, 0.03, 0.12, 1);
}
#count > section {
  /* 块级元素会自动撑满宽度，所以只需要设置高度就行了 */
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transition: 1s transform cubic-bezier(0.91, 0.03, 0.12, 1);
}

.text {
  position: absolute;
  left: 10vw;
  top: 20vh;
}

.title {
  font-size: 48px;
}
</style>
