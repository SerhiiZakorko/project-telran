import {discountReceiver} from "../../utils/createDiscountReceiver"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://localhost:3333/sale/send"
const initialState = {
  discountReceiver: null,
  status: null,
  error: null,
};
export const postDiscount= createAsyncThunk(
  "discountReceiver/postDiscount",
  async (_, { rejectWithValue }) => {
    if(initialState !== null){
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(discountReceiver),
        headers: {
            "Content-type": "application/json; charset=utf-8",
        }
    })
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }}
  }
);

export const getDiscountSlice = createSlice({
  name: "discountReceiver",
  initialState,
  reducers: {},
 
  extraReducers: (builder) => {
    builder
    .addCase(postDiscount.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
    .addCase(postDiscount.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.discountReceiver = action.payload;
        })
    .addCase(postDiscount.rejected, (state, action) => {
          state.status = "error";
          state.error = action.payload;
        })
   }
});

export default getDiscountSlice.reducer;
