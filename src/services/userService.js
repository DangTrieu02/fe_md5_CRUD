import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const login =createAsyncThunk(
    'users/login',
    async ({username,password})=>{
        let res = await axios.post('http://localhost:3001/auth/login',{username,password})
        return res.data
    }
)
export const register = createAsyncThunk(
    'users/register',
    async ({username,password})=>{
        let res = await axios.post('http://localhost:3001/auth/register',{username,password})
        return res.data
    }
)
