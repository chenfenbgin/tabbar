<template>
  <div id="app">
    <!-- 在没有封装之前，我们一般是这么做的 -->
    <div id="tar-bar">
      <div class="tar-bar-item">首页</div>
      <div class="tar-bar-item">分类</div>
      <div class="tar-bar-item">购物车</div>
      <div class="tar-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
/* require('./assets/css/base.css') 不可以这么导入 */
/* 在style中引用，需要加一个@import */

@import "./assets/css/base.css";
#tar-bar {
  display: flex;
}

.tar-bar-item {
  /* flex:1; 就是代表均匀分配元素 */
  flex: 1;  
  text-align: center;
  height: 49px;     /* 一般tabbar高度就是49px,ios安卓都是 */
}
</style>
