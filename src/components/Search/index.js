import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { searchApi } from '../../apis/productApi';
import useDebounce from '../../hook/useDebounce';
import { useDispatch } from 'react-redux';
import { getSuggest } from '../../stores/productSlice';
import Skeleton from "@thevsstech/react-native-skeleton"

const Search = ({ isSearch, navigation }) => {

    const dispatch = useDispatch()
    const [keywords, setKeywords] = React.useState()

    const debounceKeywords = useDebounce(keywords, 500)

    const handleToSearch = () => {
        navigation.navigate('search')
    }

    const getSearchProduct = async (keywords) => {

        const response = await searchApi({ keyword: keywords })

        if (response.status === 200) {
            dispatch(getSuggest({
                data: response.data.list,
                keywords: keywords
            }))
        }
    }

    React.useEffect(() => {

        if (keywords) {
            getSearchProduct(debounceKeywords)
        } else {
            dispatch(getSuggest({
                data: [],
                keywords: undefined
            }))
        }

    }, [debounceKeywords])

    return (
        <View style={[styles.search, styles.border, tw`flex-row items-center pl-[20px] pr-[4px] py-[4px] border ${!isSearch ? "border-[#000]" : ""} rounded-[100px]`]}>
            {
                isSearch
                    ?
                    <TextInput
                        placeholder='Nhập để tìm kiếm...'
                        style={tw`text-[#333] flex-1 py-[0]`}
                        autoFocus={true}
                        value={keywords}
                        onChangeText={setKeywords}
                    />
                    :
                    <Text onPress={handleToSearch} style={tw`flex-1 text-[#666]`}>
                        Nhập để tìm kiếm...
                    </Text>
            }
            <TouchableOpacity>
                <View style={tw`bg-[#000] items-center justify-center w-[56px] h-[36px] rounded-[100px]`}>
                    <IconFontAwesome
                        name='search'
                        size={20}
                        color="#fff"
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: 'rgba(217, 217, 217, 0.5)'
    },

    border: {
        borderColor: 'rgba(217, 217, 217, 0.5)'
    }
})

export const Loading = () => {

    return (
        <View style={tw`items-center`}>
            <Skeleton>
                <Skeleton.Item width={320} height={40} borderRadius={100} />
            </Skeleton>
        </View>
    )
}

export default { Search, Loading }