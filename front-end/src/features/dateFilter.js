import { createSlice } from '@reduxjs/toolkit';


export const dateFilterSlice = createSlice({
    name: 'dateFilter',
    initialState: {
        startDate:'',
        endDate:'',
    },
    reducers: {
        changeDateFilter(state, { payload }) {
            return { ...state, startDate: '', endDate: ''}
        }
    }
}) 

export const { changeDateFilter } = dateFilterSlice.actions
export default dateFilterSlice.reducer
