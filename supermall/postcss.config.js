module.exports = {
    plugins: {
        autoprefixer:{},
        "postcss-px-to-viewport":{
            viewportWidth:357,      //视窗的宽度，对应的是我们设计稿的宽度
            viewportHeight:667,     //视窗的高度，对应的是我们设计稿的高度
            unitPrecision:5,        //指定'px'转换为视窗单位值的小数位数 
            viewportUnit:'vw',  //指定需要转换成的视窗单位
            selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的vue文件
            minPixelValue:1,    //xi小于或等于1px不转换为视窗单位
            MediaQuery:false,    //允许在媒体查询中转换 'px'
            exclude:[/TabBar/]   //正则表达式除去不想转换 的文件（底部导航栏）
        },
    
  }

}