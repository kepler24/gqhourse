<template>
  <div class="docs">
    <section></section>
      <section></section>
      <section></section>
      <div v-if="loading" class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div  v-else class="docs_content" >
      <div class="docs_title">日志列表</div>
      <div class="docs_p" v-for="item in dailyList" :key="item._id" >
        <a @click="$router.push({path:'/detail',query:{id:item._id}})">{{item.title}}</a>
        <span class="docs_time">{{item.date | timeFilter}}</span>
        </div>
        <el-pagination
          style="text-align:right"
          background
          :pager-count="5"
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          :total="total">
        </el-pagination>
    </div>
    
  </div>
</template>

<script>
import { getDailyTitle } from "../api/index";
export default {
  components: {},
  directives: {},
  name: "docs",
  
  data() {
    return {
      loading:true,
      dailyList: [],
      currentPage:1,
      pageSize:10,
      total:100,
    };
  },
  filters:{
     timeFilter(val){
        var time = new Date(val);
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d);
     }
   },
  computed: {},
  created() {
    const page = localStorage.getItem('page')
    if(page){
      this.currentPage = page/1
    }
    this.getList()
  },
  methods: {
    getList(){
      getDailyTitle({
        currentPage:this.currentPage,
        pageSize:this.pageSize
      }).then(res => {
        this.dailyList = res.data.data;
        this.total = res.data.total;
        localStorage.setItem('page',this.currentPage)
        this.loading = false
      });
    },
    handleCurrentChange(val){
      this.currentPage = val
      this.getList()
    }
  },
  beforeRouteLeave(to,from,next){
    if(to.path === '/detail'){
      next()
    }else{
       localStorage.clear('page')
        next()
    }
  }
};
</script>
<style lang="scss" scoped>
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
.docs {
  background-color: skyblue;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  position: relative;
  .docs_content {
    box-sizing: border-box;
    padding: 5%;
    padding-top: 0.4rem;
    width: 100%;
    position:relative;
    .docs_title{
      font-size: 0.4rem ;
      color: white;
      text-shadow: 5px 5px 5px rgb(4, 174, 241);
      line-height: 0.4rem;
    }
    .docs_p {
      cursor: pointer;
      margin-bottom: 3px;
      padding-top: 0.1rem;
      font-size: 0.2rem;
      color: #666;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid white;
      a{
        display: inline-block;
        width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-align: left;
      text-overflow: ellipsis;
      }
      .docs_time{
        font-size: 0.1rem;
        line-height: 0.2rem;
      }
    }
  }
}
</style>