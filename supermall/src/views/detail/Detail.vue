<template>
<div id="Detail">
  <!-- 定义navbar的ref名为nav,方便后面获取nav.currentIndex -->
  <detail-nav-bar class="detail-nav"
                   @titlesClick="titlesClick"                  
                   ref="nav"></detail-nav-bar>
   <!-- ref获取scroll元素方便调用其中的方法 -->
   <!-- 传入Scroll.vue中的scroll事件进行监听位置并设置probetype可以随时监控位置 -->
  <scroll class="content"      
          ref="scroll"
          :probeType="3"         
          @scroll="contentScroll">
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <!-- 监听图片的加载，防止因为图片没加载完导致滑动高度固定进而页面卡顿   -->
    <detail-goods-info :detailInfo="detailInfo"
                        @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
    <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
    <goods-list ref="recommend" :goods="recommend"></goods-list>
    
  </scroll>
 
  <back-top @backTop="backClick" v-show="showbacktop">
       <img src="~assets/img/common/top.png">
    </back-top>
     <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!-- <toast :message="message" :show="show"></toast> -->
    
</div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail"
import  {debounce} from "common/utils"

import Scroll from '../../components/common/scroll/Scroll.vue'
// import Toast from '../../components/common/toast/Toast.vue'





export default {
  name: "Detail",
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      //用来存储每个组件的Y值，方便获取后跳转
      themeTopYs:[],
      //定义防抖函数获取Y值
      getThemeTopY:null,
      //设定currentIndex来对应nav的变化
     currentIndex:0,
     //回到顶部是否显示
     showbacktop:false,
    //  message:'',
    //  show:false
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    // Toast
  },
 
       created(){  
    //1.保存传入的id值
      this.iid=this.$route.params.iid
      //2.利用传入的iid获取详情数据
      getDetail(this.iid).then(res =>{
        //1.获取顶部的轮播图
        
        const data = res.result
        this.topImages = res.result.itemInfo.topImages
        //2.获取商品信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
 
      //3.获取店铺信息
        this.shop=new Shop(data.shopInfo)
        //4.获取详情图片
        this.detailInfo = data.detailInfo
        //5.获取商品参数
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //6.获取评论信息
         if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }


      //为获取不同组件的y值，需要将该回调函数放在数据更新的created函数中
      //但是当点进去时有些图片未加载，所以不用这个方法
      // this.$nextTick(() =>{
      //   this.themeTopYs=[]

      //   // 从每个组件的el标签中获取dom元素
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // })
     })
      //3.获取推荐数据(推荐数据保存在另一个地址中)
      getRecommend().then(res =>{
        this.recommend=res.data.list
      })
      
      //进行防抖函数的调用
      this.getThemeTopY = debounce(() =>{
             if(this.$refs.param&&this.$refs.comment&&this.$refs.recommend)
       {this.themeTopYs=[]
        // 从每个组件的el标签中获取dom元素
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        //传入一个较大的值做推荐到最大值的判断
         this.themeTopYs.push(Number.MAX_VALUE);
       }
      },)
 },
  methods:{
    imageLoad(){
      //调用scroll刷新函数
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
     backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    titlesClick(index){
      
      //设置scrollTo函数进行跳转位置
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
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
      const positionY= -position.y
        let length = this.themeTopYs.length
        for (let i = 0; i < length-1; i++) {
          //分为两种情况
          if (this.currentIndex!== i &&(positionY >= this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])) 
          {           
              this.currentIndex = i; 
              // 使nav中的currentIndex设置为i
              this.$refs.nav.currentIndex=this.currentIndex;
              
          }  
        
        }
    },
    addToCart(){
      //1.获取购物车所需要的信息
      const product  = {}
      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.newprice=this.goods.oldPrice;
      product.iid=this.iid;
      //2.将商品添加到购物车里
      //通过在Vuex的index.js中加入要传的东西
      //将product作为payload传入vuex
      //this.$store.commit('addCart',product)
      //vuex中的mutations只做单一的事情，所以要将方法放在action中
      this.$store.dispatch('addCart',product).then(res => {
        //组件方式加入弹窗
  
        // this.show=true;
        // this.message=res;
        // setTimeout(() =>{
        //     this.show=false;
        //     this.message='';
        // },1500)

        //插件方式加入弹窗
        this.$toast.show(res,2000)
      })
      
    }
  }
}
</script>

<style scoped>
 #Detail{
   position: relative;
   z-index: 8;
   background-color: #fff;
   height:100vh;
 }
 .back-top img{
  width:43px;
  height: 43px;
}
.content{
  height:calc(100% - 44px);
}
.detail-nav{
  position: relative;
  z-index:9;
  background-color: white;
}
</style>
