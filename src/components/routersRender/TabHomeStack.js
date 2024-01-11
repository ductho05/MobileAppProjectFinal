import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBottom from './TabBottom';
import Start from '../../screens/Start/Start';

const Stack = createNativeStackNavigator();

function TabHomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"TabBottom"}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={"TabBottom"}
                    component={TabBottom}
                />
                <Stack.Screen
                    name={"Start"}
                    component={Start}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TabHomeStack