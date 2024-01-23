import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import Skeleton from "@thevsstech/react-native-skeleton"

const listColors = ["rgba(250, 123, 5, 0.8)", "rgba(8, 39, 151, 0.8)", "rgba(58, 81, 163, 0.8)"]

const CategoryItem = ({ item, index }) => {

    const backgroundColor = listColors[index % 3]

    return (
        <View
            style={[tw`w-[170px] mx-[10px] h-[60px] items-center justify-center rounded-[12px]`, { backgroundColor: backgroundColor }]}
        >
            <Text style={tw`font-bold text-[16px] text-white`}>
                {item.name}
            </Text>
        </View>
    )
}

const Categories = () => {

    const { categories } = useSelector(state => state.initData)

    return (
        <View style={tw`mt-[10px]`}>
            <Text style={tw`flex-1 px-[20px] font-bold text-[16px] text-[#333]`}>
                Chào mừng bạn!
            </Text>
            <View style={tw`py-[10px]`}>
                <FlatList
                    horizontal
                    pagingEnabled
                    keyExtractor={(item) => item.name}
                    data={categories}
                    renderItem={({ item, index }) => <CategoryItem item={item} index={index} />}
                />
            </View>
        </View>
    )
}

const Loading = () => {

    return (
        <View >
            <Skeleton>
                <Skeleton.Item width={120} height={16} marginLeft={20} />
                <Skeleton.Item flexDirection="row" alignItems="center">
                    <Skeleton.Item
                        width={170}
                        height={60}
                        marginLeft={10}
                        marginRight={10}
                        marginTop={20}
                        borderRadius={12}
                    />
                    <Skeleton.Item
                        width={170}
                        height={60}
                        marginLeft={10}
                        marginRight={10}
                        marginTop={20}
                        borderRadius={12}
                    />
                </Skeleton.Item>
            </Skeleton>
        </View>
    )
}

export default { Categories, Loading }