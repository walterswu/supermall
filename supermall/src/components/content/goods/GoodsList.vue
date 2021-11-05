<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :goods-item="item" v-bind:key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
name: "GoodsList",
  props:{
  goods: {
    type: Array,
    default() {
      return []
    }
  }
  },
  components:{
  GoodsListItem
  }
}
</script>

<style scoped>
/*将布局分为两个一组*/
 .goods{
   /*将内容显示在一行*/
   display: flex;
   /*设置为包裹，就可以根据宽度平等划分*/
   flex-wrap: wrap;
   /*将空白部分进行均等分,即两边的留白等于中间的空隙*/
   justify-content: space-around;
 }
</style>
