import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import IconFont from 'react-native-vector-icons/FontAwesome5'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
import { PRIMARY_COLOR } from '../../styles/colors.global'

const Thumnail = ({ product }) => {

    const navigation = useNavigation()

    const handleGoBack = () => {

        navigation.goBack()
    }

    const handleToHome = () => {

        navigation.navigate('TabBottom')
    }

    return (
        <View style={tw`w-full relative h-[400px] bg-white`}>
            <View style={tw`absolute z-100 top-0 left-0 right-0 bg-transparent p-[20px] flex-row items-center justify-between`}>
                <View style={tw``}>
                    <ButtonCustom icon="arrow-left" onClick={handleGoBack} />
                </View>
                <View style={tw`flex-row gap-[20px]`}>
                    <ButtonCustom icon="home" onClick={handleToHome} />
                    <ButtonCustom icon="cart-plus" />
                </View>
            </View>
            {
                product &&
                <Swiper activeDotColor={PRIMARY_COLOR} height={400}>
                    {
                        product?.hightLightPics?.map(image => (

                            <Image
                                key={image}
                                source={{ uri: `https:${image}` }}
                                style={[tw`w-[100%] h-[100%]`, { objectFit: 'contain' }]}
                            />
                        ))
                    }
                </Swiper>
            }
        </View>
    )
}

export const ButtonCustom = ({ onClick, icon, text }) => {

    return (
        <TouchableOpacity style={[tw`w-[30px] h-[30px] items-center justify-center rounded-[20px]`, { backgroundColor: 'rgba(0,0,0, 0.6)' }]} onPress={onClick}>
            {
                icon &&
                <IconFont
                    name={icon}
                    size={16}
                    color="#fff"
                />
            }
            {
                text &&
                <Text style={tw`text-white`}>{text}</Text>
            }
        </TouchableOpacity>
    )
}

export default Thumnail