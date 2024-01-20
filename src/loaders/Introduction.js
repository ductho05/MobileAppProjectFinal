import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc'
import { PRIMARY_COLOR } from '../styles/colors.global'

function Introduction() {
    return (
        <View style={tw`flex-1`}>
            <Image
                style={[tw`h-[49.45%] w-full`, { objectFit: 'contain' }]}
                source={require('../assets/images/intro.jpg')}
            />
            <View style={tw`mt-[20%]`}>
                <Text
                    style={[tw`text-[40px] text-center`, { fontFamily: 'InknutAntiqua-Bold', color: PRIMARY_COLOR }]}
                >
                    TTL SHOP
                </Text>
                <Text style={tw`text-[16px] text-center font-bold`}>
                    Thế giới công nghệ chất lượng cao nhất!
                </Text>
            </View>
        </View>
    )
}

export default Introduction