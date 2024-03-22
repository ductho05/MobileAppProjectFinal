import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import numeral from 'numeral'
import { PRIMARY_COLOR } from '../../styles/colors.global'
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native'

const SuggestItem = ({ product }) => {
    const navigation = useNavigation()

    const handleToProductDetail = () => {
        navigation.navigate('ProductDetail', {
            id: product._id
        })
    }
    return (
        <TouchableOpacity onPress={handleToProductDetail} style={tw`w-[160px] m-[10px] p-[10px] bg-white rounded-[12px]`}>
            <Image
                source={{ uri: `${product.specPicture}` }}
                style={[tw`w-full h-[160px]`, { objectFit: 'contain' }]}
            />
            <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[tw`font-bold`, { color: PRIMARY_COLOR }]}
            >
                {product.name}
            </Text>
            <Text
                style={tw`text-[#333] py-[8px]`}
            >
                {numeral(product.minPrice).format('0,0')} đ
            </Text>
            <View style={tw`p-[0] flex-row items-center`}>
                <Rating
                    imageSize={14}
                    reviews={[]}
                    readonly={true}
                    startingValue={product.rates}
                />
                <Text style={tw`ml-[6px]`}>({product.rates})</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SuggestItem