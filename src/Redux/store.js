import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducers } from "./Reducers/CartReducers";
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducer';

//middleware (redux-thunk)

const reducer=combineReducers({
    cart:cartReducers,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
});
const cartItemsFromLocalStorage=localStorage.getItem("cartItems") ?
JSON.parse(localStorage.getItem("cartItems"))
:[]
const userInfoFormLS=localStorage.getItem("userInfo") ?
JSON.parse(localStorage.getItem("userInfo"))
:[]


const initalState={
    cart:{
        cartItems:cartItemsFromLocalStorage,
        userInfo:userInfoFormLS
    }
    
}

const middleware=[thunk]

const store=createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;


