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
  Alert,
  TextInput
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
import { Artikel, Clinic, Dokter, Klinik_Terdekat, Membership, Payment, Pricelist, Promo, Reservasi, Search, Star, Tur_Klinik, Video_Education, Visit_History, Voucher_Saya } from '../../components/Icon';

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
    <TouchableOpacity key= {key} style={styles.card}>
  <View style={[styles.card_image,{backgroundColor : '#E37AB1'}]}></View>
  <View style ={{ marginLeft : width*0.02 }}>
    <Text style={{ color : '#E37AB1', fontWeight : 'bold' }}>Nama Klinik</Text>
    <Text>Jenis Klinik</Text>
    <Text>Alamat Klinik</Text>
  </View>
  <Image source={Star} style={{ width : width*0.05, height : width*0.05, resizeMode : 'contain', marginLeft : 'auto'  } }></Image>
  <Text>4.9</Text>
  {/* <Text style={styles.card_title}>{card_title}</Text>
<Text style={styles.price_before}>{price_before}</Text>
<Text style={styles.price}>{price_promo}</Text> */}
</TouchableOpacity>
  )

}

function PromoMenu({title, products, key}:PromoProps): JSX.Element {
  return(
<View key = {key}>
<View style ={styles.card_group}>

{products.map((data, index)=>{
return <CardMakerMenu key={index} image="" title={data.title} price_before={data.price_before} price_promo={data.price_promo} card_title={data.title} />

})}

</View>

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
      
     
      <View  style = {styles.search}>
      <Image source={Clinic} style={{ width : width*0.06, height : width*0.06, marginVertical : height*0.02  ,marginHorizontal : height*0.01 }} />
  <TextInput
  style = {{ width : width*0.62 }}
placeholder='Cari Klinik'
/>
<TouchableOpacity style={{ marginTop : height*0.02 }}>
<Image source={Search} style={{ width : width*0.05, height : width*0.05 }}/>
</TouchableOpacity>
</View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

 
<View style={{ marginVertical : height*0.03 }}>

</View>
{promo.map((data, index)=>{
  return <PromoMenu key = {index} title={data.title} products={data.products} />

})}





        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
        
        </View>
      </ScrollView>

<View>
  <TouchableOpacity style={styles.btn_filter}>
    <Text style={styles.btn_filter_text}>Sortir</Text>
  </TouchableOpacity>
</View>

      <Footer focus="Home" navigation={navigation} />
    </SafeAreaView>
  );
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  search : {
    width : width*0.8,
    flexDirection : 'row',
    borderBottomWidth : 1,
    marginLeft : 'auto',
    marginRight : 'auto',
},
  layout_format : {
flex : 1,

  },
  promotion :{
    marginTop : height*0.08,
    marginHorizontal : width*0.04,
    width : width*0.92,
    height : height*0.25,
    backgroundColor : 'grey',
    borderRadius : width*0.04
    
  },

  card : {
    width : width*0.8,
    // height : height*0.22,
    backgroundColor : '#FFFFFF',
    // elevation: 4,
    borderRadius : width*0.02,
    // borderColor : '#00000030',
    // borderWidth : width*0.001,
    marginLeft : 'auto',
    marginRight : 'auto',
    // marginHorizontal : width*0.05,
    marginVertical : height*0.01,
    padding : width*0.02,
    // justifyContent : 'center',
    flexDirection: 'row',

  },
card_image : {
  width : width*0.2,
  height : width*0.2,
  borderRadius : width*0.04,
  backgroundColor :  'grey',

  // elevation: 4,
  // elevation: 4,
},
card_group : {

  // flexWrap: 'wrap'
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
button : {
  backgroundColor : '#E37AB1',
  paddingVertical : width*0.01,
  marginTop : height*0.02,
  marginBottom : height*0.008,
  width :width*0.20,
  marginLeft : 'auto',
  marginRight : 'auto',
  alignItems : 'center',
  borderRadius : width*0.03,
},
button_text : {
  color : '#FFFFFF',
  fontWeight : 'bold',
  fontSize : 11
},
price : {
  textAlign : 'center',
  fontWeight : '600',
},
btn_filter : {
  backgroundColor : '#E37AB1',
  paddingVertical : width*0.01,
  marginTop : height*0.02,
  marginBottom : height*0.04,
  width :width*0.30,
  marginLeft : 'auto',
  marginRight : 'auto',
  alignItems : 'center',
  borderRadius : width*0.03,
},
btn_filter_text : {
  color : '#FFFFFF',
  fontWeight : 'bold',
  fontSize : 15
},

});

export default App;
