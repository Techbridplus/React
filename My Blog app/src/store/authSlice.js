import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    Contents: [],
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginState: (state, action) => {
            state.status = true;
            // state.userData = action.payload.userData;
        },
        logoutState: (state) => {
            state.status = false;
            // state.userData = null;
            // state.ContentSize = 0;
        },
        sendData: (state, action) => {
            console.log("action.payload.Contents",action.payload.Contents);
            state.Contents= action.payload.Contents;
            console.log("state.Contents",state.Contents);
        },
        receiveData: (state) => {
            return state.Contents;

     }
}})

export const {loginState, logoutState,sendData,receiveData} = authSlice.actions;

export default authSlice.reducer;