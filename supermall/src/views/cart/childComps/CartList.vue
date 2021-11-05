<template>
<div class="cart-list">
    <scroll class="content" ref="scroll">
    <cart-listitem  v-for="item in cartList" :key="item.iid" :product="item"></cart-listitem>
    </scroll>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from '../../../components/common/scroll/Scroll.vue'
import CartListitem from './CartListitem.vue'


export default {
  components: { Scroll, CartListitem },
name: "CartList",
computed:{
    ...mapGetters(['cartList'])
},
activated(){
    
    this.$refs.scroll.refresh()
}
}
</script>

<style scoped>
.cart-list{
    height: calc(100% - 44px - 49px - 40px);
}
.content{
    height:100%;
    overflow: hidden;
}
</style>
