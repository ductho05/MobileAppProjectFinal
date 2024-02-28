import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Loading from '../../components/Loading'
import LinearGradient from 'react-native-linear-gradient'
import tw from 'twrnc'
import { PRIMARY_COLOR } from '../../styles/colors.global'
import OTPTextInput from 'react-native-otp-textinput'
import { activeUserApi, sendOTPApi } from '../../apis/usersApi'
import Toast from 'react-native-toast-message'

const AuthenticateOTP = ({ route, navigation }) => {

    const { email, verifyOTP, forgotPassword } = route?.params
    const [loading, setLoading] = React.useState(false)
    const [otp, setOTP] = React.useState()
    const [verify, setVerify] = React.useState(verifyOTP)
    const [timer, setTimer] = React.useState(59)

    React.useEffect(() => {

        setTimeout(() => {

            if (timer > 0) {

                setTimer(prev => prev - 1)
            }
        }, 1000)

        return () => clearTimeout()
    }, [timer])

    const handleChangeText = (text) => {

        setOTP(text)
    }

    const handleResendOTP = async () => {

        setLoading(true)
        const response = await sendOTPApi(email)
        setLoading(false)
        if (response.status === 200) {

            setVerify(response.data.otp)
            Toast.show({
                type: 'success',
                text1: `Đã gửi mã OTP đến email ${email}`
            })
            setTimer(59)
        }
    }

    const handleAuthenticate = async () => {

        setLoading(true)
        if (otp || otp !== '') {

            if (otp == verify) {

                if (forgotPassword) {
                    setLoading(false)
                    navigation.navigate('ForgotPassword', {
                        email: email
                    })
                } else {

                    const response = await activeUserApi(email)

                    setLoading(false)
                    if (response.status === 200) {
                        Toast.show({
                            type: 'success',
                            text1: 'Xác thực tài khoản thành công!'
                        })

                        navigation.navigate('Login')
                    } else {
                        Toast.show({
                            type: 'error',
                            text1: `Lỗi: ${response.message}`
                        })
                    }
                }
            } else {
                setLoading(false)
                Toast.show({
                    type: 'error',
                    text1: 'Mã OTP không đúng'
                })
            }
        } else {
            setLoading(false)
            Toast.show({
                type: 'error',
                text1: 'Vui lòng nhập mã OTP'
            })
        }
    }

    return (
        <>
            {

                loading && <Loading />
            }
            <View style={tw`flex-1 `}>
                <Image
                    style={[styles.image, tw`w-full`]}
                    source={require('../../assets/images/Login.jpg')}
                />
                <ScrollView style={[StyleSheet.absoluteFill, styles.box, tw`w-full flex-1 bg-white top-[34%] rounded-t-[24px]`]}>
                    <View style={tw`w-full my-[10px] flex items-center`}>
                        <Text style={[styles.title, tw`text-[2rem]`]}>Xác thực OTP</Text>
                    </View>
                    <View style={tw`w-full my-[10px] items-center`}>
                        <Text style={tw`text-[14px] text-[#333]`}>
                            Chúng tôi đã gửi mã xác thực OTP đến email {email}. Vui lòng nhập để xác thực
                        </Text>
                    </View>
                    <View style={tw`w-full h-[100px] my-[30px] items-center`}>
                        <OTPTextInput
                            autoFocus={true}
                            tintColor={PRIMARY_COLOR}
                            handleTextChange={handleChangeText}
                        />
                    </View>
                    <View style={tw`items-center flex-row justify-end`}>
                        <Text style={tw`mr-[10px] text-[${PRIMARY_COLOR}]`}>
                            {Math.floor(timer / 60)}:{timer % 60 <= 9 ? `0${timer % 60}` : timer % 60}
                        </Text>
                        <TouchableOpacity onPress={handleResendOTP} disabled={timer > 0}>
                            <Text style={tw`text-[14px] text-right mr-[40px] font-bold ${timer > 0 ? "text-[#999]" : "text-[#333]"}`}>
                                Gửi lại
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`px-[20px]`}>
                        <View style={tw`w-full my-[10px]`}>

                            <TouchableOpacity onPress={handleAuthenticate} style={tw`mt-[20px] mx-[30px]`}>
                                <LinearGradient
                                    colors={['#FA7B05', '#FA7B05', '#FA7B05', '#FA4005']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    locations={[0, 0.5, 0.7523, 1]}
                                    style={tw`w-full items-center rounded-[100px] px-[40px] py-[14px]`}

                                >
                                    <Text
                                        style={tw`text-[#fff]`}
                                    >
                                        Xác nhận
                                    </Text>
                                </LinearGradient >
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '43.1%',
        objectFit: 'cover'
    },
    title: {
        fontFamily: 'InknutAntiqua-Bold',
        color: PRIMARY_COLOR
    }
})

export default AuthenticateOTP