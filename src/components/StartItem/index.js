import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc'
import { PRIMARY_COLOR } from '../../styles/colors.global'

function StartItem({ data }) {
    return (
        <View style={tw`h-[320px] w-[216px] bg-white rounded-[22px] mx-[5px] pt-[84px]`}>
            <Image
                source={data.image}
                style={tw`w-[216px] h-[150px]`}
                resizeMode='contain'
            />
            <Text style={tw`text-[14px] text-[${PRIMARY_COLOR}] text-center p-[20px]`}>{data.title}</Text>
        </View>
    )
}

export default StartItem