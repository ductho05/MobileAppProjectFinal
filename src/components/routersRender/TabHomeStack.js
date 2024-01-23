import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBottom from './TabBottom';
import Login from '../../screens/auth/Login';
import tabHomeStackRoutes from '../routersConfig/TabHomeStack.config';
import { useDispatch } from 'react-redux'
import { fetchInitialData } from '../../stores/asyncAction';

const Stack = createNativeStackNavigator();

function TabHomeStack() {

    const dispatch = useDispatch()

    React.useEffect(() => {

        dispatch(fetchInitialData())
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"TabBottom"}
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    tabHomeStackRoutes.map(screen => (

                        <Stack.Screen
                            key={screen.name}
                            name={screen.name}
                            component={screen.component}
                        />
                    ))
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TabHomeStack