import axios from "axios";
import { useSelector } from "react-redux";

const { token } = useSelector(state => state.user)

const authInstance = axios.create()