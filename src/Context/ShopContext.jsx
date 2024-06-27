import React,{createContext, useState} from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;


        
    }
    return cart;
}

const ShopContextProvider =(props) =>
    {
        
        const [cartItems,setCartItems]=useState(getDefaultCart());
        
        const addToCart = (itemID)=>
            {
                setCartItems ((prev)=>({...prev,[itemID]:prev[itemID]+1}))
                
            }
            const removeFromCart = (itemID)=>
                {
                    setCartItems ((prev)=>({...prev,[itemID]:prev[itemID]-1}))
                }
                const contextValue = {all_product,cartItems,addToCart,removeFromCart};


        
        
        return (
            <ShopContext.Provider value={contextValue} >
                {props.children}
                </ShopContext.Provider>

        )

    }
    export default ShopContextProvider;