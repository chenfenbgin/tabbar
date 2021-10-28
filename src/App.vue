<template>
  <div id="app">
    <tar-bar></tar-bar>
  </div>
</template>

<script>
// 导入组件之后，需要在components中进行注册，然后在使用标签
import TarBar from "../src/components/tabbar/TabBar.vue"  

export default {
  name: "App",
  components: {
    TarBar
  },
};
</script>

<style>
/* require('./assets/css/base.css') 不可以这么导入 */
/* 在style中引用，需要加一个@import */

@import "./assets/css/base.css";

/* 此处样式移到App.vue中 */
/* #tar-bar {
  display: flex;
  background-color: #f6f6f6; */

/* 元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动： */
  /* position: fixed; /* 跑到最下面 */
  /* left: 0;
  right: 0;
  bottom: 0; */

  /* 设置阴影, 第一个和第二个值，代表x、y轴，如果都为正，往第四象限走 */
  /* box-shadow: 0 -1px 1 rgba(100, 100, 100, 2);
}

.tar-bar-item { */
  /* flex:1; 就是代表均匀分配元素 */
  /* flex: 1;
  text-align: center;
  height: 49px; /* 一般tabbar高度就是49px,ios安卓都是 */
/* } */
</style>
