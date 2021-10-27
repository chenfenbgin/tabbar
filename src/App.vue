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
  background-color: #f6f6f6;

  position: fixed; /* 跑到最下面 */
  left: 0;
  right: 0;
  bottom: 0;

  /* 设置阴影, 第一个和第二个值，代表x、y轴，如果都为正，往第四象限走 */
  box-shadow: 0 -1px 1 rgba(100, 100, 100, 2);
}

.tar-bar-item {
  /* flex:1; 就是代表均匀分配元素 */
  flex: 1;
  text-align: center;
  height: 49px; /* 一般tabbar高度就是49px,ios安卓都是 */
}
</style>
