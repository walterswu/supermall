<template>
    <div id="bottom-bar">
        <div class="check-content">
            <check-button  :value="isSelectAll" class="check-size" @checkClick1="checkClick"></check-button>
            <span>全选</span>
        </div>
        <div class="totalprice">
            合计:{{totalPrice}}
        </div>
        <div class="checklengths" @click=calcClick>
            去结算({{checkLength}})
        </div>
    </div>
</template>



<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default{
    name:'CartBottomBar',
    components:{CheckButton},
    computed:{
        totalPrice(){
            // 让aa等于金钱符号，并在下面变量中过滤掉￥符号以求得最终计算值
            const aa=new RegExp("¥");
            const cartList= this.$store.getters.cartList;           
            return cartList.filter(item => {
                // 过滤掉item.checked为未选中的,还有newprice为空的
                return item.checked
            }).reduce((preValue,item) => {
                //返回前面选中的值并继续加入勾选的值   
                if(item.newprice!=undefined)    
                {return preValue + item.count * (item.newprice).replace(aa,"")}
                else
                return preValue
            },0).toFixed(2)
        },
        checkLength(){
            //返回过滤掉checked为false的长度
                return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll(){
            //find函数：当找到
            if(this.$store.state.cartList.length === 0)
            return false
            else
            return !this.$store.state.cartList.find(item => !item.checked)
        }
    },
    methods:{
        checkClick(){
            if(this.isSelectAll){//全部选中
                this.$store.state.cartList.forEach(item => item.checked = false);
            } else {//全部不选中或部分不选中
                this.$store.state.cartList.forEach(item => item.checked = true)
            }
        },
        calcClick(){
            if(this.checkLength===0){
                this.$toast.show('请选择购买的商品',2000)
            }
        }
    }
}
</script>
<style scoed>
#bottom-bar{
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
    display: flex;
    font-size: 15px;
}
.check-content{
    display: flex;
    align-items: center;
    margin-left:10px;
    width:50px;
}
.check-size{
    width:18px;
    height:18px;
    line-height: 5px;
    margin-right:10px;
}
.totalprice{
    margin-left:25px;
    flex:1
}
.checklengths{
    margin-left:20px;
    width: 80px;
    background-color: orangered;
    text-align: center;
}
</style>
