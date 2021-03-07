import { bindActionCreators } from "redux";


export const productDetailsReducer = (state={product:{reviews:[]}},action) => {
    switch (action.type) {
        case 'PRODUCT_DETAILS_REQUEST':
            return{loading:true,...state}
        case 'PRODUCT_DETAILS_SUCCESS':
            return{loading:false,product:action.payload}
        case 'PRODUCT_DETAILS_FAIL':
            return{loading:false,error:action.payload}
            
            
    
        default:
            return state
            
    }
}

