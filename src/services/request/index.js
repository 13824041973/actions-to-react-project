import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            return err
        })
    }

    requrest(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.requrest({ ...config, method: "GET" })
    }

    post(config) {
        return this.requrest({ ...config, method: "POST" })
    }
}

const hyRequest = new HYRequest(BASE_URL, TIME_OUT)
export default hyRequest