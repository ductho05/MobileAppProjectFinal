import React from 'react'
import { Button, ImageBackground, Text, TextInput, View, ActivityIndicator, StyleSheet, ScrollView, SafeAreaView, Alert, SafeAreaViewBase, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import CheckBox from 'react-native-check-box'
import { useForm, Controller } from "react-hook-form"
import axios from 'axios'
import Toast from 'react-native-toast-message'
import { API_URL } from '../../constant'
import { useDispatch } from 'react-redux'
import { login } from '../../stores/userSlice'
import Loading from '../../components/Loading'
import { PRIMARY_COLOR } from '../../styles/colors.global'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

function Register({ navigation }) {

    const [isShowPassword, setIsShowPassword] = React.useState(false)
    const [isShowTypePassword, setIsShowTypePassword] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleToLogin = () => {
        navigation.navigate('Login')
    }

    const handleTogglePassword = () => {
        setIsShowPassword(prev => !prev)
    }

    const handleToggleTypePassword = () => {
        setIsShowTypePassword(prev => !prev)
    }

    const handleToForgotPassword = () => {
        navigation.navigate('ForgotPassword')
    }

    const handleRegister = (data) => {

        console.log("data: ", data)
        setLoading(true)
        axios.post(`${API_URL}/auth/register`, {
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            retypePassword: data.retypePassword,
        })
            .then(response => {

                setLoading(false)
                if (response.data.status) {

                    Toast.show({
                        type: 'error',
                        text1: `Lỗi, ${response.data.message}`
                    })
                } else {
                    dispatch(login(response.data.token))

                    Toast.show({
                        type: 'success',
                        text1: 'Đăng nhập tài khoản thành công!'
                    })
                    setTimeout(() => {
                        navigation.navigate('TabBottom')
                    }, 500)
                }
            })
            .catch(err => {
                setLoading(false)
                Toast.show({
                    type: 'error',
                    text1: `Lỗi, ${err}`
                })
            })

    }

    const password = watch('password');
    const retypePassword = watch('retypePassword');
    const passwordsMatch = password === retypePassword;

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
                <ScrollView style={[StyleSheet.absoluteFill, styles.box, tw`w-full flex-1 bg-white top-[19%] rounded-t-[24px]`]}>
                    <View style={tw`w-full my-[5px] flex items-center`}>
                        <Text style={[styles.title, tw`text-[2rem]`]}>Đăng ký</Text>
                    </View>
                    <View style={tw`px-[20px]`}>
                        <View style={tw`w-full mb-[10px]`}>
                            <Controller
                                name='email'
                                control={control}
                                rules={{
                                    required: true,
                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={tw`flex-row items-center border ${errors.password ? "border-red-500" : "border-[#999]"} rounded-[6px] text-[#333] w-full px-[10px]`}>
                                        <IconFontAwesome
                                            name="envelope"
                                            size={16}
                                            color={`${PRIMARY_COLOR}`}
                                        />
                                        <TextInput
                                            spellCheck={false}
                                            placeholder='Địa chỉ email'
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                            style={tw`ml-[10px]`}
                                            placeholderTextColor="#999"
                                        />
                                    </View>

                                )}
                            />
                            {
                                errors.email &&
                                <Text style={tw`mt-[10px] text-red-500`}>
                                    Vui lòng nhập đúng định dạng email
                                </Text>
                            }

                        </View>

                        <View style={tw`w-full mb-[10px]`}>
                            <Controller
                                name='firstName'
                                control={control}
                                rules={{
                                    required: true,

                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={tw`flex-row items-center border ${errors.password ? "border-red-500" : "border-[#999]"} rounded-[6px] text-[#333] w-full px-[10px]`}>
                                        <IconFontAwesome
                                            name="user"
                                            size={16}
                                            color={`${PRIMARY_COLOR}`}
                                        />
                                        <TextInput
                                            spellCheck={false}
                                            placeholder='Họ'
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                            style={tw`ml-[10px]`}
                                            placeholderTextColor="#999"
                                        />
                                    </View>

                                )}
                            />
                            {
                                errors.firstName &&
                                <Text style={tw`mt-[10px] text-red-500`}>
                                    Vui lòng nhập họ
                                </Text>
                            }

                        </View>

                        <View style={tw`w-full mb-[10px]`}>
                            <Controller
                                name='lastName'
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={tw`flex-row items-center border ${errors.password ? "border-red-500" : "border-[#999]"} rounded-[6px] text-[#333] w-full px-[10px]`}>
                                        <IconFontAwesome
                                            name="user"
                                            size={16}
                                            color={`${PRIMARY_COLOR}`}
                                        />
                                        <TextInput
                                            spellCheck={false}
                                            placeholder='Tên'
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                            style={tw`ml-[10px]`}
                                            placeholderTextColor="#999"
                                        />
                                    </View>

                                )}
                            />
                            {
                                errors.lastName &&
                                <Text style={tw`mt-[10px] text-red-500`}>
                                    Vui lòng tên
                                </Text>
                            }

                        </View>

                        <View style={tw`w-full mb-[10px]`}>
                            <Controller
                                name='password'
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={tw`flex-row items-center border ${errors.password ? "border-red-500" : "border-[#999]"} rounded-[6px] text-[#333] w-full px-[10px]`}>
                                        <IconFontAwesome
                                            name="lock"
                                            size={22}
                                            color={`${PRIMARY_COLOR}`}
                                        />
                                        <TextInput
                                            spellCheck={false}
                                            onBlur={onBlur}
                                            placeholder='Nhập lại mật khẩu'
                                            onChangeText={(value) => {
                                                 onChange(value);
                                            }}
                                            value={value}
                                            style={tw`ml-[10px] flex-1`}
                                            placeholderTextColor="#999"
                                            secureTextEntry={!isShowPassword}
                                        />
                                        {
                                            password
                                            ?
                                            <View>
                                                {
                                                    isShowPassword
                                                        ?
                                                        <TouchableOpacity onPress={handleTogglePassword}>
                                                            <IconFontAwesome
                                                                name={isShowPassword ? "eye" : "eye-slash"}
                                                                size={18}
                                                                color={`${PRIMARY_COLOR}`}
                                                            />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={handleTogglePassword}>
                                                            <IconFontAwesome
                                                                name="eye-slash"
                                                                size={18}
                                                                color={`${PRIMARY_COLOR}`}
                                                            />
                                                        </TouchableOpacity>
                                                }
                                            </View>
                                            : <View></View>
                                        }
                                    </View>

                                )}
                            />
                            {
                                errors.password &&
                                <Text style={tw`mt-[10px] text-red-500`}>
                                    Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như ! và &)
                                </Text>
                            }

                        </View>

                        <View style={tw`w-full my-[10px]`}>
                            <Controller
                                name='retypePassword'
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={tw`flex-row items-center border ${errors.password ? "border-red-500" : "border-[#999]"} rounded-[6px] text-[#333] w-full px-[10px]`}>
                                        <IconFontAwesome
                                            name="lock"
                                            size={22}
                                            color={`${PRIMARY_COLOR}`}
                                        />
                                        <TextInput
                                            spellCheck={false}
                                            onBlur={onBlur}
                                            placeholder='Nhập lại mật khẩu'
                                            onChangeText={(value) => {
                                                onChange(value);
                                            }}
                                            value={value}
                                            style={tw`ml-[10px] flex-1`}
                                            placeholderTextColor="#999"
                                            secureTextEntry={!isShowTypePassword}
                                        />
                                        {
                                            retypePassword
                                                ?
                                                <View>
                                                    {
                                                        isShowTypePassword
                                                            ?
                                                            <TouchableOpacity onPress={handleToggleTypePassword}>
                                                                <IconFontAwesome
                                                                    name="eye"
                                                                    size={18}
                                                                    color={`${PRIMARY_COLOR}`}
                                                                />
                                                            </TouchableOpacity>
                                                            :
                                                            <TouchableOpacity onPress={handleToggleTypePassword}>
                                                                <IconFontAwesome
                                                                    name="eye-slash"
                                                                    size={18}
                                                                    color={`${PRIMARY_COLOR}`}
                                                                />
                                                            </TouchableOpacity>
                                                    }
                                                </View>
                                                : <View></View>

                                        }
                                    </View>
                                )}
                            />

                            {!passwordsMatch && <Text style={tw`mt-[10px] text-red-500`}>Mật khẩu không khớp</Text>}
                            {
                                errors.retypePassword &&
                                <Text style={tw`mt-[10px] text-red-500`}>
                                    Vui lòng nhập lại mật khẩu
                                </Text>
                            }
                            {/* <View style={tw`mt-[16px] items-end`}>
                                <Text onPress={handleToForgotPassword} style={tw`font-bold`}>Quên mật khẩu</Text>
                            </View> */}
                            <TouchableOpacity onPress={handleSubmit(handleRegister)} style={tw`mt-[20px] mx-[30px]`}>
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
                                        Đăng ký
                                    </Text>
                                </LinearGradient >
                            </TouchableOpacity>
                            <View style={tw`mt-[10px] items-center`}>
                                <Text style={tw`font-bold`}>Hoặc</Text>
                            </View>
                            <TouchableOpacity style={tw`mt-[10px] mx-[30px]`}>
                                <View
                                    style={tw`flex-row w-full items-center border border-[#666] rounded-[100px] px-[20px] py-[8px]`}

                                >
                                    <Image
                                        source={require('../../assets/images/google.png')}
                                        style={tw`w-[30px] h-[30px]`}
                                    />
                                    <Text
                                        style={tw`text-[#333] ml-[20px]`}
                                    >
                                        Đăng nhập bằng google
                                    </Text>
                                </View >
                            </TouchableOpacity>
                            <View style={tw`mt-[10px] pb-[10px] flex-row justify-center items-center`}>
                                <Text style={tw`text-[#333]`}>Đã có tài khoản? </Text>
                                <Text onPress={handleToLogin} style={[tw`font-bold`, { color: `${PRIMARY_COLOR}` }]}>Đăng nhập</Text>
                            </View>
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

export default Register