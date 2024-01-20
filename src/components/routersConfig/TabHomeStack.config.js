import FogotPassword from "../../screens/auth/FogotPassword"
import Login from "../../screens/auth/Login"
import Register from "../../screens/auth/Register"
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
    }
]

export default tabHomeStackRoutes