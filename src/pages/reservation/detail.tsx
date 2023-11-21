import { Alert, Button, Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../../footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useCallback, useEffect, useState } from 'react';
import { Clinic, Expert, Search, Star } from '../../components/Icon';
import { User1 } from '../../components/sementara';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Arrow } from '../../components/user';
import QRCode from 'react-native-qrcode-svg';
import Modal from "react-native-modal";
import API from '../service';
import { useSelector } from 'react-redux';
import Loading from '../loading';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';




interface apps {
    navigation: any;
    focus: string;
    checked : string;
    route : any;
  }

//   type ReservationProps = PropsWithChildren<{
//     item : string;
//     functions : any;
//     key : number;
//   }>;

//   type ExpertProps = PropsWithChildren<{
//     item : string;
//     functions : any;
//     key : number;
//   }>;

type ReservationProps = PropsWithChildren<{
    item : string;
    functions : any;
    key : number;
  }>;


  
  function App({navigation, route}:apps): JSX.Element {
    // const USER_ID = 7
    // const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODY3ZWNmZjFhMjNlOGI2NGU0Y2U3MTg3YzYxZDgxMTg0OWM2NTMzZjVmYjViNzljNTcwMTA1NTg3MGU4ZGY1OWE1NmVkODU5OTZiYjk0ZTYiLCJpYXQiOjE2OTg5NzEwMzAsIm5iZiI6MTY5ODk3MTAzMCwiZXhwIjoxNzMwNTkzNDMwLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.BZSahmJEoTB3jjsdym-aGVrBfAMnNB_EQEFdg2_IbahLfGOK98bZkcblp8bN0bnVeqgzTpC66KBQMKLIBx2tPIS5HDljNPNu4Ge6bMNoSDp8yEgHXgB5OmXfWLF8myJSdoAmgLFQmYyGc8NAmDpbnH7Y20_H3RSPcBiAx4oZQvEnLPo-DfAt6KhSPJs5SMQWCOhMn67vj1_q3eDcTO1jKSpchb6azmaPfBws9e33MyTfN-NJd2ENpntCpvKyp9k3WUg1xPDG4RGjb5Cn3BHEMsj5oNAnFXqrlPw45sAnftJSja2FGLrVCkogZPY9_JFu7PUgtAtKm93vLtIi4o55DKB-OiFIcpwgHCdxJW_u1aPL0UAbAJTiLRjEeHcmNr0VqYqE4-a0Pl8292dSX0La3Y93ujTEZOsAtKRV1jAbRo0hMuYWBI4XkQs4gWL-op_PIz7MRRnp8gGQDryeuorVd5oQfeuK4DEL_p4_vH4TWxJgD68nWaV8y8BSgUlLvH049Je2Kkj9_jlYwJHYoeGzIr2lJgk5ElUJy-fvLGAY6RnhtlpAhJn_PQLovy7h0_kY11CJhMrYlAG8_0kXRQ9ccdVkv2t6Q7mFElRjw-daCvhHCWjGAGisyTzsXdrHstGvwITMCeUh2cK0uiT7oMTGRUz-Ji93CmHdqGwvWadw0_k";
        
    const TOKEN = useSelector((state) => state.TokenReducer);
    const USER = useSelector((state) => state.UserReducer);
    const isDarkMode = useColorScheme() === 'dark';
    const id = route.params.id

    const [reservation, setReservation] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [loading,setLoading] = useState(true)

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const getData = () => {
      setLoading(true);
      console.log('ini iddd : '+id)
      API.getHistoryDetail(id,TOKEN).then(result => {
        if (result) {
          console.log(result.data);
          setReservation(result.data);
          console.log('ini dataaa ::',result.data.availabilities[0].clinic_customers.customers.name)
          setLoading(false);
        } else {
          alert(result.message);
        }
      });
    };

    useFocusEffect(
      useCallback(()=>{
        // alert('Hi from profile');
        getData()
      },[])
      // React.useCallback(() => {
      //   //Below alert will fire every time when profile screen is focused
      //     alert('Hi from profile')
      // }, [])
    );

    const roomChat = async (item : any)=>{
      setLoading(true)
      const threads_id = item.firebase_threads_id;
      let namaPenerima="";
      if(USER.type != "expert"){
      namaPenerima = item.availabilities[0].clinic_customers.customers.name;
      }
      else{
      namaPenerima = item.customers
      }
   
  // alert(namaPenerima);




      if(threads_id != ""){
        // Alert.alert('1','1')
      //   firestore()
      // .collection('THREADS')
      // .where('reservation_id', '==', item.id)
     
      // .onSnapshot(querySnapshot => {
      //   // console.log('ini jumlah log', querySnapshot.docs[0].id);
        navigation.navigate("ReservationChat" ,{id : threads_id, namaPenerima : namaPenerima, id_penerima :  item.availabilities[0].clinic_customers.id,status : item.status, id_konsultasi : item.id})
      //   setLoading(false)
      //   // console.log('djdhddndmd', messages);
      // });
      }
      else{
        // Alert.alert('2','2')
            // ubah status jadi aktif

            firestore()
            .collection('THREADS')
            .add({
              name: 'tesss',
              reservation_id : item.id,
              latestMessage: {
                text: `You have joined the room`,
                createdAt: new Date().getTime(),
              },
            })
            .then(docRef => {
              console.log('ini a :',docRef.id)
              docRef.collection('MESSAGES').add({
                text: `You have joined the room`,
                createdAt: new Date().getTime(),
                system: true,
              });
              const data = {
                id : item.id,
                status : "activated",
                firebase_threads_id : docRef.id
            }
          

            API.postReservationStatus(
              data,
              TOKEN
            ).then(result => {
              if (result) {
                console.log(result);
            
              // navigation.navigate("ReservationChat" ,{id :docRef.id, namaPenerima : namaPenerima,status : item.status, id_konsultasi : item.id})
              navigation.navigate("ReservationChat" ,{id :docRef.id, namaPenerima : namaPenerima, id_penerima :  item.availabilities[0].clinic_customers.id,status : 'activated', id_konsultasi : item.id})
              setLoading(false)
              } else {
                // setLoading(false);
              }
            });
              // navigation.navigate("ReservationDetail" ,{id :item.id})
              // navigation.navigate('Home');
            });
    

   
      
      }
      }



    useEffect(() => {
    // setReservations([
    //    {id : 1,date: '20-11-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : true},
    //    {id : 2,date: '28-11-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
    // ])
    getData()
    }, []);


    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      
      
    };

    const selectReservation =(id : number) => {
        Alert.alert(
            'Tunjukan kode dibawah ini !',
            '%3@93709'+id,
          //   <QRCode
          //   value="http://awesome.link.qr"
          // />
        )
    }

    const [selected, setSelected] = useState('');  
  
    return (
      <SafeAreaView style={[backgroundStyle,{flex : 1 }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
{loading ? <Loading/> : null}


        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[backgroundStyle]}>
        
        {reservation != null &&
      
      <>
       <View style={{ alignItems : 'center' ,borderRadius : 2 ,marginTop : height*0.01 ,width : width*0.84, padding : width*0.03 , marginLeft :'auto', marginRight : 'auto', backgroundColor : '#FFFFFF' }}>

       {reservation.variant == "offline" &&
     <QRCode
        value={reservation.availabilities[0].pivot.qr_code}
        size={width*0.7}
           />
        }
       </View>
        <View style={{ borderRadius : 2 ,marginTop : height*0.01 ,width : width*0.84, padding : width*0.03 , marginLeft :'auto', marginRight : 'auto', backgroundColor : '#FFFFFF' }}>

    <Text style={styles.title}>Jadwal Konsultasi</Text>
    <Text style={styles.label}>Tanggal :</Text>
    <Text style={styles.data}>{reservation.register}</Text>
    <Text style={styles.label}>Jam :</Text>
    <Text style={styles.data}>{reservation.availabilities[0].start} - {reservation.availabilities[0].end}</Text>
    <Text style={styles.label}>Expert :</Text>
    <Text style={styles.data}>{reservation.availabilities[0].clinic_customers.customers.name}</Text>
    <Text style={styles.label}>Klinik :</Text>
    <Text style={styles.data}>{reservation.availabilities[0].clinic_customers.clinics.name}</Text>
  <Text style={styles.label}>Alamat :</Text>
  <Text style={styles.data}>{reservation.availabilities[0].clinic_customers.clinics.address}</Text>

{reservation.variant == "online" &&
<TouchableOpacity style={styles.button} onPress={()=>{ roomChat(reservation) }} >
<Text style={{ color : '#FFFFFF' }}>Mulai Obrolan</Text>
</TouchableOpacity>
}


  </View>
  </>
  
  


}
           
  
        </ScrollView>
        {/* <Footer focus="ReservationActive" navigation={navigation} /> */}
        {/* <Footer focus="Home" navigation={navigation} /> */}
      </SafeAreaView>
    );
  }

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({

  btn : {
borderWidth : 1,
borderRadius : width*0.02,
marginHorizontal : width*0.027
  },
header : {
  marginTop : height*0.03,
  // height : height*0.2,
  // backgroundColor : '#E37AB1',
  // borderBottomStartRadius : width*0.1,
  // borderBottomEndRadius : width*0.1,
  flexDirection : 'row',
},
image : {
  width : width*0.15,
  height : width*0.15,
  borderRadius : width*0.075,
  marginTop : height*0.02,
  marginHorizontal : width*0.03
},
 viewlist : {
width : width*0.9,
padding : width*0.02,
backgroundColor : '#FFFFFF',
marginLeft : 'auto',
marginRight : 'auto',

},
item: {
  flexDirection : 'row',
  padding: width*0.02,
  fontSize: 18,
  height: 44,
},
row1 : {
width : width*0.7,
},
row2 : {
  flexDirection : 'row',
  width : width*0.1,
},
btnTime : {
  padding : width*0.03,
  backgroundColor : '#E37AB1',
  marginLeft : 'auto',
  marginRight : 'auto',
  marginVertical : width*0.02
},
button : {
  backgroundColor : '#E37AB1',
  paddingVertical : width*0.01,
  marginTop : height*0.015,
  marginBottom : height*0.008,
  width :width*0.70,
  marginLeft : 'auto',
  marginRight : 'auto',
  alignItems : 'center',
  borderRadius : width*0.03,
  elevation: 5
},
btnLabel : {
  marginVertical : width*0.02,
  flexDirection : 'row',
  borderBottomWidth : 1,
  paddingVertical : height*0.01,
  borderColor : '#00000030'
},
label : {
    marginTop : height*0.01,
  fontSize : 16,
  fontWeight : 'bold'
},
data : {
    fontSize : 14,
    marginLeft : width*0.04
  },
title : {
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center',
}


});

export default App