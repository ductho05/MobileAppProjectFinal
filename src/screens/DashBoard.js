import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Detail from './Detail';
import Setting from './Setting';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator()

const listTab = [
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

function DashBoard() {
    return (
        <Tab.Navigator
            initialRouterName="Trang chủ"
            screenOptions={{ headerShown: false }}
        >
            {
                listTab.map((tab, index) => {
                    const {
                        screen,
                        label,
                        tabIconLabel,
                        iconName
                    } = { ...tab }

                    return (
                        <Tab.Screen
                            key={index}
                            name={label}
                            component={screen}
                            options={{
                                navigationOptions: {
                                    headerShown: false,
                                },
                                tabBarLabelStyle: {
                                    fontSize: 13,
                                    fontWeight: 'bold'
                                },
                                tabBarStyle: {
                                    height: 60,
                                    paddingBottom: 5
                                },

                                tabBarIcon: ({ focused, color, size }) => {
                                    return (
                                        <IconFontAwesome
                                            name={iconName}
                                            size={20}
                                            color={
                                                focused ? '#007aff' : '#000'
                                            }
                                        />
                                    )
                                }
                            }}

                        />
                    )
                })
            }
        </Tab.Navigator>
    )
}

export default DashBoard