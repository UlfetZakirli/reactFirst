export const cartReducers=(state={cartItems:[]},action)=>{
    switch(action.type){
        case "CART_ADD_ITEM":
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                    x.product === existItem.product ? item : x
                  )
                }
            }
    }
}