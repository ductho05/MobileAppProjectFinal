import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

function Introduction() {
    return (
        <View style={tw`h-[200px] w-full p-[40px]`}>
            <View style={{
                flex: 1,
                flexDirection: 'row'
            }}>
                <Text style={tw`flex text-[16px] text-[#000]`}>Họ tên: </Text>
                <Text style={tw`flex text-[14px] text-[#333]`}>Nịnh Đức Thọ</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row'
            }}>
                <Text style={tw`flex text-[16px] text-[#000]`}>Mssv: </Text>
                <Text style={tw`flex text-[14px] text-[#333]`}>20110730</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row'
            }}>
                <Text style={tw`flex text-[16px] text-[#000]`}>Email: </Text>
                <Text style={tw`flex text-[14px] text-[#333]`}>
                    ductho23pro@gmail.com
                </Text>
            </View>
        </View>
    )
}

export default Introduction