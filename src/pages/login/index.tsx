/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import OneSignal from 'react-native-onesignal';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { SET_DATA_PERMISSION, SET_DATA_TOKEN, SET_DATA_USER } from '../redux/action';
import API from '../service';
import Loading from '../loading';



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

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
      email : null,
      password : null,
      id_onesignal : null
  })
  const [loading, setLoading]= useState(true)
  
  useEffect(() => {
      if(isFocused){
         signupOnesignal().then((result) => {
              // alert(result);
              console.log('update onesignal',result);
              setForm({...form, id_onesignal : result})
              setLoading(false)
         }).catch(e => {
             console.log(e);
              alert(e)
             setLoading(false)
         }) 
      }

      // return () => {
      //    setForm({
      //        password : null,
      //        id_onesignal : null,
      //        email : null
      //    })
      // }
  }, [isFocused])

  const signupOnesignal = async () => {
      // dispatch(token_api_one_signal(device['userId']))
      // const device = await OneSignal.getDeviceState();
      // return device.userId;
      OneSignal.setAppId('282dff1a-c5b2-4c3d-81dd-9e0c2b82114b');
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(false);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('Prompt response:', response);
    });

    try {
      console.log('THE RESPONSE AS BELOW');
      // dispatch(token_api_one_signal(device['userId']))
      const device = await OneSignal.getDeviceState();
      console.log('test9 ', device);
      console.log('log8', device.userId);
      return device.userId;
    } catch (e) {
      console.log(e);
    }
  }

  const storeDataUser = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@LocalUser', jsonValue)
      } catch (e) {
        console.log('no save')
      }
  }

  const storeDataToken = async (value) => {
      try {
        await AsyncStorage.setItem('@LocalToken', value)
      } catch (e) {
        console.log('TOken not Save ')
      }
  }

  const storeDataPermission = async (value) => {
      try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@LocalPermission', jsonValue)
      } catch (e) {
      console.log('no save', e)
      }
  }

  const handleAction =  () => {
    //  alert('tesss')
      setLoading(true)
      const user  ={
          email : form.email,
          password : form.password,
          id_onesignal : form.id_onesignal
      }
      if(!user.id_onesignal){
          signupOnesignal().then((result) => {
              // alert(result);
              console.log('update onesignal',result);
              user.id_onesignal =  result
              if(user.id_onesignal){
                  
                  handleLogin(user);
              }
          }).catch(e => {
              alert('cath')
              handleLogin(user)
              console.log(e);
          }) 
      }else{
          handleLogin(user)
      }
  
     
  }

  const handleLogin = (user) => {
   
      if(user.email != null && user.password !=null && user.id_onesignal ){
        console.log('Gagal 1');
          API.login(user).then((result) => {
            console.log('Gagal 2')
            console.log('iniiii data  : ',result.token.token)
              if(result.success){
                  // result.data['password'] = result.data.password;
                  // dispatch(SET_DATA_USER(result.data))
                  // dispatch(SET_DATA_TOKEN(result.token))
                  // dispatch(SET_DATA_PERMISSION(result.permission))
                  // storeDataToken(result.token)
                  // storeDataUser(result.data)
                  // storeDataPermission(result.permission)
                  // navigation.replace('Home')
                  Promise.all([storeDataUser(result.user),storeDataToken(result.token.token)]).then((success)=>{
                      dispatch(SET_DATA_USER(result.user))
                      dispatch(SET_DATA_TOKEN(result.token.token))
                      // dispatch(SET_DATA_PERMISSION(result.permission))
                      if(result.user.type == "member"){
                      navigation.replace('Home')
                      }
                      else if(result.user.type == "expert"){
                        navigation.replace('HomeExpert')
                      }
                  }).catch(e => {
                    console.log('Gagal')
                    setLoading(false)
                    console.log(e);
                }) 
              }else{
                console.log('Gagal 4')
                 Alert.alert("Gagal","Email & Password yang Anda masukkan salah. Salah memasukkan Email & Password lebih dari 3x maka Account akan otomatis di blokir.")
                  setLoading(false)
              }
          }).catch(e => {
            // console.log('Gagal')
            Alert.alert("Gagal","Email & Password yang Anda masukkan salah. Salah memasukkan Email & Password lebih dari 3x maka Account akan otomatis di blokir.")
            setLoading(false)
            console.log(e);
        }) 
      }else{
          alert('mohon lengkapi data')
          setLoading(false)
      }
  }

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
      {loading ? <Loading/> : null }
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
      <View style={styles.input}>
<TextInput
placeholder='Email'
style={{ marginLeft : width*0.06 }}
onChangeText={(item) => setForm({...form, email : item})}
/>
</View>


<View style={[styles.input,{flexDirection:'row'}]}>
  <TextInput
  placeholder='Password'
  secureTextEntry={visible}
  style={{ marginLeft : width*0.06, width : width*0.65 }}
  onChangeText={(item) => setForm({...form, password : item})}
  />
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
  </View>

<TouchableOpacity style={{  marginLeft : 'auto', marginRight : width*0.1, marginVertical : height*0.01 }}>
  <Text style={{ color:'#E37AB1' }}>Lupa password ?</Text>
</TouchableOpacity>






</View>

<View style={{ alignItems : 'center', marginTop : height*0.05 }}>
    <TouchableOpacity 
    // onPress={()=>{navigation.navigate('Home')}}
    onPress={handleAction}
    
    style={{ width : width*0.4, height : height*0.07,borderRadius : width*0.2 ,backgroundColor : '#E37AB1', justifyContent : 'center' }}>
        <Text style={{ textAlign : 'center', textAlignVertical : 'center', fontSize : 20, color : '#FFFFFF' }}>Masuk</Text>
    </TouchableOpacity>

    <Text style = {{ marginTop : height*0.01 }}>Belum punya akun?</Text>
    <Text style = {{ marginTop : height*0.01 }}>Yuk <Text onPress={()=>{navigation.navigate('Register')}} style={{ color : '#E37AB1', fontWeight:'600'}}>Daftar</Text> dulu</Text>


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
