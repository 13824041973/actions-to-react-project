import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData } from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountData().then((res) => {
        dispatch(changeDiscountInfoAction(res))
    })

    getHomeHotRecommendData().then((res) => {
        dispatch(changeRecommendInfoAction(res))
    })

    getHomeLongforData().then((res) => {
        dispatch(changeLongforInfoAction(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        },
    },
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeRecommendInfoAction, changeLongforInfoAction } = homeSlice.actions

export default homeSlice.reducer