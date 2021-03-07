import axios from "axios"

export const listProducts=()=>async(dispatch)=>{
   
    try{
        dispatch({type:"PRODUCT_LIST_REQUEST"})
        const {data}=await axios.get('/api/products/')
        dispatch({type:"PRODUCT_LIST_SUCCESS",payload:data})
    }
    catch (error){
        dispatch({
            type:"PRODUCT_LIST_FAIL",
            payload:"something went wrong"
        })
    }



}

export const listProductDetails=(id)=>async(dispatch)=>{
   
    try{
        dispatch({type:"PRODUCT_DETAILS_REQUEST"})
        const {data}=await axios.get(`/api/products/${id}`)
        dispatch({type:"PRODUCT_DETAILS_SUCCESS",payload:data})
    }
    catch (error){
        dispatch({
            type:"PRODUCT_DETAILS_FAIL",
            payload:"something went wrong"
        })
    }



}