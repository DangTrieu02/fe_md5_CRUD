import { login } from "../../services/userService";
import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    user: JSON.parse(localStorage.getItem('user'))
}
const userSlice= createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers: builder =>{
        builder.addCase(login.fulfilled,(state,action)=>{
            state.user = action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
        })
    }
})
export default userSlice.reducer;