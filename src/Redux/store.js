import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducers } from "./Reducers/CartReducers";


const reducer=combineReducers({
    cart:cartReducers,
});
const cartItemsFromLocalStorage=localStorage.getItem("cartItems") ?
JSON.parse(localStorage.getItem("cartItems"))
:[]

const initalState={
    cart:{
        cartItems:cartItemsFromLocalStorage
    }
    
}

const middleware=[thunk]

const store=createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;


