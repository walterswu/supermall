<template>
    <div class="goodsitem"  @click="itemClick">
      <img v-lazy="showImage" alt="" @load="imageLoad">
      <div>
        <div class="goodsitem-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: "GoodsListItem",
  props:{
  goodsItem:{
    type:Object,
    default(){
      return {}
    }
  }
  },
  computed:{
    showImage(){
     return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
  //利用vux总线发送函数请求到refresh进行实时监听
      imageLoad(){
        //详情页中进行加载推荐会传出 事件导致主页刷新，为了防止刷新
        //要加入IF语句进行判断
        if(this.$route.path.indexOf('/home')){
            this.$bus.$emit('itemImageLoad')
        } else  if(this.$route.path.indexOf('/detail')){
            this.$bus.$emit('detailItemImgLoad')
        }
        
      },
      itemClick(){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
  }
}
</script>

<style scoped>
.goodsitem{
  position: relative;
  padding-bottom: 44px;
  width:48%;
}
.goodsitem img{
  width:100%;
  border-radius: 7px;

}
.goodsitem-info{
  font-size: 12px;
  position: absolute;
  bottom:5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsitem-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  /*将过长的字段在一行无法显示时变为...*/
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsitem-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsitem-info .collect{
  position: relative; 
}
.goods-info .collect::before{
  content: '';
  position: absolute;
  left:-15px;
  top:0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
