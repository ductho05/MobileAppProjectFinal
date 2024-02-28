import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Dialog = ({ children }) => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1
    }
})

export default Dialog