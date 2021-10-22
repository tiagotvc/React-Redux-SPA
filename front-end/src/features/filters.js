import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// base url used to apis calls
const baseUrl = "https://staging.jumpparkapi.com.br/api/";

/** Function to call service Orders with date filter
 *  expects data object counting params startDate and endDate
 **/
export const getFilters = createAsyncThunk(
    "filters/getFilters",
    async (data) => {
        const response = await axios(`${baseUrl}react/test/filters`);
        return response.data;
    }
); 

const serviceFiltersSlice = createSlice({
    name: "filters",
    initialState: {
        filters: [],
        status:null
    },
    extraReducers:{
        [getFilters.pending]: (state, action) => {
            state.status = "loading";
        },
        [getFilters.fulfilled]: (state, action) => {
            state.status = "sucess";
            state.filters = action.payload;
        },
        [getFilters.rejected]: (state, action) => {
            state.status = "failed";

        }
    }
})

export default serviceFiltersSlice.reducer;