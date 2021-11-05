<template>
  <div id="app">
    <div id="tab-bar">
    <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>

#tab-bar{

  /*使按钮水平分布*/
  display: flex;
  background-color: #f6f6f6;
  /*设置相对与浏览器窗口的绝对位置*/
  position:fixed;
  left:0;
  bottom:0;
  right:0;

  /*设置边框阴影*/
  box-shadow:0 -1px 1px rgba(100,100,100,.2)
}



</style>
