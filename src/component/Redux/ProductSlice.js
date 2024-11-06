import { createSlice } from "@reduxjs/toolkit";
export const ProductSlice = createSlice({
    name: 'Products',
    initialState:{
        allProducts:[],
        cartProducts:[],
        userAuth:false,
      
    },
    reducers:{
        setProduct:(state, action)=>{
             state.allProducts = action.payload
        },
        addTocart:(state,action)=>{
        state.cartProducts=[...state.cartProducts,action.payload]
        },
        setUserAuth:(state,action)=>{
            state.userAuth = action.payload
        }
        
    }
})

export const {setProduct,addTocart,setUserAuth}=ProductSlice.actions;
export default ProductSlice.reducer