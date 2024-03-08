import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Search from '../../components/Search'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import SuggestItem from '../../components/SuggestItem';

const SearchProduct = ({ navigation }) => {

    const { suggestProduct, keywords } = useSelector(state => state.product)

    const handleBackToHome = () => {
        navigation.goBack()
    }

    return (
        <View style={tw``}>
            <View style={tw`flex-row items-center justify-center gap-[10px] p-[20px] shadow-sm`}>
                <TouchableOpacity onPress={handleBackToHome}>
                    <IconFontAwesome
                        name='angle-left'
                        size={26}
                        color="#333"
                    />
                </TouchableOpacity>
                <Search.Search isSearch={true} />
            </View>
            <View style={tw`px-[20px]`}>
                {
                    keywords
                        ?
                        <View>
                            <View style={tw`flex-row items-center`}>
                                <Text style={tw`text-[16px] font-bold flex-1 text-[#333]`}>Gợi ý</Text>

                            </View>
                            {
                                suggestProduct.length > 0
                                    ?
                                    <FlatList
                                        data={suggestProduct}
                                        renderItem={({ item }) => (
                                            <SuggestItem product={item} />
                                        )}
                                        keyExtractor={item => item._id}
                                    />
                                    :
                                    <Text style={tw`mt-[10px]`}>Không tìm thấy kết quả phù hợp</Text>
                            }
                        </View>
                        :
                        <View>
                            <View style={tw`flex-row items-center`}>
                                <Text style={tw`text-[16px] font-bold flex-1 text-[#333]`}>Tìm kiếm gần đây</Text>
                                <IconFontAwesome
                                    name="trash"
                                    size={20}
                                    color="#999"
                                />
                            </View>
                            <View style={tw`py-[14px] border-b border-[#C8C2C2]`}>
                                <Text style={tw`text-[#333]`}>
                                    iphone 11 promax cũ
                                </Text>
                            </View>
                            <View style={tw`py-[14px] border-b border-[#C8C2C2]`}>
                                <Text style={tw`text-[#333]`}>
                                    iphone 11 promax cũ
                                </Text>
                            </View>
                            <View style={tw`py-[14px] border-b border-[#C8C2C2]`}>
                                <Text style={tw`text-[#333]`}>
                                    iphone 11 promax cũ
                                </Text>
                            </View>
                            <View style={tw`py-[14px] border-b border-[#C8C2C2]`}>
                                <Text style={tw`text-[#333]`}>
                                    iphone 11 promax cũ
                                </Text>
                            </View>
                            <View style={tw`flex-row items-center mt-[20px]`}>
                                <Text style={tw`text-[16px] font-bold flex-1 text-[#333]`}>Đề xuất cho bạn</Text>
                                <View style={tw`flex-row gap-[10px]`}>
                                    <Text>Thay đổi</Text>
                                    <IconFontAwesome
                                        name="retweet"
                                        size={20}
                                        color="#999"
                                    />
                                </View>
                            </View>
                            <View style={tw`py-[14px] border-b border-[#C8C2C2]`}>
                                <Text style={tw`text-[#333]`}>
                                    iphone 11 promax cũ
                                </Text>
                            </View>
                            <View style={tw`py-[14px] border-b border-[#C8C2C2]`}>
                                <Text style={tw`text-[#333]`}>
                                    iphone 11 promax cũ
                                </Text>
                            </View>
                            <View style={tw`py-[14px] border-b border-[#C8C2C2]`}>
                                <Text style={tw`text-[#333]`}>
                                    iphone 11 promax cũ
                                </Text>
                            </View>
                            <View style={tw`py-[14px] border-b border-[#C8C2C2]`}>
                                <Text style={tw`text-[#333]`}>
                                    iphone 11 promax cũ
                                </Text>
                            </View>
                        </View>
                }
            </View>
        </View>
    )
}

export default SearchProduct