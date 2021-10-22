import { createSlice } from '@reduxjs/toolkit';

export const startDateSlice = createSlice({
    name: 'startDate',
    initialState: {
        startDate:'',
    },
    reducers: {
        changeStartDate(state, { payload }) {
            return { ...state, startDate: payload }
        }
    }
}) 

export const { changeStartDate } = startDateSlice.actions
export const getStartDate = state => state.startDate
export default startDateSlice.reducer
