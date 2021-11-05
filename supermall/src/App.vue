<template>
<div id="app">
  <!-- 加入keep-alive使离开一个组件时，该组件不会被销毁 -->
  <!-- 并且排除掉详情页，使得第一个被点击的商品详情页不会一直被保存，从而替代了后面的商品 -->
  <keep-alive  exclude="Detail">
    <router-view></router-view>
  </keep-alive>
  
  <MainTabBar></MainTabBar>
</div>

</template>

<script>

import MainTabBar from '@/components/content/MainTabbar/MainTabBar'


export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
.tab-bar-item img{
  width:30px;
  height:30px;
  margin-bottom:-2px;
}
</style>
