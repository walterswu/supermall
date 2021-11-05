<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
name: "DetailShopInfo",
props:{
    shop:{
        type:Object,
        default(){
            return {}
        }
    }
},
}
</script>

<style scoped>
.shop-top{
    line-height: 45px;
    padding:5px;
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
}
 .shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
.shop-top title{
    position: relative;
    vertical-align: center;
}
.shop-middle{
    display: flex;
    padding:5px; 
     align-items: center;
} 
.shop-middle-left{
    font-size:15px;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #333;
    border-right: 1px solid black;
    
}
.info-sells{
    text-align: center;
    width:80px;
}
.info-goods{
    text-align: center;
    width:80px;
}
.shop-middle-item{
    flex:1;
}
.sells-count,.goods-count{
    font-size: 20px; 
    padding:15px;
}
.sells-text,.goods-text{
    font-size: 12px;
    
    text-align: center;
}
.shop-middle-right{
    font-size: 13px;
    
}
.shop-middle-right table{
    width:120px;
    margin-left: 30px;
}
.shop-middle-right table td{
    padding:7px 0;
}
.score{
    color:green;
    
}
.better{
    color:green;
    background-color:green;
    color:white;
}
.score-better{
    color:red;
    
}
.better-more{
    color:red;
    background-color:red;
    color:white;
}
.shop-bottom{
    text-align: center;
}
.enter-shop {
    display: inline-block;
    width:200px;
    background-color: whitesmoke;
    line-height: 25px;
    text-align: center;
    margin:10px;
    border-radius: 10px;
}
</style>
