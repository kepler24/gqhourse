<template>
<div style="width:100%;height:100%">
  <swiper ref="mySwiper" :options="swiperOptions">
    <!-- <div class="btn .swiper-button-next" @click="nextPage"> -->

    <!-- </div> -->
    <swiper-slide class="wall1">
      <div class="swiper-button-next"></div>

      <section></section>
      <section></section>
      <section></section>
      <div class="wall1_content animated swing">
        <p>
          你好~<br/>
          我叫高奇
          <br />欢迎来到我的个人小站
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="wall2">
      <div class="swiper-button-next"></div>

      <section></section>
      <section></section>
      <section></section>
      <div class="wall1_content">
        <p>
          我是
          <br />一个前端码农
          喜欢运动
          <br />热爱生活<br/>
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="wall3">

      <section></section>
      <section></section>
      <section></section>
      <div class="wall1_content">
        <p>
          在建站过程中<br/>
          学习技术<br/>
          积累经验<br/>
        </p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    
    
  </swiper>
  <div class="beian">Designed by GaoQi.<br/><a style="color:#333" href="http://www.beian.miit.gov.cn/" target="blank">
  
  京ICP备20013004号-1</a></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  name: "home",
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        slidesPerView: 1,
        // spaceBetween: 30,
        mousewheel: {
          sensitivity: 3
        },
        navigation: {
          nextEl: ".swiper-button-next"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  created() {},
  mounted(){
    
  },
  methods: {}
};
</script>
<style scoped>
.beian{
  position: fixed;
  left: 0.04rem;
  bottom: 0.04rem;
  font-size: 0.1rem;
  z-index: 100;
}
.swiper-button-next {
  top: 96% !important;
  left: 50%;
  transform: translate(-50%, 0) rotate(90deg);
  animation: btn 1s linear infinite;
}
@keyframes btn {
  0% {
  }
  50% {
    top: 94%;
    opacity: 0.1;
  }
  100% {
    top: 96%;
  }
}
@media screen and (min-width: 1025px) {
  .wall1_content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 300px;
    box-shadow: 5px 5px 20px #333333;
  }
  .wall1_content p {
    width: 300px;
    font-size: 50px;
  }
}
@media screen and (max-width: 1024px) {
  .wall1_content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 150px;
    box-shadow: 5px 5px 20px #333333;
  }
  .wall1_content p {
    width: 150px;
    font-size: 25px;
  }
}
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  background-color: #999;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.wall1,
.wall2,
.wall3 {
  width: 100%;
  height: 100%;
  background: skyblue;
  position: relative;
  overflow: hidden;
}
.wall2 {
  background: rgb(85, 195, 238);
}
.wall3 {
  background: rgb(37, 186, 245);
}
section {
  height: 100%;
  width: 300%;
  position: absolute;
  top: 0;
  left: 0;
}
section:nth-of-type(1) {
  background: url("../assets/cloud_one.png");
  animation: cloud 50s linear infinite;
}
section:nth-of-type(2) {
  background: url("../assets/cloud_two.png");
  animation: cloud 75s linear infinite;
}
section:nth-of-type(3) {
  background: url("../assets/cloud_three.png");
  animation: cloud 100s linear infinite;
}
@keyframes cloud {
  0% {
  }
  100% {
    left: -200%;
  }
}
.wall1,
.wall2 {
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;
}
</style>