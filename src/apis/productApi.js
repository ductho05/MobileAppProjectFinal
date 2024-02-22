import axios from "axios"
import { API_URL } from "../constant"

export const searchApi = async (query) => {

    const response = await axios.get(`${API_URL}/product/search`, {
        params: query
    })

    return response
}

export const getNewsProductApi = async () => {

    const response = await axios.get(`${API_URL}/product/newest`)

    return response
}

export const getMostProductApi = async () => {

    const response = await axios.get(`${API_URL}/product/most-view`)

    return response
}