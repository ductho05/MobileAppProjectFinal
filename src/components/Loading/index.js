import { StyleSheet, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function Loading() {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView
                source={require('../../assets/jsons/loading.json')}
                autoPlay={true}
                loop
                style={{ flexGrow: 1, width: '100%' }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1
    }
})