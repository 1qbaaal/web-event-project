import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    fullname:'',
    email:'',
    imageUrl: ''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(prevState= initialState,action)=>{
            console.log(action)
            prevState.fullname = action.payload.fullname
            prevState.email = action.payload.email
            prevState.imageUrl = action.payload.imageUrl
        }
    }

})
export const {setUser} = userSlice.actions
export default userSlice.reducer