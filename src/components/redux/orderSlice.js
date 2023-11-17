import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    closed: false,
    modalData: "",
    result: false,
  }

export const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        getClosed:(state, action)=>{
            state.closed = action.payload;
        },

        getModalData:(state, action)=>{
            state.modalData = action.payload;
        },

        getStatusResult:(state, action)=>{
            state.result = action.payload;
        }
    }
})

export const {getClosed, getModalData, getStatusResult}  = orderSlice.actions;
export default orderSlice.reducer;