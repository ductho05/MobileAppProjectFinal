import axios from "axios"
import { API_URL } from "../constant"

export const getUserApi = async (token) => {

    const response = await axios.request({
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: `${API_URL}/user/owner`
    })

    return response
}