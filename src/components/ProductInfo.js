import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { BORDER_COLOR2 } from '../styles/colors.global'

const ProductInfo = ({ product }) => {
    return (
        <View >
            <View style={tw`bg-white mt-[10px]`}>
                <Text style={tw`px-[20px] py-[10px] font-bold uppercase text-[#333] border-b border-[${BORDER_COLOR2}]`}>Thông tin sản phẩm</Text>
                <View style={tw`pt-[10px]`}>
                    {
                        product?.detailSpecs?.map((spec, index) => (
                            <View style={tw`py-[10px] px-[20px] ${index % 2 === 0 ? "bg-[#eee]" : ""}`} key={spec?.groupKey}>
                                <Text style={tw`font-bold text-[#333]`}>
                                    {spec?.groupName}
                                </Text>
                                <View>
                                    {
                                        spec?.groupItems?.map(item => (
                                            <View key={item?.key} style={tw`flex-row`}>
                                                <Text style={tw`text-[#333] flex-1 mr-[10px]`}>
                                                    {item?.name}
                                                </Text>
                                                {
                                                    item?.values?.map(value => (
                                                        <Text key={value}>
                                                            {value}
                                                        </Text>
                                                    ))
                                                }
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
            <View style={tw`bg-white mt-[10px]`}>
                <Text style={tw`px-[20px] py-[10px] font-bold uppercase text-[#333] border-b border-[${BORDER_COLOR2}]`}>Mô tả sản phẩm</Text>
                <Text style={tw`px-[20px] py-[10px] text-justify text-[#333]`}>
                    {product?.desc}
                </Text>
            </View>
        </View>
    )
}

export default ProductInfo