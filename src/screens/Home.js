import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc';

function Home() {
    return (
        <>
            <View style={tw.style('flex justify-center items-center h-full z-10 bg-[#fff]')}>
                <Text style={tw`text-[40px] text-center text-black mt-[20px]`}>
                    Trang chủ
                </Text>
            </View>
        </>
    )
}

export default Home