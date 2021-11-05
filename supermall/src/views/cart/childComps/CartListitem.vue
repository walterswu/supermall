<template>
<div class="shop-item">
    <div class="item-selector">
    <check-button  :value="obj.checked" @checkClick1="checkClick"></check-button>
    </div>
    <div class="item-img">
        <img :src="obj.image" alt="商品图片" >
    </div>
    <div class="item-info">
     <div class="item-title">{{obj.title}}</div>
      <div class="item-desc">{{obj.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{obj.newprice}}</div>
        <div class="item-count right">x{{obj.count}}</div>
      </div>
    </div>
</div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  components: { CheckButton },
name: "CartListitem",
props:{
    product:{
        type:Object,
        default(){
            return {}
        }
        }
    },
    data(){
        return{
            obj:this.product
        }
    },
    methods:{
        checkClick(){
            this.obj.checked=!this.obj.checked
            
        },
        
    }
}
</script>

<style scoped>
.shop-item{
    display: flex;
    width:100%;
    padding:5px;
    border-bottom:2px solid #ccc;
}
.item-selector{
    display: flex;
    width:35px;
    justify-content: center;
    align-items: center;
}
.item-img{
   padding:5px;
  
}
.item-img img{
    display: block;
    width:80px;
    height: 100px;
    border-radius: 10px;
}
.item-info{
    padding:5px  10px;
    position:relative;
    color: #333;
     overflow: hidden;
     font-size:18px;
}
.item-title, .item-desc{
      white-space: nowrap;
      /* 多出的部分隐藏并显示为... */
    text-overflow: ellipsis;
   overflow: hidden;
}
.item-desc{
    font-size:14px;
    margin-top:15px;
}
.info-bottom{
   margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
}
.item-price{
   color: orangered;
}
</style>

