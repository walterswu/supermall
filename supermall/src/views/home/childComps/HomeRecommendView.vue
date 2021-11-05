<template>
  <div class="recommend">
<!--    进行遍历循环，并在每个图片上添加链接-->
    <div class="recommend-item"  v-for="(item,index) in  recommends" v-bind:key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="fonts">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>




export default {
name: "HomeRecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
 .recommend{
   width:100%;
   display: flex;
   margin-top: 10px;
   font-size:14px;
    padding-bottom:30px;
   border-bottom: 10px solid #eee;
 }
 .recommend-item{
   /*flex布局将东西变为横向*/
   flex: 1;
   text-align: center;
 }
 .recommend img{
  width:77px;
   height:80px;

 }
  .fonts{
   margin-top:10px;
 }
</style>
