<template>
  <div style="height:100%">
    <vue-waterfall-easy
      ref="waterfall"
      :imgsArr="picsList"
      srcKey="picurl"
      @click="clickFn"
      @scrollReachBottom="getPics"
      :maxCols="4"
      linkRange="img"
    >
      <div class="img-info" slot-scope="props" style="word-wrap:break-word">
        <p class="title-info">
          <svg
            t="1588407401095"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="942"
            width="0.16rem"
            height="0.16rem"
          >
            <path
              d="M529.07 673a141.6 141.6 0 0 1-98.13-39.85 139.65 139.65 0 0 1-42.49-99.27 141.54 141.54 0 0 1 39.85-99.49 139.55 139.55 0 0 1 99.26-42.49 141.38 141.38 0 0 1 99.49 39.84A139.59 139.59 0 0 1 669.54 531a141.52 141.52 0 0 1-39.84 99.49A139.62 139.62 0 0 1 530.43 673z m-1.21-251.11a109.82 109.82 0 0 0-78.08 33.44 111.32 111.32 0 0 0-31.33 78.25 109.82 109.82 0 0 0 33.43 78.09A111.36 111.36 0 0 0 529.06 643h1.08a109.81 109.81 0 0 0 78.07-33.43 111.42 111.42 0 0 0 31.34-78.26 109.85 109.85 0 0 0-33.43-78.08 111.35 111.35 0 0 0-78.26-31.34z"
              fill="#7AC4EA"
              p-id="943"
            />
            <path
              d="M735.14 838.05H320.66c-76.48 0-143.91-51.71-164.62-124.53A79.18 79.18 0 0 1 86 635V389a79.35 79.35 0 0 1 64.51-77.7 97.15 97.15 0 0 1 96-83.36H489a14.22 14.22 0 0 0 14.2-14.2v-10.46a58.45 58.45 0 0 1 58.38-58.38h103.85a58.45 58.45 0 0 1 58.38 58.38v13.39a11.27 11.27 0 0 0 11.26 11.25h74.18a97.11 97.11 0 0 1 97 97v342a171.57 171.57 0 0 1-171.11 171.13z m-555.2-154.63l2.62 12.45c13.69 65 71.77 112.18 138.1 112.18h414.48c77.81 0 141.11-63.3 141.11-141.11v-342a67.07 67.07 0 0 0-67-67h-74.18a41.3 41.3 0 0 1-41.26-41.25v-13.41a28.41 28.41 0 0 0-28.38-28.38H561.54a28.41 28.41 0 0 0-28.38 28.38v10.44a44.25 44.25 0 0 1-44.2 44.2H246.55a67.08 67.08 0 0 0-67 67v14.88l-14.88 0.13A49.2 49.2 0 0 0 116 389v246a49.12 49.12 0 0 0 49.06 49h2.17z m590.41 63.41a47.81 47.81 0 1 1 3-0.1c-0.98 0.07-1.99 0.1-3 0.1z m0-65.6h-1.19a18 18 0 0 0-16.58 16.58 17.8 17.8 0 0 0 19 18.94 18 18 0 0 0 16.58-16.57 17.82 17.82 0 0 0-17.76-19zM527.82 714a180.29 180.29 0 0 1-128.3-53.18c-41-41-59.64-97.73-51.18-155.67 10.7-73.26 79-141.57 152.28-152.27 57.94-8.47 114.67 10.19 155.66 51.18s59.64 97.72 51.18 155.66C696.76 633 628.45 701.33 555.19 712a189.22 189.22 0 0 1-27.37 2z m0.06-333.11A159 159 0 0 0 505 382.6c-60 8.77-118.15 66.9-126.92 126.93-7.09 48.46 8.48 95.89 42.7 130.11s81.65 49.79 130.12 42.71c60-8.77 118.15-66.89 126.93-126.93 7.08-48.46-8.49-95.89-42.71-130.11a150.6 150.6 0 0 0-107.24-44.38zM633 256.9h-40a39.6 39.6 0 0 1 0-79.2h40a39.6 39.6 0 0 1 0 79.2z m-40-49.2a9.6 9.6 0 0 0 0 19.2h40a9.6 9.6 0 0 0 0-19.2z"
              fill="#7AC4EA"
              p-id="944"
            />
          </svg>
          {{props.value.title}}
        </p>
        <p class="place-info">
          <svg
            t="1588407815625"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1356"
            width="0.16rem"
            height="0.16rem"
          >
            <path
              d="M671.05 350.13l-8.56-5.81c-3.4-2.31-83.44-57.48-84.59-129.23-0.41-25.7 9.05-49.69 26.64-67.57a90.67 90.67 0 0 1 65.18-27.09 94.53 94.53 0 0 1 94.42 94.42c0 70.85-81.11 127.09-84.56 129.45z m-1.33-199.35a60.54 60.54 0 0 0-43.55 18 63.18 63.18 0 0 0-17.93 45.79c0.71 44 44 83.2 62.77 98.17 18.99-15.08 62.78-54.74 62.78-97.89a64.14 64.14 0 0 0-64.07-64.07zM671 261.46a45.57 45.57 0 1 1 45.57-45.57A45.62 45.62 0 0 1 671 261.46z m0-60.8a15.23 15.23 0 1 0 15.22 15.23A15.24 15.24 0 0 0 671 200.66z"
              fill="#7AC4EA"
              p-id="1357"
            />
            <path
              d="M849.38 302a32.46 32.46 0 0 0-29.22-4.38l-76.5 25.76a15.47 15.47 0 0 0-8.5 7C713.69 368 694 389 678.83 401.94a15.49 15.49 0 0 1-22-1.9c-12.58-15.2-29.83-37.16-46.4-61.91a15.52 15.52 0 0 0-8.37-6.21L419.39 276.5a15.44 15.44 0 0 0-8.34-0.18l-195.17 50a35.66 35.66 0 0 0-26.8 34.55v443.81A35.66 35.66 0 0 0 238 837.81L409.83 769a15.53 15.53 0 0 1 10.91-0.22l238.14 84a15.52 15.52 0 0 0 9.27 0.32L838.86 806a32.4 32.4 0 0 0 24-31.27V328.29A32.45 32.45 0 0 0 849.38 302zM648.61 444l-0.07 350.34A15.48 15.48 0 0 1 627.9 809l-187.17-66a15.5 15.5 0 0 1-10.34-14.61V333.11a15.49 15.49 0 0 1 20-14.82l132.2 40.12a15.46 15.46 0 0 1 8.23 6 828 828 0 0 0 54 69.47 15.47 15.47 0 0 1 3.79 10.12zM226.47 809a4.68 4.68 0 0 1-6.4-4.35V372.92a20.16 20.16 0 0 1 15.16-19.53l144.83-37.13a15.49 15.49 0 0 1 19.34 15v398.06a15.48 15.48 0 0 1-9.73 14.38z m605.4-34.27a1.37 1.37 0 0 1-1 1.33L699.14 812.4a15.49 15.49 0 0 1-19.61-14.94l0.07-349.17a15.49 15.49 0 0 1 6.4-12.52c16.8-12.25 42.14-33.76 70.22-80a15.54 15.54 0 0 1 8.31-6.67l65.53-22.1a1.38 1.38 0 0 1 1.81 1.31z"
              fill="#7AC4EA"
              p-id="1358"
            />
          </svg>
          {{props.value.place}}
        </p>
      </div>
      <div slot="waterfall-head" style="height:0.4rem"></div>
      <div slot="waterfall-over" style="font-size:0.2rem;padding:0.1rem 0">没有更多啦~</div>
      <div slot="loading" slot-scope="{isFirstLoad}">
        <div slot="loading" v-if="isFirstLoad">
          <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div v-else>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </vue-waterfall-easy>
    <v-touch v-on:swipeleft="swiperleft" class="wrapper">
      <div class="menu-container" ref="menuContainer">
        <div class="dialog" v-if="dialogVisible===true" @click="handleClose" style="margin-top:0">
          <div class="loading" v-if="imgLoading===true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img style="max-width:100%;max-height:90%" :src="bigimg" @load="imgLoad" alt />
        </div>
      </div>
    </v-touch>
  </div>
</template>

<script>
import { getPic } from "../api/index";
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  components: {
    vueWaterfallEasy
  },
  directives: {},
  name: "pics",
  data() {
    return {
      picsList: [],
      currentPage: 1,
      pageSize: 12,
      dialogVisible: false,
      bigimg: "",
      imgLoading:true
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.getPics();
  },
  updated() {},
  methods: {
    imgLoad(){
      this.imgLoading = false
    },
    swiperleft() {
      this.dialogVisible = false;
    },
    handleClose() {
      this.dialogVisible = false;
      this.imgLoading = true
    },
    clickFn(event, { index, value }) {
      // 阻止a标签跳转
      event.preventDefault();
      // 只有当点击到图片时才进行操作
      if (event.target.tagName.toLowerCase() == "img") {
        console.log("img clicked", index, value);
        this.dialogVisible = true;
        this.bigimg = value.picurl.replace(/zipimg/g, "images");
      }
    },
    getPics() {
      getPic({ currentPage: this.currentPage, pageSize: this.pageSize }).then(
        res => {
          // this.picsList = res.data.data;
          this.currentPage++;
          const pages = Math.ceil(res.data.total / this.pageSize);
          if (pages + 2 === this.currentPage) {
            console.log(this.$refs);
            this.$refs.waterfall.waterfallOver();
            return;
          }
          this.picsList = this.picsList.concat(res.data.data);
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.dialog {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(47, 47, 47, 0.8);
  margin: 0 !important;
}
.icon {
  font-size: 0.04rem;
}
.img-info {
  text-align: left;
  padding: 0.04rem;
  box-sizing: border-box;
}
.title-info {
  font-size: 0.14rem;
  color: #666;
}
.place-info {
  font-size: 0.1rem;
  color: #999;
}
.loading {
  bottom: 0 !important;
}
.img-inner-box {
  cursor: pointer;
}
</style>