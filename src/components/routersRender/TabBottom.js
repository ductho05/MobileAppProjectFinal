import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import TabBottomRouters from '../routersConfig/TabBottom.config';
import { PRIMARY_COLOR } from '../../styles/colors.global';
import { Text } from 'react-native';
import tw from 'twrnc'

const Tab = createBottomTabNavigator()

function TabBottom() {
    return (
        <Tab.Navigator
            initialRouterName="info"
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
                                    height: 54,
                                    paddingBottom: 5
                                },

                                tabBarIcon: ({ focused, color, size }) => {
                                    return (
                                        <IconFontAwesome
                                            name={iconName}
                                            size={20}

                                            color={
                                                focused ? `${PRIMARY_COLOR}` : '#333'
                                            }
                                        />
                                    )
                                },
                                tabBarLabel: ({ focused }) => {
                                    return (
                                        <Text style={tw`${focused ? 'text-[#FA7B05]' : 'text-[#333]'}`}>
                                            {label}
                                        </Text>
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