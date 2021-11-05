<template>
    <div class="detail-swiper">
        <swiper class="dswiper">
            <swiper-item  v-for="(item,index) in topImages" :key="index">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  components: { Swiper, SwiperItem },
name: "DetailSwiper",
props:{
    topImages:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style scoped>
.dswiper{
    height:300px;
    overflow: hidden;
}
</style>
