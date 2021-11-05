<template>
<div id="profile">
    <nav-bar class="nav-bar"><template v-slot:center>购物商城</template></nav-bar>
    <Userinfo></Userinfo>
    <section class="center">
        <div class="one">
            <div class="number">
                <span class="balance">0.00</span>元
            </div>
            <div class="count">我的余额</div>
        </div>
        <div class="one">
            <div class="number">
                <span class="balance">0</span>个
            </div>
            <div class="count">我的优惠</div>
        </div>
        <div class="one">
            <div class="number">
                <span class="balance">0</span>
            </div>
            <div class="count">我的积分</div>
        </div>
    </section>


    
<ListView :listData="orderList"  class="order-list"></ListView>
<list-view :listData="serviceList" class="service-list"></list-view>
</div>



</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import Userinfo from './childcomps/Userinfo.vue'
import ListView from './childcomps/ListView'


export default {
  components: { NavBar,Userinfo,ListView},
    name: "Profile",
    data(){
        return{
        orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
        }
    }
}
</script>

<style scoped>
#profile {
    background-color: #f2f2f2;
  }

.nav-bar{
    background-color: var(--color-tint);
    color:white;
    font-weight: 700;
}
.center{
    display: flex;

}
.one{
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
    color: #666;
    font-size: 13px;
    padding: 18px;

}
.one:last-of-type {
    margin-right: 0;
  }
.number{
    text-align: center;
}
.balance{
    color:#ff5f3e;
    font-size: 24px;
    font-weight: 700;
}
.count{
    margin-top: 6px;
}
.order-list, .service-list {
    margin-top: 12px;
  }
</style>
