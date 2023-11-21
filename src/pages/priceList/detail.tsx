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


interface apps {
  navigation: any;
  focus: string;
  route: any;
}

function App({navigation, route}:apps): JSX.Element {

  const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODY3ZWNmZjFhMjNlOGI2NGU0Y2U3MTg3YzYxZDgxMTg0OWM2NTMzZjVmYjViNzljNTcwMTA1NTg3MGU4ZGY1OWE1NmVkODU5OTZiYjk0ZTYiLCJpYXQiOjE2OTg5NzEwMzAsIm5iZiI6MTY5ODk3MTAzMCwiZXhwIjoxNzMwNTkzNDMwLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.BZSahmJEoTB3jjsdym-aGVrBfAMnNB_EQEFdg2_IbahLfGOK98bZkcblp8bN0bnVeqgzTpC66KBQMKLIBx2tPIS5HDljNPNu4Ge6bMNoSDp8yEgHXgB5OmXfWLF8myJSdoAmgLFQmYyGc8NAmDpbnH7Y20_H3RSPcBiAx4oZQvEnLPo-DfAt6KhSPJs5SMQWCOhMn67vj1_q3eDcTO1jKSpchb6azmaPfBws9e33MyTfN-NJd2ENpntCpvKyp9k3WUg1xPDG4RGjb5Cn3BHEMsj5oNAnFXqrlPw45sAnftJSja2FGLrVCkogZPY9_JFu7PUgtAtKm93vLtIi4o55DKB-OiFIcpwgHCdxJW_u1aPL0UAbAJTiLRjEeHcmNr0VqYqE4-a0Pl8292dSX0La3Y93ujTEZOsAtKRV1jAbRo0hMuYWBI4XkQs4gWL-op_PIz7MRRnp8gGQDryeuorVd5oQfeuK4DEL_p4_vH4TWxJgD68nWaV8y8BSgUlLvH049Je2Kkj9_jlYwJHYoeGzIr2lJgk5ElUJy-fvLGAY6RnhtlpAhJn_PQLovy7h0_kY11CJhMrYlAG8_0kXRQ9ccdVkv2t6Q7mFElRjw-daCvhHCWjGAGisyTzsXdrHstGvwITMCeUh2cK0uiT7oMTGRUz-Ji93CmHdqGwvWadw0_k";
    
const id = route.params.id
  const isDarkMode = useColorScheme() === 'dark';
  

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [loading, setLoading] = useState(true)
  const  [product, setProduct] = useState({})

  const getData = () => {
    setLoading(true);
    // alert('1')
    API.getProduct(id,TOKEN).then(result => {
      // alert('2')
      if (result) {
        console.log('ini dataaaa : ',result);
        // alert('3')
        setProduct(result.data);
        setLoading(false);
      } else {
        alert(result.message);
      }
    });
  };

  useEffect(() => {
      getData()
  }, []);

  const images = [
    "https://youna.belogherbal.com/"+product.img
    // "https://source.unsplash.com/1024x768/?nature",
    
    // SliderS,
    // SliderS,
    // SliderS,
    // SliderS, // Network image
  ]



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
  <SliderBox
  images={images}
  sliderBoxHeight={200}
  onCurrentImagePressed={index => Alert.alert('Banner ke-'+(index+1))}
  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
  ImageComponentStyle={styles.banner}
/>

 <View style={styles.card}>
  <Text style={{ fontWeight : 'bold', color : '#000000' }}>{product.name}</Text>
<Text style={{ fontSize : 20, fontWeight : 'bold', color : '#000000' }}>Rp.{product.price}</Text>
 </View>

 <View style={styles.card}>
  <Text style={{ fontWeight : 'bold' }}>Deskripsi :</Text>
<Text style={{ textAlign : 'justify' }}>{product.description}</Text>
 </View>


      </ScrollView>
      <View style = {[styles.card, {flexDirection : 'row'}]}>
<TouchableOpacity style={styles.btn}>
  <Text style={styles.btntext}>
    Beli
  </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btn}>
  <Text style={styles.btntext}>
    + Keranjang
  </Text>
</TouchableOpacity>
      </View>
      {/* <Footer focus="Home" navigation={navigation} /> */}
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
    width : width*1,
    padding : width*0.05,
    marginBottom : width*0.01,
    marginLeft : 'auto',
    marginRight : 'auto',
    backgroundColor : '#FFFFFF'
  },
  btntext : {
    fontWeight : 'bold',
    color : '#FFFFFF',

  },
  btn : {
    width : width*0.4,
    height : height*0.05,
    backgroundColor : '#E37AB1',
    marginLeft : 'auto',
    marginRight : 'auto',
    justifyContent : 'center',
    alignItems : 'center'
  }


});

export default App;
