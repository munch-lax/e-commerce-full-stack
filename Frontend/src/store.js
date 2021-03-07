import { createStore,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from './reducers/productListReducer';
import { productDetailsReducer } from './reducers/productDetails';
import { cartReducer } from "./reducers/cartReducers";



const reducer=combineReducers({productList:productListReducer,productDetails:productDetailsReducer,cart:cartReducer})

const cartitemsfromstorage=localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]

const initialState={
    cart:{cartItems:cartitemsfromstorage}
}
const middleware=[thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store