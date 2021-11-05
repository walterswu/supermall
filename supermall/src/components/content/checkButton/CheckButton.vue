<template>
    <div class="check-button"  :class="{'active':isChecked}" @click="checkClick1"> 
        <img src="~assets/img/cart/tick.svg">
    </div>
</template>

<script>
    export default{
        name:"CheckButton",
        props:{
            value:{
                type:Boolean,
                default:true
            }
            },
            data(){
                return{
                    isChecked:this.value
                }
            },
            methods:{
                checkClick1(){
                    this.$emit('checkClick1')
                }
            },
            watch:{
                value(newValue){
                    this.isChecked=newValue
                }
            }
    }
    
</script>
<style scoped>
.check-button{
     position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
}
.active{
     background-color: #ff8198;
    border-color: #ff8198;
}
</style>