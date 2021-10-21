import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// base url used to apis calls
const baseUrl = "https://staging.jumpparkapi.com.br/api/";

/** Function to call service Orders with date filter
 *  expects data object counting params startDate and endDate
 **/
export const getServiceOrders = createAsyncThunk(
    "orders/getServiceOrders",
    async (data) => {
        const response = await axios(`${baseUrl}react/test/serviceorders?situationId=&startDate=${data.startDate}&endDate=${data.endDate}`);
        return response.data;
    }
); 

const serviceOrdersSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        status:null
    },
    extraReducers:{
        [getServiceOrders.pending]: (state, action) => {
            state.status = "loading";
        },
        [getServiceOrders.fulfilled]: (state, action) => {
            state.status = "sucess";
            state.orders = action.payload;
        },
        [getServiceOrders.rejected]: (state, action) => {
            state.status = "failed";

        }
    }
})

export default serviceOrdersSlice.reducer;