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



type SubMenuProps = PropsWithChildren<{
  image1: any;
  name1: string;
  image2: any;
  name2: string;
  image3: any;
  name3: string;
  image4: any;
  name4: string;
}>;



function SubMenu({name1, image1,name2, image2,name3, image3,name4, image4}:SubMenuProps): JSX.Element {
  return(
    <View style={{ flexDirection :'row' }}>
    <TouchableOpacity onPress={()=> Alert.alert('Menu Di Click')} style={styles.subMenu}>
      <Image source={image1} style={styles.icon}></Image>
      <Text style={styles.iconText}>{name1}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> Alert.alert('Menu Di Click')} style={styles.subMenu}>
    <Image source={image2} style={styles.icon}></Image>
    <Text style={styles.iconText}>{name2}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> Alert.alert('Menu Di Click')} style={styles.subMenu}>
    <Image source={image3} style={styles.icon}></Image>
    <Text style={styles.iconText}>{name3}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> Alert.alert('Menu Di Click')} style={styles.subMenu}>
    <Image source={image4} style={styles.icon}></Image>
    <Text style={styles.iconText}>{name4}</Text>
    </TouchableOpacity>
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



  return (
    <SafeAreaView style={[backgroundStyle,styles.layout_format]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

 

<Text style={styles.title}>Promo</Text>
<Image source={EdukasiS} style={styles.promotion}>

</Image>

<View style={styles.card}>
  <Text style={styles.card_title}></Text>
<Text style={styles.price_before}></Text>
<Text style={styles.price}></Text>
<TouchableOpacity style={styles.button}></TouchableOpacity>

</View>





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


  profileImage :{
    width : width*0.12,
    height : width*0.12,
    borderRadius : width*0.06,
    margin : width*0.02,
    marginLeft : 'auto',
    backgroundColor : '#000000',
   
  },


});

export default App;
