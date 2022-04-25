import { BASE_URL } from "../../api/ApiConfig"

export const AddToCart=(id,qty,lang)=>async (dispatch,getState)=>{
    const {data}= await fetch(`${BASE_URL}/api/products/${id}/${lang}`)
    dispatch({
        type:"CART_ADD_ITEM",
        payload:{
            id:data.id,
            price:data.price,
            qty
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}   