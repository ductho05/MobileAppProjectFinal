import React from 'react'
import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import Categories from '../components/Categories';
import ProductFrame from '../components/ProductFrame';
import Search from '../components/Search';

function Home({ navigation }) {

    const { loading, newProducts, mostProducts } = useSelector(state => state.initData)

    return (
        <FlatList
            data={[1]}
            keyExtractor={(item) => item}
            renderItem={() => (
                <>
                    {
                        loading && <HomeLoading />
                    }
                    {
                        !loading &&
                        <View>
                            <View style={tw`p-[20px]`}>
                                <Search.Search isSearch={false} navigation={navigation} />
                            </View>

                            <Categories.Categories />

                            <ProductFrame.ProductFrame
                                isSlide={true}
                                title="Sản phẩm mới"
                                description="Sản phẩm được nhập về mới nhất tại cửa hàng"
                                productList={newProducts}
                            />

                            <ProductFrame.ProductFrame
                                isSlide={false}
                                title="Sản phẩm được khách hàng quan tâm nhất"
                                productList={mostProducts}
                            />
                        </View>
                    }
                </>
            )}
        />
    )
}

const HomeLoading = () => {

    return (
        <View>
            <View style={tw`p-[20px]`}>
                <Search.Loading />
            </View>

            <Categories.Loading />

            <ProductFrame.Loading />
        </View>
    )
}

export default Home