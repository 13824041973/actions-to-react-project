import hyRequest from "../request";

export function getHomeGoodPriceData() {
    return hyRequest.get({
        url: "/home/goodprice"
    })
}

export function getHomeHighScoreData() {
    return hyRequest.get({
        url: "/home/highscore"
    })
}