<template>
 <grid-view>
     <goods-list-item class="gli" v-for="(item,index) in categoryDetail" v-bind:key="index" :goods-item="item">

     </goods-list-item>
 </grid-view>
</template>
<script>
import GridView from '../../../components/common/gridView/GridView.vue'
import GoodsListItem from '../../../components/content/goods/GoodsListItem.vue'
export default {
  components: { GridView, GoodsListItem},
name:'TabContentDetail' ,
props:{
    categoryDetail:{
        type:Array,
        default(){
            return []
        }
    }
},
methods:{
    clicks(){
        console.log(this.categoryDetail)
    }
}
}
</script>
<style scoped>
.gli{
      /*将内容显示在一行*/
   display: flex;
   /*设置为包裹，就可以根据宽度平等划分*/
   flex-wrap: wrap;
   /*将空白部分进行均等分,即两边的留白等于中间的空隙*/
   justify-content: space-around;
}
</style>