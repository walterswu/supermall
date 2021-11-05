import{
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default{
    addCart(context,payload){
        return new Promise((resolve) => {
            
        //1.查找之前数组中是否有该商品 
        //将数据payload的iid传过来并与数组中的item.iid值做比较，如果相同就赋值。
        let oldProduct = context.state.cartList.find(item => item.iid == payload.iid)
        //如果oldProduct存在,则oldProduct+1
        if(oldProduct)
        {
            //为了方便调用，将方法划分开
            // oldProduct.count += 1
            context.commit(ADD_COUNTER,oldProduct)
            resolve('当前的商品数量+1')
        }else{
            //不存在则传过来的数组数量+1，并传入数据
            payload.count =1
            // context.state.cartList.push(payload)
            context.commit(ADD_TO_CART,payload)
            resolve('添加新的商品')
        }
        })
        
    }
}