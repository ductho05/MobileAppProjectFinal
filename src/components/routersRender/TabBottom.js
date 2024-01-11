import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import TabBottomRouters from '../routersConfig/TabBottom.config';

const Tab = createBottomTabNavigator()

function TabBottom() {
    return (
        <Tab.Navigator
            initialRouterName="Trang chủ"
            screenOptions={{ headerShown: false }}
        >
            {
                TabBottomRouters.map((tab, index) => {
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

export default TabBottom