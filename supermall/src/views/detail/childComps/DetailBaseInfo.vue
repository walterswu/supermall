<template>

    <!-- 判断是否为空，为空则不显示 -->
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-services">
            <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </span>
         </div>
    </div>
</template>

<script>
export default {
name: "DetailBaseInfo",
props:{
    goods:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>

<style scoped>
.base-info{
    margin-top:8px;

}
.info-title{
    font-size:20px;
    padding:5px;
    
}
.info-price .o-price {
    font-size:22px;
    color:var( --color-high-text);
    line-height: 50px;
     padding:5px;
}
.info-other{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    padding-bottom: 5px;
    line-height: 20px;
    color: #999;
    padding:5px;
}
.info-services {
    justify-content: space-between;
    display: flex;
    line-height: 50px;
    border-bottom: 5px solid rgba(100,100,100,.1);
   
}
.info-services .info-services-item{
    font-size:14px;
}
.info-services .info-services-item img{
    top: 2px;
    width:12px;
    text-align: center;
    position:relative;
}
</style>
