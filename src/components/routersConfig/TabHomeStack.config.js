import AuthenticateOTP from "../../screens/auth/AuthenticateOTP"
import FogotPassword from "../../screens/auth/FogotPassword"
import Login from "../../screens/auth/Login"
import Register from "../../screens/auth/Register"
import SearchProduct from "../../screens/SearchProduct"
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
    }
]

export default tabHomeStackRoutes