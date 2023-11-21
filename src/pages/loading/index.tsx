import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Loading = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject,styles.loading]}>
    <LottieView source={require("../../components/animated/animation_lojabacm.json")}
    style={{ height:200, width: 350, zIndex : 1,  justifyContent : 'center',
    alignItems : 'center', }}
    autoPlay loop />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({

    loading:{
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'rgba(0,0,0,0.3)',
        zIndex : 1
      }
})