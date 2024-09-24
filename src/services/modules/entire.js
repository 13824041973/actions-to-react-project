// import hyRequest from "../request";
import entire from "./mock/entire";

export function getEntireRoomList(offset = 0, size = 20) {
    // return hyRequest.get({
    //     url: "entire/list",
    //     params: {
    //         offset,
    //         size
    //     }
    // })
    return Promise.resolve(entire)
}