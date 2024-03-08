import Home from '../../screens/public/Home';
import Notification from '../../screens/member/Notification';
import Cart from '../../screens/member/Cart';
import Account from '../../screens/member/Account';

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