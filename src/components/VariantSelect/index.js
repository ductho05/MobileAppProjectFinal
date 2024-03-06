import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Button } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import numeral from 'numeral'
import { BORDER_COLOR2, PRIMARY_COLOR } from '../../styles/colors.global'

const VariantSelect = ({ product, setVariantId, variantId, onClose }) => {

    const handleChange = (index) => {

        setVariantId(index)
    }

    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <View style={tw`bg-white absolute bottom-0 left-0 right-0 h-[80%]`}>
                <View style={tw`flex-1`}>
                    <View style={tw`px-[20px] bg-[${PRIMARY_COLOR}] items-center flex-row py-[10px]`}>
                        <Text style={tw`flex-1 text-center text-white text-[18px]`}>Lựa chọn thuộc tính</Text>
                    </View>
                    <View style={tw`flex-row py-[20px] border-b border-[${BORDER_COLOR2}]`}>
                        <Image
                            source={{ uri: `https:${product?.variants[variantId]?.thumbnail}` }}
                            style={[tw`w-[160px] h-[100px]`, { objectFit: 'contain' }]}
                        />
                        <View style={tw`flex-1`}>
                            <Text numberOfLines={2} style={tw`text-[#333]`}>
                                {product?.name}
                            </Text>
                            <View style={tw`flex-row items-center py-[8px]`}>
                                <Text>Màu: </Text>
                                <Text style={tw`text-[#333] font-bold`}>
                                    {product?.variants[variantId]?.variantName}
                                </Text>
                            </View>
                            <Text style={tw`text-[#333] font-bold`}>
                                {numeral(product?.variants[variantId]?.price).format('0,0')} đ
                            </Text>
                        </View>
                    </View>
                    <View style={tw`p-[20px]`}>
                        <View style={tw`flex-row items-center pb-[8px]`}>
                            <Text>Màu: </Text>
                            <Text style={tw`text-[#333] font-bold`}>
                                {product?.variants[variantId]?.variantName}
                            </Text>
                        </View>
                        <FlatList
                            numColumns={2}
                            keyExtractor={(item) => item?.sku}
                            data={product?.variants}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    disabled={item?.quantity === 0}
                                    onPress={() => handleChange(index)}
                                    style={tw`relative flex-row mr-[10px] w-[48%] items-center p-[2px] bg-[#eee] rounded-[4px] ${variantId === index ? `border border-[${PRIMARY_COLOR}]` : ''}`}
                                >
                                    <Image
                                        source={{ uri: `https:${item?.thumbnail}` }}
                                        style={[tw`w-[100px] h-[70px]`, { objectFit: 'contain' }]}
                                    />
                                    <Text style={tw`ml-[10px] text-[#333]`}>
                                        {item?.variantName}
                                    </Text>
                                    {
                                        item?.quantity === 0 &&
                                        <View
                                            style={[tw`absolute left-0 right-0 top-0 bottom-0 rounded-[4px]`, styles.disabled]}
                                        >
                                            <Text style={[tw`font-bold text-[24px] uppercase`, { color: "#fff" }]}>Hết hàng</Text>
                                        </View>
                                    }
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
                <View style={tw`p-[20px]`}>
                    <Button title='Chọn' color={PRIMARY_COLOR} onPress={onClose} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 100
    },

    disabled: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default VariantSelect