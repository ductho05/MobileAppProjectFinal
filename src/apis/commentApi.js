const { default: axios } = require("axios")
const { API_URL } = require("../constant")

export const getCommentByProductApi = async (id) => {

    const response = await axios.get(`${API_URL}/comment/product/${id}`)

    return response
}