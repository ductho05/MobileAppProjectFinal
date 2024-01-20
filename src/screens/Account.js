import React from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'twrnc'
import { getUser, logout } from '../stores/userSlice'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import { API_URL } from '../constant'

function Account({ navigation }) {

    const { user, isLoggedIn, token } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleToLogin = () => {
        navigation.navigate('Login')
    }

    const handleLogout = () => {

        dispatch(logout())
        Toast.show({
            type: 'success',
            text1: "Đăng xuất thành công!"
        })
    }

    React.useEffect(() => {

        if (isLoggedIn) {
            axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "GET",
                url: `${API_URL}/user/owner`
            }).then(response => {

                dispatch(getUser(response.data))
            })
        }

    }, [isLoggedIn])

    return (
        <>
            {
                isLoggedIn
                    ?
                    <View style={tw`p-[20px] mt-[20%] p-[20px]`}>
                        <View style={tw`flex-row items-center`}>
                            <Text style={tw`text-[24px]`}>Xin chào</Text>
                            <Text style={tw`text-[24px] font-bold p-[8px]`}>
                                {`${user.firstname} ${user.lastname}`}
                            </Text>
                        </View>
                        <Text style={tw`font-bold`}>Email: {`${user.email}`}</Text>
                        <Text
                            style={tw`py-[10px] rounded-[100px] text-center mt-[20px] justify-center px-[20px] mx-[80px] bg-[#FA7B05] text-white font-bold`}
                            onPress={handleLogout}
                        >
                            Logout
                        </Text>
                    </View>
                    :
                    <View style={tw`flex-1 justify-center p-[20px]`}>
                        <Text style={tw`text-center`}>Vui lòng đăng nhập để xem thông tin tài khoản</Text>
                        <Text
                            style={tw`py-[10px] rounded-[100px] text-center mt-[20px] justify-center px-[20px] mx-[80px] bg-[#FA7B05] text-white font-bold`}
                            onPress={handleToLogin}
                        >
                            Đăng nhập
                        </Text>
                    </View>
            }
        </>

    )
}

export default Account