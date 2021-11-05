<template>
<!--  所有item显示同一个图片，同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
<!--    放图片-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
<!--    动态绑定更改颜色的样式-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
name: "TabBarItem",
  props:{
   path: String,
    // 将activeColor传过来
    activeColor:{
     type:String,
      default:'red'
    }
  },
  data(){
  return {
    // isActive:true,
  }
  },
  computed:{
    isActive(){
      // 通过点击传入的组件和路径进行比不位false则调用
      return this.$route.path.indexOf(this.path)!== -1
    },
    activeStyle(){
      // 三元运算符，动态绑定color
      return this.isActive ? {color:this.activeColor}: {}
    }
  },
  methods:{
  itemClick(){
    this.$router.replace(this.path)
  }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  height:55px;
}
.active{
  color:red;
}

</style>
