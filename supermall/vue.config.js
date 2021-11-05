module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'vuejs-datatable': 'vuejs-datatable/dist/vuejs-datatable.esm.js',
      }
    }
  },
    //本机ip地址172.20.243.17:8080
  devServer:{
    public:'172.20.243.17:8080',
    port:8080,
    hot:true,
    disableHostCheck : true,  

}
}

