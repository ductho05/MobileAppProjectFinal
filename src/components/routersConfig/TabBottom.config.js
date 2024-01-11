import * as React from 'react'
import Home from '../../screens/Home';
import Detail from '../../screens/Detail';
import Setting from '../../screens/Setting';

const TabBottomRouters = [
    {
        screen: Home,
        label: 'Trang chủ',
        tabIconLabel: 'home',
        iconName: 'home',
    },
    {
        screen: Detail,
        label: 'Chi tiết',
        tabIconLabel: 'info',
        iconName: 'info-circle',
    },
    {
        screen: Setting,
        label: 'Cài đặt',
        tabIconLabel: 'tools',
        iconName: 'tools',
    }
]

export default TabBottomRouters