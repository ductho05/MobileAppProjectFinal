import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR } from '../../styles/colors.global'
import Loading from '../../components/Loading'
import { useDispatch } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import tw from 'twrnc'
import LinearGradient from 'react-native-linear-gradient'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { forgotPasswordApi } from '../../apis/usersApi'
import Toast from 'react-native-toast-message'

const FogotPassword = ({ route, navigation }) => {

    const { email } = route?.params
    const [isShowPassword, setIsShowPassword] = React.useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleTogglePassword = () => {
        setIsShowPassword(prev => !prev)
    }

    const handleToggleConfirmPassword = () => {
        setIsShowConfirmPassword(prev => !prev)
    }

    const handleBackToLogin = () => {
        navigation.goBack()
    }

    const onSubmit = async (data) => {

        setLoading(true)
        const response = await forgotPasswordApi({
            email,
            newPassword: data.password
        })
        setLoading(false)

        if (response.status === 200) {

            Toast.show({
                type: 'success',
                text1: 'Đổi mật khẩu thành công!'
            })
            navigation.navigate('Login')
        } else {
            Toast.show({
                type: 'error',
                text1: 'Có lỗi xảy ra. Vui lòng thử lại'
            })
        }

    }

    const password = watch('password');
    const retypePassword = watch('confirmPassword');
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
                <ScrollView style={[StyleSheet.absoluteFill, styles.box, tw`w-full flex-1 bg-white top-[34%] rounded-t-[24px]`]}>
                    <View style={tw`w-full my-[10px] flex items-center`}>
                        <Text style={[styles.title, tw`text-[2rem]`]}>Mật khẩu mới</Text>
                    </View>
                    <View style={tw`px-[20px]`}>
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
                                            placeholder='Nhập mật khẩu'
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
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
                                                                    name="eye"
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
                                    Vui lòng nhập mật khẩu
                                </Text>
                            }

                        </View>

                        <View style={tw`w-full my-[10px]`}>
                            <Controller
                                name='confirmPassword'
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={tw`flex-row items-center border ${errors.confirmPassword ? "border-red-500" : "border-[#999]"} rounded-[6px] text-[#333] w-full px-[10px]`}>
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
                                            secureTextEntry={!isShowConfirmPassword}
                                        />
                                        {
                                            watch('confirmPassword')
                                                ?
                                                <View>
                                                    {
                                                        isShowConfirmPassword
                                                            ?
                                                            <TouchableOpacity onPress={handleToggleConfirmPassword}>
                                                                <IconFontAwesome
                                                                    name="eye"
                                                                    size={18}
                                                                    color={`${PRIMARY_COLOR}`}
                                                                />
                                                            </TouchableOpacity>
                                                            :
                                                            <TouchableOpacity onPress={handleToggleConfirmPassword}>
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
                                errors.confirmPassword &&
                                <Text style={tw`mt-[10px] text-red-500`}>
                                    Vui lòng nhập lại mật khẩu
                                </Text>
                            }
                            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={tw`mt-[20px] mx-[30px]`}>
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
                                        Quên mật khẩu
                                    </Text>
                                </LinearGradient >
                            </TouchableOpacity>
                            <View style={tw`mt-[10px] items-center`}>
                                <Text style={tw`font-bold`}>Hoặc</Text>
                            </View>
                            <TouchableOpacity onPress={handleBackToLogin} style={tw`mt-[10px] mx-[30px]`}>
                                <View
                                    style={tw`flex-row w-full items-center border border-[#FA7B05] rounded-[100px] justify-center py-[10px]`}

                                >
                                    <Text
                                        style={tw`text-[#FA7B05] ml-[20px]`}
                                    >
                                        Quay lại đăng nhập
                                    </Text>
                                </View >
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

export default FogotPassword