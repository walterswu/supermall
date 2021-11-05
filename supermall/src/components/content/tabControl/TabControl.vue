<template>
  <div class="tab-control">
    <div class="tab-control-item" @click="itemClick(index)" v-for="(item,index) in titles" v-bind:key="index" :class="{active: index==currentIndex}">
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "TabControl",
  //记录home组件传过来的值
  props:{
    titles:{
      type:Array,
      default(){
       return []
      }
    }
  },
  data(){
   return{
     currentIndex:0
   }
  },
  methods:{
  // 将需要改变样式的currentIndex进行改变
    itemClick(index){
        this.currentIndex=index
        //将该事件和index传过去
        this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display:flex;
    text-align: center;
    font-size: 18px;
    line-height: 37px;
    z-index:8;
  }
  .tab-control-item{
    flex:1;
    height: 45px;
  }
  .tab-control-item span{
    padding: 6px;
    
  }
  .active{
    color:var( --color-high-text)
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
