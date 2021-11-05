<template>
<div class="cart">
    <!-- 顶部导航 -->
    <nav-bar class="nav-bar">
        <template v-slot:center>购物车({{length}})</template> 
    </nav-bar>
    <!-- 购物车商品展示 -->
    <cart-list></cart-list>
    <!-- 底部导航 -->
    <cart-botttom-bar></cart-botttom-bar>
</div>

</template>

<script>
import {mapGetters} from 'vuex'


import NavBar from '../../components/common/navbar/NavBar.vue'
import CartBotttomBar from './childComps/CartBotttomBar.vue'
import CartList from './childComps/CartList.vue'


export default {
    name: "Cart",
  components: { NavBar, CartList, CartBotttomBar },
  computed:{
        //mapGetters的两种用法
        //1.数组语法
        // ...mapGetters(['cartLength','cartList'])
        //2.对象语法
        ...mapGetters({
            length:'cartLength',
            list:'cartList'
        })
  }

}
</script>

<style scoped>
.cart{
    height:100vh
}
.nav-bar{
background-color: var(--color-tint);
  color: white;
  
}
</style>
