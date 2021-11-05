<template>
<div class="nav-bar">
<!--  将顶部导航栏分文三个部分-->
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
    .nav-bar {
      /*进行flex布局*/
      display: flex;
      /*导航高度一般都是44*/
      line-height: 44px;
      text-align: center;
      height: 44px;
      box-shadow: 0 1px 1px rgba(100,100,100,.1);
    }
    .left,.right{
      width:60px;
    }
    .center{
      /*会将剩余部分全部占据*/
      flex:1;
    }
</style>
