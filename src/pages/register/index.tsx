/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import PhoneInput from 'react-native-phone-input'
import Icon from 'react-native-vector-icons/FontAwesome5';
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
import { ArtikelS, EdukasiS, PromoS } from '../../components/sementara';
import Footer from '../../../footer';
import { Artikel, Dokter, Klinik_Terdekat, Membership, Payment, Pricelist, Promo, Reservasi, Star, Tur_Klinik, Video_Education, Visit_History, Voucher_Saya } from '../../components/Icon';
import { TextInput } from 'react-native-gesture-handler';



type InputPasswordProps = PropsWithChildren<{
    placeholder: string;
    visible : boolean;
  }>;

  type InputProps = PropsWithChildren<{
    placeholder: string;
  }>;

function Input({placeholder}:InputProps): JSX.Element {
    return(
       
        <View style={styles.input}>
<TextInput
placeholder={placeholder}
style={{ marginLeft : width*0.06 }}
/>
</View>
      
    )
    }

    function InputPassword({children, placeholder, visible}:InputPasswordProps): JSX.Element {
      return(
         
          <View style={[styles.input,{flexDirection:'row'}]}>
  <TextInput
  placeholder={placeholder}
  secureTextEntry={visible}
  style={{ marginLeft : width*0.06, width : width*0.65 }}
  />
  {children}
  </View>
        
      )
      }

interface apps {
  navigation: any;
  focus: string;
}

function Login({navigation}:apps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(true);

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
      <Text style={styles.hello}>
        Selamat datang di You'na Online Clinic
      </Text>
      <Text style={styles.hello}>
        Daftar Sekarang
      </Text>
      </View>

      <View style={styles.form}>
<Input placeholder='Nama Lengkap' />
<Input placeholder='Email'  />

<View style={[styles.input,{justifyContent : 'center'}]}>
<PhoneInput
style={{ marginLeft : width*0.06 }}
                // ref={(ref) => { this.phone = ref; }}
                // onPressFlag={this.onPressFlag}
                initialCountry={'id'}
                initialValue="62"
                // onChangePhoneNumber={this.onPhoneInputChange}
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />
            
</View>

<InputPassword placeholder='Password' visible={visible}>
<TouchableOpacity style={{  justifyContent : 'center', }}
                onPress={() => {
                  !visible ? setVisible(true) : setVisible(false);
                }}>
                {!visible && (
                  <Icon
                    name="eye-slash"
                    size={width * 0.07}
                    color="#000000"
                  />
                )}
                {visible && (
                  <Icon name="eye" size={width * 0.07} color="#000000" />
                )}
              </TouchableOpacity>
</InputPassword>

<InputPassword placeholder='Ketik Ulang Password' visible={visible1}>
<TouchableOpacity style={{  justifyContent : 'center', }}
                onPress={() => {
                  !visible1 ? setVisible1(true) : setVisible1(false);
                }}>
                {!visible1 && (
                  <Icon
                    name="eye-slash"
                    size={width * 0.07}
                    color="#000000"
                  />
                )}
                {visible1 && (
                  <Icon name="eye" size={width * 0.07} color="#000000" />
                )}
              </TouchableOpacity>
</InputPassword>





</View>

<View style={{ alignItems : 'center', marginTop : height*0.05 }}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={{ width : width*0.4, height : height*0.07,borderRadius : width*0.2 ,backgroundColor : '#E37AB1', justifyContent : 'center' }}>
        <Text style={{ textAlign : 'center', textAlignVertical : 'center', fontSize : 20, color : '#FFFFFF' }}>Kirim</Text>
    </TouchableOpacity>

    <Text style = {{ marginTop : height*0.01 }}>Sudah punya akun? ayo <Text onPress={()=>{navigation.navigate('Login')}} style={{ color : '#E37AB1', fontWeight:'600' }}>MASUK</Text></Text>

    <Text style = {{ marginTop : height*0.05 }}>Dengan masuk, kamu menyetujui</Text>
    <Text><Text style={{ fontWeight : 'bold', color:'#000000' }}>Ketentuan Layanan</Text> dan <Text style={{ fontWeight : 'bold', color:'#000000' }}>Kebijakan Privasi</Text></Text>
</View>


<View>

</View>

      </ScrollView>
    </SafeAreaView>
  );
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    form : {

    },
    input : {
        height : height*0.07,
        width : width*0.84,
        marginVertical : height*0.005,
        marginHorizontal : width*0.08,
        backgroundColor : '#00000008',
        borderRadius : width*0.4,
       
    },
  header: {
    marginTop : height*0.18,
    width : width,
    height : height*0.1,
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
    backgroundColor : 'grey'
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
    backgroundColor : '#000000',
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
    justifyContent : 'center'
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

export default Login;
