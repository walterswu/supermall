<template>
    <div id="home">
<!--      顶部导航-->
      <nav-bar class="cols"> <template v-slot:center>购物街</template></nav-bar>
      <!-- 再复制一个tab-control进行全页面的覆盖，当滑到指定位置时fix固定 -->
 <tab-control :titles="['流行','新款','精选']"
                       @tabClick="tabClick"  
                       ref="tabControl1"   
                       class="tabControl"
                       :class="{fixed:tabFixed}"
                       v-show="tabFixed"></tab-control>
<!--          内容加入滚动scroll-->
      <scroll class="content" 
              ref="scroll"  
              :probeType="3"   
              :pullUpLoad="true" 
              @scroll="contentScroll" 
              @pullingUp="loadMore">
          <!--      轮播图（传入数据）-->
          <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
          <!--      推荐（传入图片和文字数据）-->
          <HomeRecommendView :recommends="recommends"></HomeRecommendView>
          <feature-view/>
          <tab-control :titles="['流行','新款','精选']"
                       @tabClick="tabClick"  
                       ref="tabControl2"   
                       ></tab-control>
          <goods-list :goods="showgoods"></goods-list>
      </scroll>
<!--      返回顶部按钮-->
      <back-top class="back-top" @backTop="backClick" v-show="showbacktop">
        <img src="~assets/img/common/top.png">
      </back-top>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";


import {getHomeMultidata,RECOMMEND, BANNER,getHomeGoods} from "network/home";
import  {debounce} from "common/utils";


export default {
name: "Home",

  components:{
    Scroll,
  NavBar,
   HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop

  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      showbacktop:false,
      currentType:'pop',
      tabOffsetTop:0,
      tabFixed:false,
      saveY:0,
      flag:false
    }
  },
  created() {
        //1.请求多个数据
        this.getHomeMultidata(),
      //2.请求商品数据
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
      // this.$refs.scroll.refresh()
  },
  //放在mounted是方便refs在Vue获取到dom节点后调用函数，不会出现调用不到的情况
  //而created无法获取到dom节点，只是将内容挂载到页面上
  mounted() {
    //1.图片加载完的事件监听
    const refresh =debounce(this.$refs.scroll.refresh,300)
    //监听item中图片加载完成
    this.$bus.$on('itemImageLoad',() => {
      //refresh调用过多会占用资源，所以需要加入防抖函数debounce
      refresh()
    })
       refresh()   // this.$refs.scroll.scroll.refresh()


    
    // if(location.href.indexOf('#reloaded')==-1){
    // location.href=location.href+"#reloaded";
    // location.reload();
    // }
     
    //2.获取tabControl中的offsetTOP
    //所有组件都有一个属性$el:用于获取组件中的div元素 
    
  },
  computed:{
      showgoods(){
         return this.goods[this.currentType].list
      } 
  },
  activated(){
    //进入home时调用scrollTo函数记录Y的值
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()
      },
  deactivated(){
    //离开home时获取scroll中的y
          this.saveY=this.$refs.scroll.getScrollY()
      },
  methods: {
  //1.将调用数据的方法进行一个封装
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        //2.获取需要的数据
        this.banners = res.data[BANNER].list;
        this.recommends = res.data[RECOMMEND].list;
      })
    },
    getHomeGoods(type){
      //一开始+1是为了请求第一页的数据
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
        //这里+1是为了将数据向前+1页
          this.goods[type].page+=1
          //完成 上拉加载更多
        this.$refs.scroll.finishPullUp()
        
      })
    },
    tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
        //1.判断什么时候显示返回顶部按钮
        if(position.y>-1000)
        {
          this.showbacktop=false
        }
        if(position.y<-1000)
        {
          this.showbacktop=true
        }
        //2.判断tabControl什么时候吸顶
        this.tabFixed=(-position.y)>this.tabOffsetTop
    },
    loadMore(){
      //再次调用该方法，使本来就已被调用一次的页码+1，并在参数中传入对应的类型
      this.getHomeGoods(this.currentType);
      //页面在滚动的时候发生卡顿，原因是宽度已经设定为固定值，而图片的加载是异步操作，在宽度固定后，图片继续加载会导致宽度无法下拉，所以会卡顿
      //所以在这里需要加入实时更新的语句
      this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad(){
     this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    }

  }
}
</script>

<style scoped>
#home{
  position: relative;
  padding-top: 44px;
  /*!意思为100%视界口*!*/
  height: 100vh;
}
.cols{
  /*动态绑定颜色变量*/
  background-color: var(--color-tint);
  color: white;
  position: fixed;
   left:0;
  right:0;
  top:0;
  z-index: 9;
}
/*设置滚动内容方案一:用calc计算出除去顶部和底部的空间*/
/*.content{*/
/*    height:calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  margin-top: 44px;*/
/*}*/
.content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom:49px;
  left:0;
  right:0;
}

.back-top img{
  width:43px;
  height: 43px;
}
.fixed{
  position: fixed;
  left:0;
  right: 0;
  top:44px;
}
.tabControl{
  z-index:19;
  background-color: white;
}
</style>
