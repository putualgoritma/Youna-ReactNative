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
import { ArtikelS, EdukasiS, PromoS, SliderS, User1 } from '../../components/sementara';

import { Artikel, Dokter, Klinik_Terdekat, Membership, Payment, Pricelist, Promo, Reservasi, Star, Tur_Klinik, Video_Education, Visit_History, Voucher_Saya } from '../../components/Icon';

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
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia itaque optio tempore quasi! Perspiciatis
</Text>
</View>
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

  const images = [
    // "https://source.unsplash.com/1024x768/?nature",
    SliderS,
    SliderS,
    SliderS,
    SliderS, // Network image
  ]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>


<View style={styles.testimoni}>
<Testimoni name="Name" star={5} note='tesssss'/>
<Testimoni name="Name" star={5} note='tesssss'/>
<Testimoni name="Name" star={5} note='tesssss'/>
<Testimoni name="Name" star={5} note='tesssss'/>
<Testimoni name="Name" star={5} note='tesssss'/>
<Testimoni name="Name" star={5} note='tesssss'/>

</View>

      </ScrollView>
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
    width : width*0.92,
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
});

export default App;
