import { createSlice } from "@reduxjs/toolkit";

export const alertMessage = createSlice({
    name: "alertMessage",
    initialState: {
        messages: {
            errorMsg: "error",
            successMsg: "success",
            warningMsg: "warning",
        },
        isOpenMsg: {
            open: false,
            msgType: "",
            msg: "",
        },
    },
    reducers:{
        Alert_Message:(state,action)=>{
            state.isOpenMsg={
                open:true,
                ...action.payload
            }
        },
        },
    }
)

export const {Alert_Message}=alertMessage.actions;

export const openMsg =(msg)=>(dispatch)=>{
    setTimeout(()=>{
        dispatch(Alert_Message(msg))
    },1000)
}

export const selectMsg =(state)=>state.alertMessage.isOpenMsg
export const selectMsgType =(state)=>state.alertMessage.messages

export default alertMessage.reducer
