import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'twrnc'
import ProductItem from '../ProductItem'
import { PRIMARY_COLOR } from '../../styles/colors.global'
import Skeleton from "@thevsstech/react-native-skeleton"

const ProductFrame = ({ title, description, productList, isSlide }) => {
    return (
        <View style={tw`py-[10px]`}>
            <View style={tw`flex-row px-[20px]`}>
                <Text style={tw`flex-1 font-bold text-[16px] text-[#333] pr-[20px]`}>
                    {title}
                </Text>
                {
                    isSlide &&
                    <TouchableOpacity>
                        <IconFontAwesome
                            name="angle-right"
                            size={20}
                            color="#333"
                        />
                    </TouchableOpacity>
                }
            </View>
            {
                description &&
                <Text style={tw`text-[14px] text-[#333] px-[20px] w-[80%]`}>
                    {description}
                </Text>
            }
            <View style={tw`py-[10px] items-center`}>
                {
                    isSlide
                        ?
                        <FlatList
                            horizontal={isSlide}
                            pagingEnabled
                            keyExtractor={(item) => item._id}
                            data={productList}
                            renderItem={({ item }) => <ProductItem product={item} />}
                        />
                        :
                        <FlatList
                            numColumns={2}
                            keyExtractor={(item) => item._id}
                            data={productList}
                            renderItem={({ item }) => <ProductItem product={item} />}
                        />
                }
                {
                    !isSlide &&
                    <TouchableOpacity>
                        <View style={[tw`mt-[20px] bg-white flex-row px-[10px] py-[6px] border rounded-[12px]`, { borderColor: PRIMARY_COLOR }]}>
                            <Text style={[tw`mr-[6px]`, { color: PRIMARY_COLOR }]}>Xem thêm</Text>
                            <IconFontAwesome
                                name="angle-right"
                                size={20}
                                color={PRIMARY_COLOR}
                            />
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const Loading = () => {

    return (
        <View style={tw`py-[20px]`}>
            <Skeleton>
                <Skeleton.Item width={160} height={16} marginLeft={20} />
                <Skeleton.Item width={200} height={14} marginTop={6} marginLeft={20} />
                <Skeleton.Item marginTop={20} flexDirection="row" alignItems="center">
                    <Skeleton.Item
                        width={160}
                        height={200}
                        borderRadius={12}
                        marginLeft={10}
                        marginRight={10}
                    />
                    <Skeleton.Item
                        width={160}
                        height={200}
                        borderRadius={12}
                        marginLeft={10}
                        marginRight={10}
                    />
                </Skeleton.Item>
                <Skeleton.Item marginTop={20} width={160} height={16} marginLeft={20} />
                <Skeleton.Item width={200} height={14} marginTop={6} marginLeft={20} />
                <Skeleton.Item marginTop={20} flexDirection="row" alignItems="center">
                    <Skeleton.Item
                        width={160}
                        height={200}
                        borderRadius={12}
                        marginLeft={10}
                        marginRight={10}
                    />
                    <Skeleton.Item
                        width={160}
                        height={200}
                        borderRadius={12}
                        marginLeft={10}
                        marginRight={10}
                    />
                </Skeleton.Item>
                <Skeleton.Item marginTop={20} flexDirection="row" alignItems="center">
                    <Skeleton.Item
                        width={160}
                        height={200}
                        borderRadius={12}
                        marginLeft={10}
                        marginRight={10}
                    />
                    <Skeleton.Item
                        width={160}
                        height={200}
                        borderRadius={12}
                        marginLeft={10}
                        marginRight={10}
                    />
                </Skeleton.Item>
            </Skeleton>
        </View>
    )
}

export default { ProductFrame, Loading }