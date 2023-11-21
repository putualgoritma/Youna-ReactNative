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
import { useSelector } from 'react-redux';



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

function ListClinic({item}:ReservationProps): JSX.Element {

  const TOKEN = useSelector((state) => state.TokenReducer);
  const USER = useSelector((state) => state.UserReducer);

    return(
        <View style={{ borderRadius : 2 ,marginTop : height*0.01 ,width : width*0.84, padding : width*0.03 , marginLeft :'auto', marginRight : 'auto', backgroundColor : '#FFFFFF' }}>
    {/* <Text>{schedule_id}</Text> */}
    <Text style={styles.title}>Jadwal Reservasi</Text>
    <Text style={styles.label}>Tanggal :</Text>
    <Text style={styles.data}>{item.date}</Text>
    <Text style={styles.label}>Jam :</Text>
    <Text style={styles.data}>{item.schedule_time}</Text>
    <Text style={styles.label}>Expert :</Text>
    <Text style={styles.data}>{item.doctor}</Text>
    <Text style={styles.label}>Klinik :</Text>
    <Text style={styles.data}>{item.clinic}</Text>
 
</View>
     
  )}


  
  function App({navigation, route}:apps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const [reservations, setReservations] = useState([{}]);

    useEffect(() => {
    setReservations([
       {id : 1,date: '20-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : true},
       {id : 2,date: '01-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
       {id : 3,date: '10-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
       {id : 4,date: '13-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
       {id : 5,date: '16-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
       {id : 6,date: '18-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
       {id : 7,date: '24-09-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
       {id : 8,date: '28-10-2023', schedule_time : '18:00', doctor : 'joeal',clinic : 'Klinik A', statusActive : false},
    ])
    }, []);


    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      
      
    };


    const [selected, setSelected] = useState('');  
  
    return (
      <SafeAreaView style={[backgroundStyle,{flex : 1 }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[backgroundStyle]}>

<FlatList
        data={reservations}
        renderItem={({item}) => <ListClinic item = {item} />  }
      />

           
  
        </ScrollView>
        <Footer focus="ReservationActive" navigation={navigation} />
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