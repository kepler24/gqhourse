<template>
  <div id="app">
    <div v-if="loading" class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <span v-else>
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/docs">日志</router-link>
        <router-link to="/pics">图片</router-link>
        <router-link to="/videos">视频</router-link>
      </div>
      <router-view />
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    let mulitImg = [
      require("./assets/cloud_one.png"),
      require("./assets/cloud_two.png"),
      require("./assets/cloud_three.png")
    ];
    let promiseAll = [];
    let img = [];
    let imgTotal = mulitImg.length;
    for (let i = 0; i < imgTotal; i++) {
      promiseAll[i] = new Promise((resolve, reject) => {
        img[i] = new Image();
        img[i].src = mulitImg[i];
        img[i].onload = function() {
          resolve(img[i]);
          reject();
        };
      });
    }
    Promise.all(promiseAll).then(img => {
      this.loading = false;
    });
    //  let bgImg = new Image()
    // bgImg.src = require("./assets/cloud_one.png")
    // bgImg.onload = () => {
    //   console.log(123456)
    // }
  }
};
</script>
<style>
.loading {
  width: 100px;
  height: 100px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.loading span {
  width: 15px;
  height: 10px;
  margin: 0 1px;
  display: inline-block;
  vertical-align: middle;
  background: skyblue;
  animation: load_more_box 1.5s infinite ease-in-out;
}
.loading span:nth-child(2) {
  animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  animation-delay: 0.8s;
}
@keyframes load_more_box {
  0% {
    height: 10px;
    background: skyblue;
  }
  25% {
    height: 50px;
    background: rgb(9, 169, 233);
  }
  50% {
    height: 10px;
    background: skyblue;
  }
  100% {
    height: 10px;
    background: skyblue;
  }
}
.demo1 {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: skyblue;
  position: absolute;
  animation: de 800ms ease infinite;
}
@keyframes de {
  0%,
  100% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.5);
  }
}
.demo1:nth-child(1) {
  left: 50%;
  top: 10px;
  animation-delay: 0ms;
}
.demo1:nth-child(2) {
  top: 25%;
  left: 75%;
  animation-delay: 100ms;
}
.demo1:nth-child(3) {
  top: 50%;
  right: 0;
  animation-delay: 200ms;
}
.demo1:nth-child(4) {
  top: 75%;
  left: 75%;
  animation-delay: 300ms;
}
.demo1:nth-child(5) {
  bottom: 0px;
  left: 50%;
  animation-delay: 400ms;
}
.demo1:nth-child(6) {
  top: 75%;
  left: 25%;
  animation-delay: 500ms;
}
.demo1:nth-child(7) {
  left: 10px;
  top: 50%;
  animation-delay: 600ms;
}
.demo1:nth-child(8) {
  top: 25%;
  left: 25%;
  animation-delay: 700ms;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
#nav {
  /* height: 50px; */
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  font-size: 0.2rem;
  z-index: 99;
}
#nav a {
  color: skyblue;
  display: inline-block;
  padding: 0 0.1rem 0;
  /* height: 50px; */
  background: white;
  opacity: 0.5;
  line-height: 0.4rem;
}
#nav a:hover {
  color: rgb(89, 195, 236);
  background-color: #fff;
  opacity: 1;
}
#nav a:visited {
  color: rgb(8, 171, 235);
  background-color: #fff;
  opacity: 1;
}
</style>
