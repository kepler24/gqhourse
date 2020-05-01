<template>
  <div class="detail">
    <div v-if="loading" class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-else class="bg-grid">
      <p class="title">{{detail.title}}</p>
      <p class="time">{{detail.date | timeFilter}}</p>
      <div class="ql-container ql-snow">
        <div class="ql-editor">
          <div class="content" v-html="detail.content"></div>
        </div>
      </div>
      <p class="end">--------end--------</p>
    </div>
  </div>
</template>

<script>
import { getOneDaily } from "../api/index";
import "quill/dist/quill.snow.css";
export default {
  components: {},
  directives: {},
  name: "detail",
  data() {
    return {
      detail: "",
      loading: true
    };
  },
  computed: {},
  filters: {
    timeFilter(val) {
      var time = new Date(val);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
    }
  },
  created() {
    getOneDaily({ id: this.$route.query.id }).then(res => {
      this.detail = res.data.data;
      this.loading = false
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.detail {
  box-sizing: border-box;
  word-break: break-all;
  background-color: #efefef;
  background-image: linear-gradient(#e7e6e6 1px, transparent 0),
    linear-gradient(90deg, #e7e6e6 1px, transparent 0);
  background-size: 21px 21px, 21px 21px;
  background-position: center;
  min-height: 100%;
  .title {
    font-size: 0.3rem;
    text-align: left;
  }
  .time {
    font-size: 0.16rem;
    color:#999;
    text-align: left;
  }
  .content {
    font-size: 0.2rem;
    text-align: left;
  }
  .end {
    margin-top: 0.2rem;
    font-size: 0.2rem;
  }
}
.bg-grid {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.1rem;
  padding-top: 0.4rem;
}
</style>