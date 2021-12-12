<template>
  <Loder></Loder>
  <!-- main start  -->
  <div id="main">
    <MainHeader></MainHeader>
    <LeftHeader></LeftHeader>
    <RightHeader></RightHeader>
    <!-- wrapper  -->
    <div id="wrapper">
      <div class="nav-overlay"></div>
      <!-- navigation menu end  -->
      <!-- content-->
      <div class="content full-height" data-pagetitle="主页">
        <div class="fl-wrap full-height hero-conatiner">
          <div class="hero-wrapper fl-wrap full-height hidden-item">
            <span class="hc_dec"></span>
            <!-- fs-slider-wrap  -->
            <!-- hero-slider-wrap -->
            <div class="hero-slider-wrap home-half-slider fl-wrap full-height">
              <div class="hero-slider fs-gallery-wrap fl-wrap full-height">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <!-- swiper-slide-->
                    <SwiperSlideTextVue>
                      <div class="hhw_header">Hello World</div>
                      <h1>
                        很高兴认识你，你可以叫我<span>子居</span><br />或者<span
                          >Amoyensis</span
                        >
                      </h1>
                      <h4>如果你因失去太阳而流泪，那么你也将失去群星了。</h4>
                      <div class="clearfix"></div>
                      <!-- 还没实现 -->
                      <!-- <a href="portfolio.html" class="btn ajax fl-btn color-bg">
                        <span>关于我</span>
                      </a> -->
                    </SwiperSlideTextVue>
                    <SwiperSlideTextVue>
                      <div class="hhw_header">教育经历</div>
                      <h1>
                        我毕业于<span>成都信息工程大学</span>
                        <br />它坐落在一座天府般的城市中
                      </h1>
                      <h4>
                        有一个夜晚我烧毁了所有的记忆，从此我的梦就透明了；有一个早晨我扔掉了所有的昨天，从此我的脚步就轻盈了。
                      </h4>
                    </SwiperSlideTextVue>
                    <SwiperSlideTextVue>
                      <div class="hhw_header">工作职业</div>
                      <h1>
                        我是一名前端开发，熟悉<br />
                        <span style="color: #3278c6">TypeScript</span>、
                        <span style="color: #c3002f">Angular</span>和
                        <span style="color: #41b883">Vue</span>
                      </h1>
                      <h4>
                        前端是一个令人兴奋的职业，因为它总是在不断地发展与变化，这意味着我总是有新机会去接触新的事物，学习新的技能。
                      </h4>
                    </SwiperSlideTextVue>
                    <SwiperSlideTextVue>
                      <h1>
                        大风可以吹起一张白纸，却无法吹走一只蝴蝶，<br />因为生命的力量在于不顺从。
                        ——冯骥才
                      </h1>
                    </SwiperSlideTextVue>
                  </div>
                </div>
              </div>
            </div>
            <!-- hero-slider-wrap  end-->
            <!-- hero-slider-img-->
            <div class="hero-slider-img hero-slider-wrap_halftwo hidden-item">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <!-- swiper-slide-->
                  <SwiperSlideImage :image="'images/bg/sunrise.jpg'" />
                  <SwiperSlideImage :image="'images/bg/cuit.jpg'" />
                  <SwiperSlideImage :image="'images/bg/web.jpg'" />
                  <SwiperSlideImage :image="'images/bg/butterfly.jpg'" />
                </div>
              </div>
              <div class="hero-corner-dec"></div>
              <div class="hero-corner-dec2"></div>
            </div>
            <!-- hero-slider-img  end-->
            <!-- slider-controls -->
            <div class="slider-progress-bar">
              <span>
                <svg class="circ" width="50" height="50">
                  <circle
                    class="circ2"
                    cx="25"
                    cy="25"
                    r="23"
                    stroke="rgba(255,255,255,0.4)"
                    stroke-width="1"
                    fill="none"
                  />
                  <circle
                    class="circ1"
                    cx="25"
                    cy="25"
                    r="23"
                    stroke="#fff"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
              </span>
            </div>
            <div class="clone-counter">
              <div class="current">01</div>
            </div>
            <div class="swiper-counter hs_counter">
              <div class="current">01</div>
              <div class="total"></div>
            </div>
            <div class="hero-slider_control-wrap">
              <div class="hsc hsc-prev">
                <span><i class="fal fa-angle-left"></i></span>
              </div>
              <div class="hsc hsc-next">
                <span><i class="fal fa-angle-right"></i></span>
              </div>
            </div>
            <!-- slider-controls end-->
            <!-- 还没实现 -->
            <!-- <a class="ajax start-btn"
              ><span>
                <router-link to="/about">了解更多</router-link
                ><i class="fal fa-long-arrow-right"></i></span
            ></a> -->
            <div class="play-pause_slider hsc_pp auto_actslider">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <div class="hero-slider-wrap_pagination"></div>
          <div class="hero-scroll-down-notifer">
            <div class="scroll-down-wrap">
              <div class="mousey">
                <div class="scroller"></div>
              </div>
            </div>
            <i class="far fa-angle-down"></i>
          </div>
        </div>
      </div>
      <!-- content end -->
    </div>
    <!-- wrapper end -->
  </div>
</template>

<script>
import SwiperSlideImage from '@/components/SwiperSlideImage.vue';
import SwiperSlideTextVue from '@/components/SwiperSlideText.vue';
import Loder from '@/components/Loder.vue';
import MainHeader from '@/components/MainHeader.vue';
import LeftHeader from '@/components/LeftHeader.vue';
import RightHeader from '@/components/RightHeader.vue';
export default {
  components: {
    SwiperSlideImage: SwiperSlideImage,
    SwiperSlideTextVue: SwiperSlideTextVue,
    Loder,
    MainHeader,
    LeftHeader,
    RightHeader,
  },
};
</script>

<style></style>
