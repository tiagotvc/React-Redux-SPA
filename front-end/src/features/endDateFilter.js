import { createSlice } from '@reduxjs/toolkit';

export const endDateSlice = createSlice({
    name: 'endDate',
    initialState: {
        endDate:'',
    },
    reducers: {
        changeEndDate(state, { payload }) {
            return { ...state, endDate: payload }
        }
    }
}) 

export const { changeEndDate } = endDateSlice.actions
export const getEndDate = state => state.endDate
export default endDateSlice.reducer
