<template>
  <div class="back-top" @click="backTop">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "BackTop",
methods:{
  backTop(){
this.$emit('backTop')
  }
}
}

</script>

<style scoped>
.back-top{
  position: fixed;
  right:10px;
  bottom:55px;
}
</style>
