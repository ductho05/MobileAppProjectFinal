import axios from "axios"
import { API_URL } from "../constant"

export const getAllCategoriesApi = async () => {

    const response = await axios.get(`${API_URL}/category`)

    return response
}