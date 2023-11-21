/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import { ArtikelS, Brightening, Darkspot, EdukasiS, PromoS, SliderS, User1 } from '../../components/sementara';
import Footer from '../../../footer';
import { Artikel, Dokter, Klinik_Terdekat, Membership, Payment, Pricelist, Promo, Reservasi, Star, Tur_Klinik, Video_Education, Visit_History, Voucher_Saya } from '../../components/Icon';
import API from '../service';
import Loading from '../loading';

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


function CardMakerMenu({image, price, id ,key, navigation}:PromoProps):JSX.Element{
  return(
    <View key= {key} style={styles.card}>
  <Image source={{ 'uri' : image}} style={styles.card_image}></Image>
  {/* <Text style={styles.card_title}>{card_title}</Text>
<Text style={styles.price_before}>{price_before}</Text>
<Text style={styles.price}>{price}</Text> */}
<TouchableOpacity style={styles.button } onPress={()=>{navigation.navigate('PriceDetail', {id : id})}}>
  <Text style ={styles.button_text}>TAP DI SINI</Text></TouchableOpacity>
<Text style={styles.price}>Rp.{price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
</View>
  )

}

function PromoMenu({products, navigation}:PromoProps): JSX.Element {
  return(

<View style ={styles.card_group}>

{products && products.map((data, index)=>{
return <CardMakerMenu key={index} image={"https://youna.belogherbal.com/"+data.img} navigation={navigation} id={data.id} title={data.title} price={data.price} />

})}

</View>

  )
  }

interface apps {
  navigation: any;
  focus: string;
}

function App({navigation}:apps): JSX.Element {

  const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODY3ZWNmZjFhMjNlOGI2NGU0Y2U3MTg3YzYxZDgxMTg0OWM2NTMzZjVmYjViNzljNTcwMTA1NTg3MGU4ZGY1OWE1NmVkODU5OTZiYjk0ZTYiLCJpYXQiOjE2OTg5NzEwMzAsIm5iZiI6MTY5ODk3MTAzMCwiZXhwIjoxNzMwNTkzNDMwLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.BZSahmJEoTB3jjsdym-aGVrBfAMnNB_EQEFdg2_IbahLfGOK98bZkcblp8bN0bnVeqgzTpC66KBQMKLIBx2tPIS5HDljNPNu4Ge6bMNoSDp8yEgHXgB5OmXfWLF8myJSdoAmgLFQmYyGc8NAmDpbnH7Y20_H3RSPcBiAx4oZQvEnLPo-DfAt6KhSPJs5SMQWCOhMn67vj1_q3eDcTO1jKSpchb6azmaPfBws9e33MyTfN-NJd2ENpntCpvKyp9k3WUg1xPDG4RGjb5Cn3BHEMsj5oNAnFXqrlPw45sAnftJSja2FGLrVCkogZPY9_JFu7PUgtAtKm93vLtIi4o55DKB-OiFIcpwgHCdxJW_u1aPL0UAbAJTiLRjEeHcmNr0VqYqE4-a0Pl8292dSX0La3Y93ujTEZOsAtKRV1jAbRo0hMuYWBI4XkQs4gWL-op_PIz7MRRnp8gGQDryeuorVd5oQfeuK4DEL_p4_vH4TWxJgD68nWaV8y8BSgUlLvH049Je2Kkj9_jlYwJHYoeGzIr2lJgk5ElUJy-fvLGAY6RnhtlpAhJn_PQLovy7h0_kY11CJhMrYlAG8_0kXRQ9ccdVkv2t6Q7mFElRjw-daCvhHCWjGAGisyTzsXdrHstGvwITMCeUh2cK0uiT7oMTGRUz-Ji93CmHdqGwvWadw0_k";
    

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const  [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const getData = () => {
    setLoading(true);
    // alert('1')
    API.getProducts(TOKEN).then(result => {
      // alert('2')
      if (result) {
        console.log('ini dataaaa : ',result);
        // alert('3')
        setProducts(result);
        setLoading(false);
      } else {
        alert(result.message);
      }
    });
  };

  useEffect(() => {
      getData()
  }, []);



  return (
    <SafeAreaView style={[backgroundStyle,styles.layout_format]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

{loading ? <Loading/> : null}

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

 
<View>
<Image source={Brightening} style={styles.promotion}>

</Image>
<TouchableOpacity style={styles.button}>
  <Text style={styles.button_text}>
    TAP DI SINI
  </Text>
</TouchableOpacity>
<Text style={styles.price}>Rp.400.000</Text>
</View>
{/* {promo.map((data, index)=>{ */}
<PromoMenu products={products} navigation= {navigation} />

{/* })} */}





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
    borderRadius : width*0.04
    
  },

  card : {
    width : width*0.4,
    // height : height*0.22,
    // backgroundColor : 'red',
    // elevation: 4,
    borderRadius : width*0.02,
    // borderColor : '#00000030',
    // borderWidth : width*0.001,
    // marginLeft : 'auto',
    // marginRight : 'auto',
    marginHorizontal : width*0.05,
    marginVertical : height*0.02,

  },
card_image : {
  width : width*0.4,
  height : width*0.4,
  borderRadius : width*0.04,
  backgroundColor :  'grey',

  // elevation: 4,
  // elevation: 4,
},
card_group : {
  flexDirection: 'row',
  flexWrap: 'wrap'
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
  marginTop : -height*0.02,
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
}

});

export default App;
