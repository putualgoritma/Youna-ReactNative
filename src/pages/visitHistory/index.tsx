import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../../footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useEffect, useState } from 'react';
import { Search } from '../../components/Icon';
import { User1 } from '../../components/sementara';
import API from '../service';
import { useSelector } from 'react-redux';


interface apps {
    navigation: any;
    focus: string;
    checked : string;
  }

  type ReservationProps = PropsWithChildren<{
    item : string;
    functions : any;
    key : number;
  }>;

function ListReservation({item}:ReservationProps): JSX.Element {
    return(
        <View style={{ borderRadius : 2 ,marginTop : height*0.01 ,width : width*0.84, padding : width*0.03 , marginLeft :'auto', marginRight : 'auto', backgroundColor : '#FFFFFF' }}>
    {/* <Text>{schedule_id}</Text> */}
    <Text style={styles.title}>Riwayat Konsultasi</Text>
    <Text style={styles.label}>Tanggal :</Text>
    <Text style={styles.data}>{item.register}</Text>
    <Text style={styles.label}>Jam :</Text>
    <Text style={styles.data}>{item.availabilities[item.availabilities.length - 1].start} - {item.availabilities[item.availabilities.length - 1].end}</Text>
    {/* <Text style={styles.label}>Expert :</Text>
    <Text style={styles.data}>{item.doctor}</Text> */}
    {/* <Text style={styles.label}>Klinik :</Text>
    <Text style={styles.data}>{item.clinic}</Text> */}
 
</View>
     
  )}



  
  function App({navigation}:apps): JSX.Element {
//     const USER_ID = 7
// const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODY3ZWNmZjFhMjNlOGI2NGU0Y2U3MTg3YzYxZDgxMTg0OWM2NTMzZjVmYjViNzljNTcwMTA1NTg3MGU4ZGY1OWE1NmVkODU5OTZiYjk0ZTYiLCJpYXQiOjE2OTg5NzEwMzAsIm5iZiI6MTY5ODk3MTAzMCwiZXhwIjoxNzMwNTkzNDMwLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.BZSahmJEoTB3jjsdym-aGVrBfAMnNB_EQEFdg2_IbahLfGOK98bZkcblp8bN0bnVeqgzTpC66KBQMKLIBx2tPIS5HDljNPNu4Ge6bMNoSDp8yEgHXgB5OmXfWLF8myJSdoAmgLFQmYyGc8NAmDpbnH7Y20_H3RSPcBiAx4oZQvEnLPo-DfAt6KhSPJs5SMQWCOhMn67vj1_q3eDcTO1jKSpchb6azmaPfBws9e33MyTfN-NJd2ENpntCpvKyp9k3WUg1xPDG4RGjb5Cn3BHEMsj5oNAnFXqrlPw45sAnftJSja2FGLrVCkogZPY9_JFu7PUgtAtKm93vLtIi4o55DKB-OiFIcpwgHCdxJW_u1aPL0UAbAJTiLRjEeHcmNr0VqYqE4-a0Pl8292dSX0La3Y93ujTEZOsAtKRV1jAbRo0hMuYWBI4XkQs4gWL-op_PIz7MRRnp8gGQDryeuorVd5oQfeuK4DEL_p4_vH4TWxJgD68nWaV8y8BSgUlLvH049Je2Kkj9_jlYwJHYoeGzIr2lJgk5ElUJy-fvLGAY6RnhtlpAhJn_PQLovy7h0_kY11CJhMrYlAG8_0kXRQ9ccdVkv2t6Q7mFElRjw-daCvhHCWjGAGisyTzsXdrHstGvwITMCeUh2cK0uiT7oMTGRUz-Ji93CmHdqGwvWadw0_k";
const TOKEN = useSelector((state) => state.TokenReducer);
const USER = useSelector((state) => state.UserReducer);

    const isDarkMode = useColorScheme() === 'dark';

    const [active,setActive] = useState(1);


  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      
    };
    const [reservations, setReservations] = useState([]);

    const getData = () => {
      // setLoading(true);
      API.getHistory(USER.id,TOKEN).then(result => {
        if (result) {
          console.log(result.data);
          setReservations(result.data);
          console.log('ini dataaa ::',result)
          // setLoading(false);
        } else {
          alert(result.message);
        }
      });
    };
    useEffect(() => {
      // setReservations([
      //    {id : 1,date: '20-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : true},
      //    {id : 2,date: '01-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
      //    {id : 3,date: '10-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
      //    {id : 4,date: '13-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
      //    {id : 5,date: '16-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
      //    {id : 6,date: '18-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
      //    {id : 7,date: '24-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
      //    {id : 8,date: '28-10-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
      // ])
      getData();
      }, []);
  
  
    return (
      <SafeAreaView style={[backgroundStyle,{flex : 1 }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[backgroundStyle]}>
  
<View style={styles.header}>
  <Image source={User1} style = {styles.image} />
  <View style={{   marginTop : height*0.03, }}>
    <Text>Nama Member</Text>
    <Text>Silver Member</Text>
  </View>
</View>

{reservations.length <= 0 ?
  <View>
  <Text style={{ textAlign : 'center', marginTop : height*0.3 }}>
    Data visit history kosong
  </Text>
</View>
:
<FlatList
        data={reservations}
        renderItem={({item}) => <ListReservation item = {item} />  }
      />
}

   


  
        </ScrollView>
        {/* <Footer focus="Home" navigation={navigation} /> */}
      </SafeAreaView>
    );
  }

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({

header : {
  height : height*0.2,
  backgroundColor : '#E37AB1',
  borderBottomStartRadius : width*0.1,
  borderBottomEndRadius : width*0.1,
  flexDirection : 'row',
},
image : {
  width : width*0.15,
  height : width*0.15,
  borderRadius : width*0.075,
  marginTop : height*0.02,
  marginHorizontal : width*0.03
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