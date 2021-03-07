export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    
    
    console.log('from reducer',action.payload)
    switch (action.type) {
        case 'CART_ADD_ITEM':

            console.log('from reducer in switch',action.payload)
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case 'CART_REMOVE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }

        

        default:
            console.log("this is default")
            return state
    }
}

