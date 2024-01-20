import Home from '../../screens/Home';
import Notification from '../../screens/Notification';
import Cart from '../../screens/Cart';
import Account from '../../screens/Account';

const TabBottomRouters = [
    {
        screen: Home,
        label: 'Trang chủ',
        tabIconLabel: 'home',
        iconName: 'home',
    },
    {
        screen: Account,
        label: 'Tài khoản',
        tabIconLabel: 'user',
        iconName: 'user',
    },
    {
        screen: Notification,
        label: 'Thông báo',
        tabIconLabel: 'info',
        iconName: 'bell',
    },
    {
        screen: Cart,
        label: 'Giỏ hàng',
        tabIconLabel: 'cart-plus',
        iconName: 'cart-plus'
    }
]

export default TabBottomRouters