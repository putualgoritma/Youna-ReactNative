/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import  from './src/components/Icon';
import { SliderBox } from "react-native-image-slider-box";
import { ArtikelS, EdukasiS, PromoS, SliderS, User1 } from '../../components/sementara';
import Footer from '../../../footer';
import { Artikel, Dokter, Klinik_Terdekat, Membership, Payment, Pricelist, Promo, Reservasi, Star, Tur_Klinik, Video_Education, Visit_History, Voucher_Saya } from '../../components/Icon';

interface Products
{
  title: string;
  price_before: string;
  price_promo: string;
}



type PromoProps = PropsWithChildren<{
  title : string;
  image: any;
  card_title: string;
  price_before: string;
  price_promo: string;
  products :Products[];
  key : number;
}>;


function CardMakerMenu({image, price_before, price_promo, card_title, key}:PromoProps):JSX.Element{
  return(
    <View key= {key} style={styles.card}>
  <View style={styles.card_image}></View>
  <Text style={styles.card_title}>{card_title}</Text>
<Text style={styles.price_before}>{price_before}</Text>
<Text style={styles.price}>{price_promo}</Text>
<TouchableOpacity style={styles.button}><Text style ={styles.button_text}>COBA SEKARANG</Text></TouchableOpacity>
</View>
  )

}

function PromoMenu({title, products, key}:PromoProps): JSX.Element {
  return(
<View key = {key}><Text style = {styles.title}>Nama Promo Program 1</Text>
<ScrollView horizontal={true} style ={styles.card_group}>

{products.map((data, index)=>{
return <CardMakerMenu key={index} image="" title={data.title} price_before={data.price_before} price_promo={data.price_promo} card_title={data.title} />

})}

</ScrollView>

</View>
  )
  }

interface apps {
  navigation: any;
  focus: string;
}

function App({navigation}:apps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const promo =[
    {title : "Promo 1", 
    products : [
      {title : "Judul 1", price_before : "Rp.100.000", price_promo : "Rp.80.000"},
      {title : "Judul 2", price_before : "Rp.200.000", price_promo : "Rp.90.000"},
      {title : "Judul 1", price_before : "Rp.100.000", price_promo : "Rp.80.000"},
      {title : "Judul 2", price_before : "Rp.200.000", price_promo : "Rp.90.000"},
    ]
  },
  {title : "Promo 2", 
  products : [
    {title : "Judul 1", price_before : "Rp.100.000", price_promo : "Rp.80.000"},
    {title : "Judul 2", price_before : "Rp.200.000", price_promo : "Rp.90.000"},
    {title : "Judul 1", price_before : "Rp.100.000", price_promo : "Rp.80.000"},
    {title : "Judul 2", price_before : "Rp.200.000", price_promo : "Rp.90.000"},
  ]
}
  ]


  return (
    <SafeAreaView style={[backgroundStyle,styles.layout_format]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

 

{/* <Image source={EdukasiS} style={styles.promotion}>

</Image> */}
<View style={styles.promotion}></View>

{promo.map((data, index)=>{
  return <PromoMenu key = {index} title={data.title} products={data.products} />

})}





        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
        
        </View>
      </ScrollView>
      <Footer focus="Home" navigation={navigation} />
    </SafeAreaView>
  );
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({

  layout_format : {
flex : 1,

  },
  promotion :{
    marginTop : height*0.08,
    marginHorizontal : width*0.04,
    width : width*0.92,
    height : height*0.25,
    backgroundColor : 'grey',
    
  },

  card : {
    width : width*0.4,
    // height : height*0.22,
    // backgroundColor : 'red',
    // elevation: 4,
    borderRadius : width*0.02,
    borderColor : '#00000030',
    borderWidth : width*0.001,
    // marginLeft : 'auto',
    // marginRight : 'auto',
    marginHorizontal : width*0.05,
    marginVertical : height*0.02,

  },
card_image : {
  width : width*0.4,
  height : height*0.12,
  borderRadius : width*0.02,
  backgroundColor :  '#E37AB1',

  // elevation: 4,
  // elevation: 4,
},
card_group : {
  flexDirection : 'row'
},
title : {
  marginHorizontal : width*0.04,
  marginTop : height*0.02,
  fontWeight : '700'
},
price_before : {
  marginHorizontal : width*0.04,
  textDecorationLine: 'line-through',
  textDecorationStyle: 'solid',
  fontSize : 12,
},
card_title : {
  marginHorizontal : width*0.04,
},
price : {
  marginHorizontal : width*0.04,
  fontSize : 14,
},
button : {
  backgroundColor : '#E37AB1',
  paddingVertical : width*0.01,
  marginVertical : height*0.008,
  width :width*0.30,
  marginLeft : 'auto',
  marginRight : 'auto',
  alignItems : 'center',
  borderRadius : width*0.01,
},
button_text : {
  color : '#FFFFFF',
  fontWeight : 'bold',
  fontSize : 11
}

});

export default App;
