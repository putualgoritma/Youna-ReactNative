import { Alert, Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../../footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useEffect, useState } from 'react';
import { Clinic, Expert, Search, Star } from '../../components/Icon';
import { User1 } from '../../components/sementara';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Arrow } from '../../components/user';
import API from '../service';
import Loading from '../loading';
import { useSelector } from 'react-redux';
import {RadioButton} from 'react-native-paper';



interface apps {
    navigation: any;
    focus: string;
    checked : string;
    route : any;
  }

//   type ClinicProps = PropsWithChildren<{
//     item : string;
//     functions : any;
//     key : number;
//   }>;

//   type ExpertProps = PropsWithChildren<{
//     item : string;
//     functions : any;
//     key : number;
//   }>;


  
  function App({navigation, route}:apps): JSX.Element {
    const TOKEN = useSelector((state) => state.TokenReducer);
    const USER = useSelector((state) => state.UserReducer);

    console.log('ini USER == ',USER.id)
    //  const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODY3ZWNmZjFhMjNlOGI2NGU0Y2U3MTg3YzYxZDgxMTg0OWM2NTMzZjVmYjViNzljNTcwMTA1NTg3MGU4ZGY1OWE1NmVkODU5OTZiYjk0ZTYiLCJpYXQiOjE2OTg5NzEwMzAsIm5iZiI6MTY5ODk3MTAzMCwiZXhwIjoxNzMwNTkzNDMwLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.BZSahmJEoTB3jjsdym-aGVrBfAMnNB_EQEFdg2_IbahLfGOK98bZkcblp8bN0bnVeqgzTpC66KBQMKLIBx2tPIS5HDljNPNu4Ge6bMNoSDp8yEgHXgB5OmXfWLF8myJSdoAmgLFQmYyGc8NAmDpbnH7Y20_H3RSPcBiAx4oZQvEnLPo-DfAt6KhSPJs5SMQWCOhMn67vj1_q3eDcTO1jKSpchb6azmaPfBws9e33MyTfN-NJd2ENpntCpvKyp9k3WUg1xPDG4RGjb5Cn3BHEMsj5oNAnFXqrlPw45sAnftJSja2FGLrVCkogZPY9_JFu7PUgtAtKm93vLtIi4o55DKB-OiFIcpwgHCdxJW_u1aPL0UAbAJTiLRjEeHcmNr0VqYqE4-a0Pl8292dSX0La3Y93ujTEZOsAtKRV1jAbRo0hMuYWBI4XkQs4gWL-op_PIz7MRRnp8gGQDryeuorVd5oQfeuK4DEL_p4_vH4TWxJgD68nWaV8y8BSgUlLvH049Je2Kkj9_jlYwJHYoeGzIr2lJgk5ElUJy-fvLGAY6RnhtlpAhJn_PQLovy7h0_kY11CJhMrYlAG8_0kXRQ9ccdVkv2t6Q7mFElRjw-daCvhHCWjGAGisyTzsXdrHstGvwITMCeUh2cK0uiT7oMTGRUz-Ji93CmHdqGwvWadw0_k";
    // // const TOKEN="";
    // const USER = "";
    const isDarkMode = useColorScheme() === 'dark';
    const [loading,setLoading] = useState(false)

    const [active,setActive] = useState(1);
    const [description,setDescription] = useState('');
    const [variant,setVariant] = useState('offline');

    const schedule_id = route.params.data.schedule_id;
    const doctor = route.params.data.doctor;
    const clinic = route.params.data.clinic;
    const date = route.params.data.date;
    const schedule_time = route.params.data.schedule_time;

  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      
      
    };

    const [selected, setSelected] = useState('');  
    const handleform = () =>{
      setLoading(true)
        const data = {
            schedule_id : schedule_id,
            date : date,
            customers_id : USER.id,
            memo : description,
            variant : variant
        }
        // console.log("ini data yang akan dikirim",
        // "schedule id :"+ data.schedule_id +","+
        // "date :"+ data.date +","+
        // "user_id :"+ data.user_id +","+
        // "description :"+ data.description)
        // Alert.alert("ini data yang akan dikirim",
        //     "schedule id :"+ data.schedule_id +","+
        //     "date :"+ data.date +","+
        //     "user_id :"+ data.user_id +","+
        //     "description :"+ data.description
        //     )

          let dataUpload = [];
          dataUpload = {
              customers_id : USER.id.toString(),
              memo : description,
              schedule_id : schedule_id.toString(),
              date : date,
              // cart : [
              //   {
              //     id : schedule_id,
              //     date : date
              //   }
              // ]
            }

        
            // setLoading(true);
            API.postReservation(
              data,
              TOKEN
            ).then(result => {
              if (result) {
                console.log(result);
                navigation.pop(2);
                alert(result.message);
                // setLoading(false);
              } else {
                alert(result.message);
                // setLoading(false);
              }
            });
          // } else {
          //   Alert.alert('Gagal', 'mohon lengkapi data');
          // }

    }
  
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

            <View style={{ borderRadius : 2 ,marginTop : height*0.01 ,width : width*0.84, padding : width*0.03 , marginLeft :'auto', marginRight : 'auto', backgroundColor : '#FFFFFF' }}>
                {/* <Text>{schedule_id}</Text> */}
                <Text style={styles.title}>Jadwal Reservasi</Text>
                <Text style={styles.label}>Tanggal :</Text>
                <Text style={styles.data}>{date}</Text>
                <Text style={styles.label}>Jam :</Text>
                <Text style={styles.data}>{schedule_time}</Text>
                <Text style={styles.label}>Expert :</Text>
                <Text style={styles.data}>{doctor}</Text>
                <Text style={styles.label}>Klinik :</Text>
                <Text style={styles.data}>{clinic}</Text>
               
            </View>
  
            <View style={{ borderRadius : 2 ,marginTop : height*0.01 ,width : width*0.84, padding : width*0.03 , marginLeft :'auto', marginRight : 'auto' }}>
 
            {/* <Text style={styles.label}>Dilakuka</Text> */}
            
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="offline"
                status={variant === 'offline' ? 'checked' : 'unchecked'}
                onPress={() => setVariant('offline')}
              />
              <Text style={{marginTop: 10}}>Offline</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="online"
                status={variant === 'online' ? 'checked' : 'unchecked'}
                onPress={() => setVariant('online')}
              />
              <Text style={{marginTop: 10}}>Online</Text>
            </View>
 
  <Text style={styles.label}>Isi keluhan anda (Opsional)</Text>
  <TextInput
    multiline={true}
    numberOfLines={10}
    value={description}
    onChangeText={(data)=>setDescription(data)}
    style={{ height:height*0.2, borderRadius : 10,marginTop : height*0.01, textAlignVertical: 'top',borderWidth : 1,}}/>
    </View>

    <TouchableOpacity style={styles.button} onPress={()=>{handleform()}}>
          <Text style={{ color : '#FFFFFF',  fontWeight : 'bold', fontSize : 24 }}>
            kirim Data
          </Text>
        </TouchableOpacity>
  
        </ScrollView>
       
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
  marginTop : height*0.15,
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