<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
  </div>
  </div>
</template>



<script>
import BScroll from 'better-scroll'

export default {
name: "Scroll",
  props:{
  probeType:{
    type:Number,
    default:1
  },
    pullUpLoad:{
    type:Boolean,
      default:false
    }
  },
  data(){
  return {
    //定义该对象为空
    scroll:null
  }
  },
  mounted() {
  //1.创建BScroll对象，在组件被创建时，传入wrapper并识别
    //用document.querySelector会导致重名而不知道调用哪一个

    this.scroll =new BScroll(this.$refs.wrapper,{
        click:true,
      //通过控制probeType来实现每次调用要不要进行实时监控
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    //2.监听滚动的位置
    this.scroll.on('scroll',(position) =>{
      // console.log(position);
      this.$emit('scroll',position)
    })

    //3.监听下拉加载更多
    this.scroll.on('pullingUp',() =>{
      this.$emit('pullingUp')
      setTimeout(() =>{
        this.scroll.finishPullUp();
      },300)
    })
    console.log(this.scroll);
  },
  methods:{
    scrollTo(x,y,time=200){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
       this.scroll &&this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
