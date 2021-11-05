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
  devServer:{
    public:'0.0.0.0:8080',
    port:8080,
    hot:true,
    disableHostCheck : true,  

}
}

