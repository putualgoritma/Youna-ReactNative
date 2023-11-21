/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import LottieView from "lottie-react-native";
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
import { useSelector } from 'react-redux';
// import  from './src/components/Icon';
import { SliderBox } from "react-native-image-slider-box";
import { ArtikelS, EdukasiS, PromoS, SliderS, User1 } from '../../components/sementara';
import Footer from '../../../footer';
import { Artikel, Dokter, Expert, FAQ, Klinik_Terdekat, Konsultasi, Membership, Payment, Pricelist, Promo, Reservasi, RiwayatKonsultasi, Star, Tur_Klinik, Video_Education, Visit_History, Voucher_Saya } from '../../components/Icon';

type SectionProps = PropsWithChildren<{
  name: string;
  star: number;
  note: string;
}>;

type SubMenuProps = PropsWithChildren<{
  image1: any;
  name1: string;
  image2: any;
  name2: string;
  image3: any;
  name3: string;
  image4: any;
  name4: string;
  url1 : String;
  url2 : String
  url3 : String;
  url4 : String;
  navigation : any;
}>;

function Testimoni({name, star, note}:SectionProps): JSX.Element {

 let stars = [];
  for(let i = 0; i < star; i++){

		stars.push(
			<View key = {i}>
				<Image source={Star} style={{ width : width*0.05, height : width*0.05, resizeMode : 'contain'  } }>

</Image>
			</View>
		)
	}

return(
  <View style={styles.userCard}>
    <View style={{ flexDirection : 'row' }}>
    <Image source={User1} style={styles.profileImages}>

</Image>
<View style={styles.profileDescription}>
<Text style={{ fontWeight : 'bold' , color : '#000000', marginTop : height*0.008 }}>{name}</Text>

<View style={{ flexDirection : 'row' }}>
  {stars}

</View>
<Text style={{ flex :1 }}>{note}
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia itaque optio tempore quasi! Perspiciatis voluptate repellat neque, illum ducimus, hic veritatis, error vel voluptatibus nesciunt dolorum. Itaque deserunt tempora quod.
</Text>
</View>
    </View>

  </View>
)
}

function SubMenu({name1, image1,name2, image2,name3, image3,name4, image4, url1, url2,url3,url4,navigation}:SubMenuProps): JSX.Element {
  return(
    <View style={{ flexDirection :'row' }}>
    <TouchableOpacity onPress={()=> navigation.navigate(url1)} style={styles.subMenu}>
      <Image source={image1} style={styles.icon}></Image>
      <Text style={styles.iconText}>{name1}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate(url2)} style={styles.subMenu}>
    <Image source={image2} style={styles.icon}></Image>
    <Text style={styles.iconText}>{name2}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate(url3)} style={styles.subMenu}>
    <Image source={image3} style={styles.icon}></Image>
    <Text style={styles.iconText}>{name3}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate(url4)} style={styles.subMenu}>
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
  const TOKEN = useSelector((state) => state.TokenReducer);
  const USER = useSelector((state) => state.UserReducer);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const images = [
    // "https://source.unsplash.com/1024x768/?nature",
    SliderS,
    SliderS,
    SliderS,
    SliderS, // Network image
  ]

  useEffect(()=>{
    console.log('ini data', USER)
    console.log('ini Token : ',TOKEN)

  },[])
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

     <View style={styles.header} >
     <Text style={{ marginLeft : 'auto', fontSize : 30, textAlign : 'center', textAlignVertical : 'center' }}>
        Home
      </Text>
      <Image source={User1} style={styles.profileImage}>
        
      </Image>
     </View>
     <View style={styles.greating} >
      <Text style={styles.hello}>
        Selamat Datang !
      </Text>
      <Text style={styles.username}>
        {/* Nama */}
      {USER.name}
      </Text>
      </View>

<View>
  <TouchableOpacity>
  <Text style={[styles.title,{marginLeft:'auto', fontWeight:'normal', fontSize:12, marginVertical : height*0.01 }]}>see all</Text>
  </TouchableOpacity>
  {/* <View style={styles.banner} > */}
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
  {/* </View> */}
</View>

<View style={styles.menu}>
  {/* Row 1 */}

  <TouchableOpacity onPress={()=> navigation.navigate("ReservationActive")} style={styles.subMenu}>
      <Image source={Konsultasi} style={styles.icon}></Image>
      <Text style={styles.iconText}>"Konsultasi"</Text>
    </TouchableOpacity>


</View>

<Text style={styles.title}>Promo</Text>
<Image source={PromoS} style={styles.promotion}>

</Image>

<Text style={styles.title}>Testimoni</Text>
<View style={styles.testimoni}>
<Testimoni name="Name" star={5} note='tesssss'/>
<Testimoni name="Name" star={5} note='tesssss'/>
<Testimoni name="Name" star={5} note='tesssss'/>
</View>

<Text style={styles.title}>Video Edukasi</Text>
<Image source={EdukasiS} style={styles.promotion}>

</Image>

<Text style={[styles.title, { marginTop : height*0.05 }]}>Artikel</Text>
<Image source={ArtikelS} style={[styles.promotion, {marginBottom : height*0.1}]}>

</Image>



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
  header: {
    width : width,
    height : height*0.1,
    // backgroundColor : 'red',
    flexDirection : 'row',
    justifyContent : 'center'
  },
  testimoni:{
    width : width*0.86,
    margin : width*0.07,
    // backgroundColor : 'blue',
  },
  greating : {
    width : width,
    height : height*0.1,
    // backgroundColor : 'blue'
  },
  menu :{
    // marginLeft : 'auto',
    // marginRight : 'auto',
    marginTop : height*0.1,
    marginBottom : height*0.05,
    width : width*0.92,
    margin : width*0.04,
    // height : height*0.1,
    // backgroundColor : 'blue',
 
  },
  subMenu :{
    width : width*0.18,
    height :  width*0.20,
    margin : width*0.025,
    marginBottom : height*0.03,
    borderRadius : width*0.01,
    backgroundColor : '#FFFFFF'
  },
  icon :{
    width : width*0.12,
    height :  width*0.12,
    margin : width*0.03,
    padding : width*0.03,
    // backgroundColor : 'white',
    backgroundColor : '#FFFFFF',
    resizeMode: 'contain'
  },
  iconText:{
color: '#000000',
textAlign:'center',
fontSize : 11,
marginTop : height*0.01
  },
  banner: {
    marginHorizontal : width*0.04,
    width : width,
    height : height*0.25,
    backgroundColor : 'grey'
  },
  promotion :{
    marginHorizontal : width*0.04,
    width : width*0.92,
    height : height*0.25,
    backgroundColor : 'grey',
    
  },


  userCard : {
    width : width*0.80,
    marginHorizontal : width*0.02,
    marginVertical : width*0.01,
    backgroundColor : '#FFFFFF',
    borderRadius : width*0.01,
    elevation: 5
  },
  profileImages :{
    width : width*0.15,
    height : width*0.15,
    margin : width*0.02,
    backgroundColor : '#D0D6D5',
    borderRadius : width*0.02,
  },
  profileDescription :{
    width : width*0.59,
  },

  title:{
    marginVertical : height*0.01,
    marginHorizontal : width*0.04,
fontSize : 18,
fontWeight : 'bold',
color : '#000000'
  },

  hello:{
    marginHorizontal : width*0.04,
fontSize : 18,
fontWeight : 'bold',
color : '#000000'
  },

  username:{
    marginHorizontal : width*0.04,
fontSize : 12,
// fontWeight : 'bold',
color : '#000000'
  },

  profileImage :{
    width : width*0.12,
    height : width*0.12,
    borderRadius : width*0.06,
    margin : width*0.02,
    marginLeft : 'auto',
    backgroundColor : '#000000',
   
  },


  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  loading:{
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'rgba(0,0,0,0.3)',
    zIndex : 1
  }
});

export default App;
