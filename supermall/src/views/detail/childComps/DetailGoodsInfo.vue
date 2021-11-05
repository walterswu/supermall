<template>
<div class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
     <div class="info-key" v-if="detailInfo.detailImage"><strong>{{detailInfo.detailImage[0].key}}</strong></div>
    <div class="info-list" v-if="detailInfo.detailImage">    
            <img  v-for="(item,index) in detailInfo.detailImage[0].list"  
                  :src="item" 
                  :key="index"
                  @load="imgLoad"
                  >             
        </div>
</div>
</template>

<script>
export default {
name: "DetailGoodsInfo",
data(){
    return{
        counter:0,
        imagesLength:0
    }
},
props:{
    detailInfo:{
        type:Object,
        default(){
            return {}
        }
    },
},
methods:{

    // 每一张图片加载完就调用一次
    imgLoad(){
        this.counter+=1
        //当长度一样时，将该方法传回父组件Detail.vue
        if(this.counter==this.imagesLength){
            this.$emit('imageLoad');
        }
    }
},
watch:{
    detailInfo(){
        //让定义的imagesLength等于请求数据中的长度
        this.imagesLength=this.detailInfo.detailImage[0].list.length;
    }
}
}
</script>

<style scoped>
 .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
.info-list img{
    width:100%;
}
.info-desc{
    padding:0 15px;
}
.info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
.start{
      float:left;
      
  }
.end{
      float:right;
      
  }
.desc{
      padding:10px 0;
  }
   .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>