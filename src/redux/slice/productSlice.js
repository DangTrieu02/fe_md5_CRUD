import {createSlice} from "@reduxjs/toolkit";
import { getProducts } from "../../services/productService";

const initialState={
    list : []
}

const ProductSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.list= action.payload
        })
        
    }
})

export default ProductSlice.reducer;