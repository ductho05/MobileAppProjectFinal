import AuthenticateOTP from "../../screens/auth/AuthenticateOTP"
import FogotPassword from "../../screens/auth/FogotPassword"
import Login from "../../screens/auth/Login"
import Register from "../../screens/auth/Register"
import ProductDetail from "../../screens/public/ProductDetail"
import SearchProduct from "../../screens/public/SearchProduct"
import TabBottom from "../routersRender/TabBottom"

const tabHomeStackRoutes = [
    {
        name: 'TabBottom',
        component: TabBottom
    },
    {
        name: 'Login',
        component: Login
    },
    {
        name: 'Register',
        component: Register
    },
    {
        name: 'ForgotPassword',
        component: FogotPassword
    },
    {
        name: 'search',
        component: SearchProduct
    },
    {
        name: 'AuthenticateOTP',
        component: AuthenticateOTP
    },
    {
        name: 'ProductDetail',
        component: ProductDetail
    }
]

export default tabHomeStackRoutes