import { createContext, useContext, useReducer } from "react";

const CartContext=createContext();

export function CartProvider({children}){
    
   const initialState={
    cartItems:[]
   }

   function cartReducer(state,action){  

    switch(action.type){
        case "Add_To_Cart":
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload]
            };
        case "Update_Quantity":
            return{
                ...state,
                cartItems:state.cartItems.map((item)=>item.id===action.payload.id?{...item,quantity:action.payload.quantity }:item)
            }
    }
   }


   const[cartState,CartDispatch]=useReducer(cartReducer,initialState);

    return <CartContext.Provider value={{cartState,CartDispatch}}>
        {children}
    </CartContext.Provider>
}

export function useCart(){
    return useContext(CartContext)
}