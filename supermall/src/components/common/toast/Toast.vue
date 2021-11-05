<template>
  <div id="toast" v-if="isshow">
   <div >{{message}}</div>
  </div>
</template>

<script>
export default {
name: "Toast",
data(){
    return{
        isshow:false,
        message:''
    }
},
methods:{
    show(message='默认文字',duration=2000){
        this.isshow=true;
        this.message=message;
        setTimeout(() => {
            this.isshow=false;
            this.message=''
        },duration)
    }
}
}
</script>

<style scoped>
 #toast{
     position: fixed;
     left:50%;
     top:50%;    
     color:white;  
    padding:8px 10px;
     transform: translate(-50%,-50%);
     background-color:rgb(0, 0, 0,.7);
     z-index:9;
 }

</style>
