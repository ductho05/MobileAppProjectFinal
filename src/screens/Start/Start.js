import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import tw from 'twrnc'
import StartItem from '../../components/StartItem'
import { DATA_START } from './data'
import { PRIMARY_COLOR } from '../../styles/colors.global'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native'

function Start({ navigation }) {

    const handleStart = () => {
        navigation.navigate("TabBottom")
    }

    return (
        <LinearGradient
            colors={['#364F6B', '#6B5072', '#FC5185']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`h-full w-full`}
        >
            <View style={tw`p-[40px] mr-[150px]`}>
                <Text style={tw`text-[16px] text-white leading-[1.5] text-center`}>social network</Text>
                <Text style={tw`text-[16px] text-white leading-[1.5] text-center`}>for people</Text>
                <Text style={tw`text-[16px] text-white leading-[1.5] text-center`}>who want to find</Text>
                <Text style={tw`text-[16px] text-white leading-[1.5] text-center`}>soulmates</Text>
            </View>
            <View style={tw`px-[40px]`}>
                <Text style={tw`text-[16px] text-white text-right`}>music</Text>
                <Text style={tw`text-[40px] text-white text-right`}>KAPUHA</Text>
            </View>
            <FlatList
                horizontal
                data={DATA_START}
                style={tw`mt-[20px] mx-[5px]`}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <StartItem data={item} />
                )}
            />
            <TouchableOpacity
                onPress={handleStart}
                style={tw.style(`flex flex-row mb-[50px] shadow-xl ml-[50%] justify-center items-center w-[160px] h-[35px] bg-[${PRIMARY_COLOR}] rounded-[100px]`)}
            >
                <Text style={tw`text-[14px] text-white mr-[20px]`}>start</Text>
                <IconFontAwesome
                    name='arrow-right'
                    size={14}
                    color='#fff'
                />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Start