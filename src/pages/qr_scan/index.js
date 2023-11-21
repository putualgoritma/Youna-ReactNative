'use strict';

import React, {Component, useState} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import API from '../service';
import {useSelector} from 'react-redux';
import Loading from '../loading';

// const useTOKEN = useSelector(state => state.TokenReducer);

function marker(color, size, borderLength, thickness, borderRadius) {
  return (
    <View style={{height: size, width: size}}>
      <View
        style={{
          position: 'absolute',
          height: borderLength,
          width: borderLength,
          top: 0,
          left: 0,
          borderColor: color,
          borderTopWidth: thickness,
          borderLeftWidth: thickness,
          borderTopLeftRadius: borderRadius,
        }}></View>
      <View
        style={{
          position: 'absolute',
          height: borderLength,
          width: borderLength,
          top: 0,
          right: 0,
          borderColor: color,
          borderTopWidth: thickness,
          borderRightWidth: thickness,
          borderTopRightRadius: borderRadius,
        }}></View>
      <View
        style={{
          position: 'absolute',
          height: borderLength,
          width: borderLength,
          bottom: 0,
          left: 0,
          borderColor: color,
          borderBottomWidth: thickness,
          borderLeftWidth: thickness,
          borderBottomLeftRadius: borderRadius,
        }}></View>
      <View
        style={{
          position: 'absolute',
          height: borderLength,
          width: borderLength,
          bottom: 0,
          right: 0,
          borderColor: color,
          borderBottomWidth: thickness,
          borderRightWidth: thickness,
          borderBottomRightRadius: borderRadius,
        }}></View>
    </View>
  );
}

export default function ScanScreen({navigation, route}) {
  const TOKEN = useSelector(state => state.TokenReducer);
  const qr_code_check = route.params.qr_code;
  const [loading, setLoading] = useState(false);
  const onSuccess = e => {
    console.log('ihihbj ', e, qr_code_check);
    // const token = this.getToken();
    setLoading(true);
    if (qr_code_check == e.data) {
      API.confirmReservation(e.data, TOKEN).then(result => {
        if (result.success) {
          alert(result.message);
          navigation.goBack();
        } else {
          alert(result.message);
          navigation.goBack();
        }
      });
    } else {
      Alert.alert(
        'Gagal',
        'pastikan memilih menscan sesuai dengan konsultasi yang dipilih',
      );
      navigation.goBack();
    }
  };

  // render() {
  return (
    <>
      {loading ? <Loading /> : null}
      <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        customMarker={marker('#E37AB1', '60%', '25%', 6, 20)}
        showMarker={true}
        topContent={
          <Text style={styles.centerText}>
            Buka Detail Reservasi untuk melihat{' '}
            <Text style={styles.textBold}>QR_code</Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            {/* <Text style={styles.buttonText}>OK. Got it!</Text> */}
          </TouchableOpacity>
        }
      />
    </>
  );
  // }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

// export default ScanScreen;
// AppRegistry.registerComponent('default', () => ScanScreen);
