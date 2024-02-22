import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc'
import { PRIMARY_COLOR } from '../styles/colors.global'

function Introduction() {
    return (
// <<<<<<< HEAD
//         <View style={tw`h-[200px] w-full p-[40px]`}>
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'row'
//             }}>
//                 <Text style={tw`flex text-[16px] text-[#000]`}>Họ tên: </Text>
//                 <Text style={tw`flex text-[14px] text-[#333]`}>Phung Thi Thuy Trang</Text>
//             </View>
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'row'
//             }}>
//                 <Text style={tw`flex text-[16px] text-[#000]`}>Mssv: </Text>
//                 <Text style={tw`flex text-[14px] text-[#333]`}>20110313</Text>
//             </View>
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'row'
//             }}>
//                 <Text style={tw`flex text-[16px] text-[#000]`}>Email: </Text>
//                 <Text style={tw`flex text-[14px] text-[#333]`}>
//                     20110313@student.hcmute.edu.vn
// =======
        <View style={tw`flex-1`}>
            <Image
                style={[tw`h-[49.45%] w-full`, { objectFit: 'contain' }]}
                source={require('../assets/images/intro.jpg')}
            />
            <View style={tw`mt-[20%]`}>
                <Text
                    style={[tw`text-[40px] text-center`, { fontFamily: 'InknutAntiqua-Bold', color: PRIMARY_COLOR }]}
                >
                    TTL SHOP
                </Text>
                <Text style={tw`text-[16px] text-center font-bold`}>
                    Thế giới công nghệ chất lượng cao nhất!
{/* >>>>>>> origin/develop */}
                </Text>
            </View>
        </View>
    )
}

export default Introduction