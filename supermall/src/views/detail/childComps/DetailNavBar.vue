<template>
<div id="DetailNavBar">
     <nav-bar>
    <template v-slot:left><div @click="leftClick" class="navimg"><img src="~assets/img/common/back.svg"></div></template>
    <template v-slot:center >
        <div class="titles">
            <div v-for="(item,index) in titles" 
                :key="index" 
                class="titles-items"
                :class="{'active':index==currentIndex}"
                @click="titlesClick(index)"
                >{{item}}</div>
            </div>
    </template>
  </nav-bar>
</div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'


export default {
  components: { NavBar },
name: "DetailNavBar",
data(){
    return {
        titles:['商品','参数','评论','推荐'], 
        currentIndex:0
    }
},

  methods:{
    leftClick(){
      this.$router.back()
    },
    titlesClick(index){
       this.currentIndex=index;
        this.$emit('titlesClick',index);
    }
  }
}
</script>

<style scoped>
.titles{
 
  display: flex;
  padding: 0 20px;
    font-size: 14px;

}
.titles-items{
  flex: 1;
  
}
.navimg{
  padding:5px;
}
.active{
    color:var( --color-high-text)
}
</style>
