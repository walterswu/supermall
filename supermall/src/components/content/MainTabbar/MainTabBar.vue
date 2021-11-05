<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red" >
        <template v-slot:item-icon>
          <img  src="~assets/img/tabbar/home.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category"  activeColor="red" >
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/tabbar/category_active.svg">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart"  activeColor="red" >
        <template v-slot:item-icon>
          <img  src="~assets/img/tabbar/shopcart.svg">
        </template>
        <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item  path="/profile"  activeColor="red" >
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg">
        </template>
        <template v-slot:item-text>
          <div>个人</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "@/components/common/Tabbar/TabBar";
import TabBarItem from "@/components/common/Tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<style scoped>

</style>
