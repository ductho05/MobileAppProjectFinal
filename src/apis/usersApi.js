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

export const activeUserApi = async (email) => {

    const response = await axios.post(`${API_URL}/auth/active-user?email=${email}`)

    return response
}

export const sendOTPApi = async (email) => {

    const response = await axios.post(`${API_URL}/auth/send-otp?email=${email}`)

    return response
}

export const forgotPasswordApi = async (data) => {

    const response = await axios.post(`${API_URL}/auth/forgot-password`, data)

    return response
}
