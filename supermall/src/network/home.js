import {request} from "./request";
export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

//请求首页的普通数据
export function getHomeMultidata(){
  return request({
    url:'/home/Multidata'
  })
}

//请求首页商品的数据
export function getHomeGoods(type,page){
    return request({
      url:'/home/data',
      // 进行值传出
      params:{
        type,
        page
      }
    })
}
