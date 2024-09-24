// import hyRequest from "../request";
import { discount, goodprice, highscore, hotrecommenddest, longfor, plus } from "./mock/home";

export function getHomeGoodPriceData() {
    // return hyRequest.get({
    //     url: "/home/goodprice"
    // })
    return Promise.resolve(goodprice)
}

export function getHomeHighScoreData() {
    // return hyRequest.get({
    //     url: "/home/highscore"
    // })
    return Promise.resolve(highscore)
}

export function getHomeDiscountData() {
    // return hyRequest.get({
    //     url: "/home/discount"
    // })
    return Promise.resolve(discount)
}

export function getHomeHotRecommendData() {
    // return hyRequest.get({
    //     url: "/home/hotrecommenddest"
    // })
    return Promise.resolve(hotrecommenddest)
}

export function getHomeLongforData() {
    // return hyRequest.get({
    //     url: "/home/longfor"
    // })
    return Promise.resolve(longfor)
}

export function getHomePlusData() {
    // return hyRequest.get({
    //     url: "/home/plus"
    // })
    return Promise.resolve(plus)
}