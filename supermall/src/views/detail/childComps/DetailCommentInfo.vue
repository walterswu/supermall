<template>
    <div class="commentInfo"  v-if="commentInfo.user">
        <div class="info-head">
            <div class="head-title">用户评价</div>
            <div class="head-more">更多</div>
        </div>
        <div class="comment">
            <div class="user">
                <img :src="commentInfo.user.avatar">              
                <span>{{commentInfo.user.uname}}</span>           
            </div>
            <div class="comment-main">
                <div class="comment-content">
                {{commentInfo.content}}
                </div>
                <div class="comment-style">
                {{commentInfo.style}}
                </div>              
            </div>
            <div class="comment-img">
                 <img :src="item" v-for="(item,index) in commentInfo.images" :key="index">
            </div>           
        </div>
        
    </div>
</template>
<script>
export default{
    name:"DetailCommentInfo",
    props:{
        commentInfo:{
            type:Object,
            default(){
                return  {}
            }
        }
    }
}
</script>
<style scoped>
.commentInfo{
   border-bottom: 5px solid rgba(100,100,100,.1);
}
.info-head{
     border-bottom: 3px solid rgba(100,100,100,.1);
     font-size: 16px;
     line-height: 50px;
     height: 50px;
}
.head-title{
    float:left;
    margin-left:10px;
}
.head-more{
    float:right;
     margin-right:10px;
}
.comment{
    padding:0 5px;
}

.user{
    padding:10px 0 5px;
}
.user img{
    width:42px;
    height:42px;
    border-radius: 50%;
}
.user span{
    position: relative;
    top: -15px;
    margin-left: 10px;
    height:10px;
    
}
.comment-main{
    font-size: 14px;

    line-height:1.5;
}
.comment-style{
    font-size: 12px;
    color: #777;
    margin-top: 10px;
    
}
.comment-img img{
    margin-top: 10px;
width:70px;
height:70px;
}
</style>