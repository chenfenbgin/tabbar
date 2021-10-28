<template>
  <div id="app">
    <!-- 在没有封装之前，我们一般是这么做的,没有复用性 -->
    <div id="tar-bar">
      <div class="tar-bar-item">
        <img src="../../assets/img/tabbar/home.svg" />
        首页
      </div>
      <div class="tar-bar-item">
        <img src="../../assets/img/tabbar/home.svg" />
        分类
      </div>
      <div class="tar-bar-item">
        <img src="../../assets/img/tabbar/home.svg" />
        购物车
      </div>
      <div class="tar-bar-item">
        <img src="../../assets/img/tabbar/home.svg" />
        我的
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "TarBar",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
#tar-bar {
  display: flex;
  background-color: #f6f6f6;

  /* 元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动： */
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
