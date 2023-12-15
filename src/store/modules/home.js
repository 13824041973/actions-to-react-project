import { getHomeGoodPriceData } from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfo(res))
        console.log(res);
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {}
    },
    reducers: {
        changeGoodPriceInfo(state, { payload }) {
            state.goodPriceInfo = payload
        }
    },
})

export const { changeGoodPriceInfo } = homeSlice.actions

export default homeSlice.reducer