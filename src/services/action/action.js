 
 import {Add_to_cart} from '../constant'
 export const Addtocart=(data)=>{
    console.log('action',data)
    return{
        type:Add_to_cart,
        data:data

    }

}