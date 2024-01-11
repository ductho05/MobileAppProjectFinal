import React from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import tw from "twrnc"

function LoadApp() {
    return (
        <LinearGradient
            colors={['#364F6B', '#6B5072', '#FC5185', '#1C1C1C']}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.9, y: 0.9 }}
            style={tw`flex justify-center items-center w-full h-full`}
        >
            <Text style={tw`text-[16px] text-white`}>music</Text>
            <Text style={tw`text-[40px] text-white`}>KAPUHA</Text>
        </LinearGradient>
    )
}

export default LoadApp