import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { getProductByIdApi } from '../../apis/productApi'
import Thumnail from '../../components/Thumnail'
import tw from 'twrnc'
import { getCommentByProductApi } from '../../apis/commentApi'
import { Rating } from 'react-native-ratings'
import { BORDER_COLOR, BORDER_COLOR2, PRIMARY_COLOR } from '../../styles/colors.global'
import numeral from 'numeral'
import VariantSelect from '../../components/VariantSelect'
import AddToCartBar from '../../components/AddToCartBar'
import ProductInfo from '../../components/ProductInfo'
import CommentInfo from '../../components/CommentInfo'

const ProductDetail = ({ route, navigation }) => {

    const { id } = route.params
    const [loading, setLoading] = React.useState(true)
    const [product, setProduct] = React.useState()
    const [comments, setComments] = React.useState([])
    const [statisticComments, setStatisticComments] = React.useState()
    const [variantId, setVariantId] = React.useState(0)
    const [openTab, setOpenTab] = React.useState(false)

    const fetchProduct = async () => {

        const response = await getProductByIdApi(id)
        setLoading(false)

        if (response.status === 200) {

            setProduct(response.data)
        }

    }

    const fetchComment = async () => {

        const response = await getCommentByProductApi(id)

        if (response.status === 200) {

            setComments(response.data.data)
        }
    }

    React.useEffect(() => {

        fetchProduct()
        fetchComment()
    }, [])

    React.useEffect(() => {

        if (product) {
            const findIndex = product?.variants?.findIndex(variant => variant?.quantity > 0)

            setVariantId(findIndex)
        }
    }, [product])

    React.useEffect(() => {

        const data = []

        const loop = [1, 2, 3, 4, 5]

        loop.forEach(item => {

            const star = comments?.reduce((prev, comment) => {
                if (Math.floor(comment?.star) === item) {

                    return prev + 1
                } else return prev + 0
            }, 0)

            data.push(star)
        })

        setStatisticComments({
            total: comments.length,
            rate: data
        })

    }, [comments])

    return (
        <>
            {
                loading
                    ?
                    <Loading />
                    :
                    <View style={[tw`h-full w-full`, styles.container]}>
                        <FlatList
                            data={[1]}
                            keyExtractor={(item) => item}
                            renderItem={() => (
                                <>
                                    <Thumnail product={product} />
                                    <View style={tw`bg-white px-[20px]`}>
                                        <Text style={tw`font-bold text-[#333] text-justify`}>
                                            {product?.name}
                                        </Text>
                                        <View style={tw`flex-row items-center gap-[10px] py-[6px]`}>
                                            <Text style={tw`text-[#333]`}>{product?.rates}</Text>
                                            <Rating readonly={true} startingValue={product?.rates} imageSize={13} />
                                            <Text>({comments?.length} đánh giá)</Text>
                                            <Text style={tw`text-[#333] border-l border-[${BORDER_COLOR}] px-[10px]`}>{product?.views} lượt xem</Text>
                                        </View>
                                        <View style={tw`flex-row items-center pb-[10px]`}>
                                            <Text style={[tw`font-bold text-[16px]`, { color: PRIMARY_COLOR }]}>
                                                {numeral(product?.minPrice).format('0,0')} đ
                                            </Text>
                                            <Text style={[tw`font-bold text-[16px] mx-[6px]`, { color: PRIMARY_COLOR }]}> - </Text>
                                            <Text style={[tw`font-bold text-[16px]`, { color: PRIMARY_COLOR }]}>
                                                {numeral(product?.maxPrice).format('0,0')} đ
                                            </Text>
                                        </View>
                                        <View style={tw`flex-row items-center border border-[${BORDER_COLOR2}] rounded-[6px] mt-[10px] mb-[20px]`}>
                                            <View style={tw`flex-1 flex-row items-center pl-[2px]`}>
                                                <Image
                                                    source={{ uri: `https:${product?.variants[variantId]?.thumbnail}` }}
                                                    style={[tw`w-[60px] h-[50px]`, { objectFit: 'contain' }]}
                                                />
                                                <View style={tw`ml-[6px]`}>
                                                    <Text>Màu</Text>
                                                    <Text style={tw`text-[#333]`}>{product?.variants[variantId]?.variantName}</Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity onPress={() => setOpenTab(true)} style={tw`pr-[20px]`}>
                                                <Text style={tw`font-bold text-[#1D24CA]`}>Thay đổi</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <ProductInfo product={product} />
                                    <View style={tw`bg-white mt-[10px]`}>
                                        <Text style={tw`px-[20px] py-[10px] font-bold uppercase text-[#333]`}>Đánh giá của khách hàng</Text>
                                        <CommentInfo stattisticRate={statisticComments} rate={product?.rates} comments={comments} />
                                    </View>
                                </>
                            )}
                        />
                        {
                            openTab &&
                            <VariantSelect
                                product={product}
                                setVariantId={setVariantId}
                                variantId={variantId}
                                onClose={() => setOpenTab(false)}
                            />
                        }
                        {
                            !openTab && <AddToCartBar />
                        }
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '100%',
    }
})

export const Loading = () => {

    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
}

export default ProductDetail