import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts= createAsyncThunk(
    'products/getProducts',
    async()=>{
        let allProduct= await axios.get('http://localhost:3001/products/')
        return allProduct.data
    }
)
export const addProduct= createAsyncThunk(
    'products/addProduct',
    async(product)=>{
        await axios.post('http://localhost:3001/products')
        return product
    }
)