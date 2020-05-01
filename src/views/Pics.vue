<template>
  <div class="pics" v-if="picsList!==''">
    <div class="pics_box">
      <div class="pics_item" v-for="item in picsList" :key="item._id">
        <img :src="item.picurl" alt />
      </div>
    </div>
  </div>
  <div class="loading" v-else>123</div>
</template>

<script>
import { getPics } from "../api/index";

  import $ from 'jquery'
export default {
  components: {},
  directives: {},
  name: "pics",
  data() {
    return {
      picsList: "",
      getStartNumber:0
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getPics();
    window.addEventListener("scroll",this.handleScroll); 
    
  },
  updated(){
this.begin()
  },
  methods: {
    begin(){
       var wrap=$('.pics_box');
    var boxes=wrap.children('div');
    this.waterfall(wrap,boxes)
    },
    handleScroll(){
 var wrap=$('.pics_box');
    var boxes=wrap.children('div');

    this.appendBox(wrap,boxes)
    },
    // 主要瀑布流布局函数
waterfall(wrap,boxes){
// 第一步:先获取能容纳的列数：窗口宽度/每列宽度
// +20是外边距
var boxswidth=boxes.eq(0).width();
var windowwidth=$('.pics_box').width();
var column=Math.floor(windowwidth/boxswidth);
// 顺便计算得出容器的宽度，让盒子居中
var wrapwidth=column*boxswidth;
wrap.width(wrapwidth)
// 第二步：定义一个数组存储每一列的高度
var arr=new Array;
// 遍历每一个盒子
for(var i=0;i<boxes.length;i++){
    // 当i<column时，说明在第一行，把盒子的高度存入到数组里
    if(i<column){
        arr[i]=boxes.eq(i).height()+20
    }
    // 否则就是第二行，开始按最小高度插入图片到列中
    else{
        // 先获取最小高度列的索引
        var minheight=Math.min.apply(null,arr)
        var minindex=this.getMinIndex(minheight,arr)
        // 这里的leftvalue，是指最小高度列距离窗口左边的距离，相当于间接定位了这一列接下来要插入图片时，position定位的left值是多少
        var leftvalue=boxes.eq(minindex).position().left;
        this.setStyle(boxes.eq(i),minheight,leftvalue,i)
        // 到这里已经插入了一张图片在最低高度列，接下来要改变arr里的最低高度的值，让它继续下次遍历
        arr[minindex]+=boxes.eq(i).height() + 20
    }
}
},
//设置追加盒子的样式  减少刷新量
 setStyle(box,top,left,index){
       if(this.getStartNumber>=index){
           return false;
       };
     box.css({
         'position':'absolute',
         'top':top,
         'left':left,
         'opacity':'0',
         
     })  .stop().animate({/*第二行慢慢出来的动画*/
         'opacity':'1'
     },1000);
       this.getStartNumber=index;
   },


// 计算最小高度列的索引函数
getMinIndex(minheight,arr){
    var minindex=arr.indexOf(minheight)
    return minindex
},

// 判断是否在底部的函数
getBottom(wrap){
    // 获取最后一列的高度和滚动的高度+窗口高度的和，如果长的一列的高度比窗口+滚动的高度要小，说明到底了需要追加
    var documentHeight=$(window).height();
    var scrollHeight=$(window).scrollTop();
    const boxes=wrap.children('div')
    var lastboxTop=boxes.eq(boxes.length-1).offset().top;
    var lastboxHeight=boxes.eq(boxes.length-1).height()+20;
    var totalHeight=lastboxHeight+lastboxTop
    return documentHeight+scrollHeight>=totalHeight?true:false;
},

// 追加瀑布流效果
appendBox(wrap,boxes){
    // 先判断是否展示到了底部
    if(this.getBottom(wrap)){
      console.log(this.picsList)
        for (let i in this.picsList){
          var addstr=`  <div class="pics_item">
        <img src="${this.picsList[i].picurl}" alt />
      </div>`
            wrap.append(addstr)
        }
    }else{
        return false
    }
    this.waterfall(wrap,wrap.children('div'))
},
    getPics() {
      getPics({}).then(res => {
        this.picsList = res.data.data;
        console.log(this.picsList);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pics {
  box-sizing: border-box;
  padding: 0 2rem;
  padding-top: 0.4rem;
  .pics_box {
    width: 100%;
    position: relative;
    margin: 0 auto;
    height: auto;
    background: blue;
    .pics_item {
      box-sizing: border-box;
      width: 25%;
      float: left;
      height: auto;
      padding: 10px;
      img {
        display: block;
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
      }
      img:hover {
        width:101%;
        box-shadow:2px 2px 10px #333333;
        transition: width 0.2s;
        // transform:translate(1px,1px) ;
        // animation: 1s;
      }
    }
  }
}
</style>