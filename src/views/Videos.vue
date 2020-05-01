<template>
  <div>
    测试一下。嘿嘿
    <p class="video">
      <iframe  src="//player.bilibili.com/player.html?aid=71146537&bvid=BV1vE411d7Cp&cid=123272252&page=1" scrolling="no" border="0" frameborder="no" framespacing="1" allowfullscreen="true"> </iframe>
    </p>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  directives: {
  },
  name: "videos",
  data() {
    return {
     
    };
  },
  computed: {
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.video {
position: relative;
max-width: 800px;
padding-bottom: 56.25%;
margin: 0 auto;
height: 0;
max-height: 500px;
overflow: hidden;
}
.video iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
div{
  padding: 10px;
  padding-top:0.4rem;
  font-size: 0.2rem;
}
</style>