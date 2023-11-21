import { Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../../footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { Search } from '../../components/Icon';
import { User1 } from '../../components/sementara';
import { Arrow, EditPassword, EditProfile, Point, PusatBantuan, RekomendasiShare, RiwayatKunjungan, RiwayatPembayaran, Silver, Slash, Tentang, User, Voucher } from '../../components/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../loading';

interface apps {
    navigation: any;
    focus: string;
    checked : string;
  }
  
  function App({navigation}:apps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const [active,setActive] = useState(1);
    const [loading, setLoading] = useState(false);
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      
    };
  
    const logout = () => {
      setLoading(true)
      AsyncStorage.clear()
      setTimeout(function () {
          setLoading(false)
          navigation.navigate('Login')
      }, 2000); 
  }
  
    return (
      <SafeAreaView style={[backgroundStyle,{flex : 1 }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {loading ? <Loading/> : null

        }
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[backgroundStyle]}>
  



    <View style={ styles.card1 }>
      <View style={{ flexDirection : 'row', paddingVertical:width*0.02 }}>
    <Image source={User} style = {styles.image} />
    <View>
      <Text>Name</Text>
      <Text style={{ fontSize : 10 }}>Alamat email</Text>
    </View>
    </View>

<View style={{ borderTopWidth : 1, paddingVertical:width*0.02, alignItems : 'center' }}>
  <View style={{ flexDirection : 'row'  }}>
  <Image source={Slash} style={{ width : width*0.04, height : width*0.04, marginRight : width*0.01 }}/>
  <Text style={{ textAlign : 'center', color : 'red' }}>Belum Diverivikasi</Text>
  </View>
</View>

    </View>


    <View style={ [styles.card, {justifyContent : 'center'}] }>
      <Image source={Silver} style = {styles.icon}/>
      <Text style ={{ fontWeight : 'bold' }}>Silver Membership</Text>
    <View style ={{   marginLeft : 'auto', marginRight : width*0.02 }}>
      <Text>lihat detail</Text>
    </View>
    </View>


    <View style={ styles.card1 }>

      <View style={styles.listCard}>
<Image source={EditProfile} style={ styles.icon}/>
    <View style = {{ marginTop : height*0.01 }}>
      <Text>Edit Profile</Text>
    </View>
    <TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
      <Image source={Arrow} style={styles.btn}/>
    </TouchableOpacity>
    </View>

    <View style={styles.listCard}>
<Image source={RiwayatPembayaran} style={ styles.icon}/>
    <View style = {{ marginTop : height*0.01 }}>
      <Text>Riwayat Pembayaran</Text>
    </View>
    <TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
      <Image source={Arrow} style={styles.btn}/>
    </TouchableOpacity>
    </View>

    <View style={styles.listCard}>
<Image source={RiwayatKunjungan} style={ styles.icon}/>
    <View style = {{ marginTop : height*0.01 }}>
      <Text>Riwayat Kunjungan</Text>
    </View>
    <TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
      <Image source={Arrow} style={styles.btn}/>
    </TouchableOpacity>
    </View>

    <View style={styles.listCard}>
<Image source={Voucher} style={ styles.icon}/>
    <View style = {{ marginTop : height*0.01 }}>
      <Text>Voucher Saya</Text>
    </View>
    <TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
      <Image source={Arrow} style={styles.btn}/>
    </TouchableOpacity>
    </View>

    <View style={styles.listCard}>
<Image source={Point} style={ styles.icon}/>
    <View style = {{ marginTop : height*0.01 }}>
      <Text>Point</Text>
    </View>
    <TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
      <Image source={Arrow} style={styles.btn}/>
    </TouchableOpacity>
    </View>
    
   
    </View>

    <View style={ styles.card1 }>

<View style={styles.listCard}>
<Image source={EditPassword} style={ styles.icon}/>
<View style = {{ marginTop : height*0.01 }}>
<Text>Edit Password</Text>
</View>
<TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
<Image source={Arrow} style={styles.btn}/>
</TouchableOpacity>
</View>
</View>


<View style={ styles.card1 }>

<View style={styles.listCard}>
<Image source={RekomendasiShare} style={ styles.icon}/>
<View style = {{ marginTop : height*0.01 }}>
<Text>Rekomendasi/Share</Text>
</View>
<TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
<Image source={Arrow} style={styles.btn}/>
</TouchableOpacity>
</View>

<View style={styles.listCard}>
<Image source={PusatBantuan} style={ styles.icon}/>
<View style = {{ marginTop : height*0.01 }}>
<Text>Pusat Bantuan</Text>
</View>
<TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
<Image source={Arrow} style={styles.btn}/>
</TouchableOpacity>
</View>

<View style={styles.listCard}>
<Image source={Tentang} style={ styles.icon}/>
<View style = {{ marginTop : height*0.01 }}>
<Text>Tentang</Text>
</View>
<TouchableOpacity style ={{   marginLeft : 'auto', marginRight : width*0.02,marginTop : height*0.02 }}>
<Image source={Arrow} style={styles.btn}/>
</TouchableOpacity>
</View>


<TouchableOpacity onPress={()=>{logout()}} style={{ marginVertical : height*0.02, marginLeft : 'auto', marginRight : 'auto' ,width : width*0.87, padding : width*0.03, borderWidth:1.4, borderRadius : width*0.04, borderColor : '#00000070' }}>
  <Text style={{ textAlign : 'center', color:'#00000070' }}>Keluar</Text>
</TouchableOpacity>


<TouchableOpacity style={{marginBottom : height*0.02, marginLeft : 'auto', marginRight : 'auto' ,width : width*0.87, padding : width*0.03, borderWidth:1.4, borderRadius : width*0.04, borderColor : 'red' }}>
  <Text style={{ textAlign : 'center', color:'red' }}>Hapus Akun</Text>
</TouchableOpacity>

</View>
   
        </ScrollView>
        <Footer focus="Profile" navigation={navigation} />
      </SafeAreaView>
    );
  }

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({

text3 : {
fontSize : 11,
},
card : {
  marginVertical : height*0.01,
width : width*0.9,
paddingVertical : height*0.02,
marginLeft : 'auto',
marginRight : 'auto',
borderWidth : 1,
flexDirection : 'row',
borderRadius : width*0.03,
borderColor : '#00000020'
},
card1 : {
  marginVertical : height*0.01,
  width : width*0.9,
  // paddingVertical : height*0.02,
  marginLeft : 'auto',
  marginRight : 'auto',
  borderWidth : 1,
  borderRadius : width*0.03,
  borderColor : '#00000020'
  },
  listCard : {
flexDirection : 'row',
marginVertical: height*0.02
  },
search : {
    width : width*0.8,
    flexDirection : 'row',
    borderBottomWidth : 1,
    marginLeft : 'auto',
    marginRight : 'auto',
},
menu : { 
    height : height*0.65,
    width : width*0.78,
    borderBottomLeftRadius : width*0.03,
    borderBottomRightRadius : width*0.03,
    // backgroundColor : 'red',
    marginLeft : 'auto',
    marginRight : 'auto',
    // borderWidth : 1,
    // borderColor : '#00000030'
},
navMenu : { 
    height : height*0.05,
    flexDirection : 'row',
    // marginBottom : -height*0.05,
    width : width*0.78,
    borderTopEndRadius : width*0.03,
    borderTopStartRadius : width*0.03,
    // backgroundColor : 'blue',
    marginLeft : 'auto',
    marginRight : 'auto',
    marginTop : height*0.04,
    borderWidth : 1,
    borderColor : '#00000030'
},
navButton : {
   
    justifyContent : 'center',
    // paddingHorizontal : width*0.03
    width : width*0.26,
    alignItems : 'center',
    // marginLeft : 'auto',
    // marginRight : 'auto',

},
content : {
  justifyContent : 'center',
  alignItems : 'center',
  height : height*0.5
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
image : {
  width : width*0.15,
  height : width*0.15,
  borderRadius : width*0.075,
  // marginTop : height*0.02,
  marginHorizontal : width*0.03,
},
icon : {
  width : width*0.10,
  height : width*0.10,
  borderRadius : width*0.005,
  // marginTop : height*0.02,
  marginHorizontal : width*0.03,
},
btn : {
  width : width*0.04,
  height : width*0.04,

}

});

export default App