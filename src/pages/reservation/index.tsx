import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
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



interface apps {
    navigation: any;
    focus: string;
    checked : string;
  }

  type ClinicProps = PropsWithChildren<{
    item : string;
    functions : any;
    key : number;
  }>;

  type ExpertProps = PropsWithChildren<{
    item : string;
    functions : any;
    key : number;
  }>;
  

  function ListClinic({item, functions}:ClinicProps): JSX.Element {
    return(
      <TouchableOpacity style={styles.item} onPress={()=>{functions(item)}}>
          <View style={styles.row1}>
          <Text >{item.name}</Text>
          </View>
          <View  style={styles.row2}>
          <Image source={Star} style={{ width : width*0.05, height : width*0.05, resizeMode : 'contain', marginLeft : 'auto'  } }></Image>
          <Text>{item.rating}</Text>
          </View>
      </TouchableOpacity>
     
  )}


  function ListExpert({item,functions}:ExpertProps): JSX.Element {
    return(
      <TouchableOpacity style={styles.item} onPress={()=>{functions(item)}}>
          <View style={styles.row1}>
          <Text >{item.customers.name}</Text>
          </View>
          <View  style={styles.row2}>
          <Image source={Star} style={{ width : width*0.05, height : width*0.05, resizeMode : 'contain', marginLeft : 'auto'  } }></Image>
          <Text>{item.rating}</Text>
          </View>
      </TouchableOpacity>
     
  )}

  
  function App({navigation}:apps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const TOKEN = useSelector((state) => state.TokenReducer);
    const USER = useSelector((state) => state.UserReducer);

    const [active,setActive] = useState(1);
    const [clinicItem,setClinicItem] = useState(false);
    const [doctorItem,setDoctorItem] = useState(false);

    const [clinicName,setClinicName] = useState("");
    const [doctorName,setDoctorName] = useState("");
    const [clinicRating,setClinicRating] = useState("");
    const [doctorRating,setDoctorRating] = useState("");
    const [clinicId,setClinicId] = useState("");
    const [doctorId,setDoctorId] = useState("");
    const [doctorClinicId,setDoctorClinicId] = useState("");

    const [showDoctorItem, setShowDoctorItem] = useState(false);
    const [showCalender, setShowClender] = useState(false);
    const [showTimeSchedule, setShowTimeSchedule] = useState(false);

    const [doctors, setDoctors] = useState([]);
    const [clinics, setClinics] = useState([]);
    const [timeSchedule, setTimeSchedule] = useState([]);
    const [timeScheduleActive, setTimeScheduleActive] = useState("");

    const [schedule_id, setSchedule_id] = useState('');
    const [schedule_time, setSchedule_time] = useState('');


//     const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODY3ZWNmZjFhMjNlOGI2NGU0Y2U3MTg3YzYxZDgxMTg0OWM2NTMzZjVmYjViNzljNTcwMTA1NTg3MGU4ZGY1OWE1NmVkODU5OTZiYjk0ZTYiLCJpYXQiOjE2OTg5NzEwMzAsIm5iZiI6MTY5ODk3MTAzMCwiZXhwIjoxNzMwNTkzNDMwLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.BZSahmJEoTB3jjsdym-aGVrBfAMnNB_EQEFdg2_IbahLfGOK98bZkcblp8bN0bnVeqgzTpC66KBQMKLIBx2tPIS5HDljNPNu4Ge6bMNoSDp8yEgHXgB5OmXfWLF8myJSdoAmgLFQmYyGc8NAmDpbnH7Y20_H3RSPcBiAx4oZQvEnLPo-DfAt6KhSPJs5SMQWCOhMn67vj1_q3eDcTO1jKSpchb6azmaPfBws9e33MyTfN-NJd2ENpntCpvKyp9k3WUg1xPDG4RGjb5Cn3BHEMsj5oNAnFXqrlPw45sAnftJSja2FGLrVCkogZPY9_JFu7PUgtAtKm93vLtIi4o55DKB-OiFIcpwgHCdxJW_u1aPL0UAbAJTiLRjEeHcmNr0VqYqE4-a0Pl8292dSX0La3Y93ujTEZOsAtKRV1jAbRo0hMuYWBI4XkQs4gWL-op_PIz7MRRnp8gGQDryeuorVd5oQfeuK4DEL_p4_vH4TWxJgD68nWaV8y8BSgUlLvH049Je2Kkj9_jlYwJHYoeGzIr2lJgk5ElUJy-fvLGAY6RnhtlpAhJn_PQLovy7h0_kY11CJhMrYlAG8_0kXRQ9ccdVkv2t6Q7mFElRjw-daCvhHCWjGAGisyTzsXdrHstGvwITMCeUh2cK0uiT7oMTGRUz-Ji93CmHdqGwvWadw0_k";
    
// const USER ='';

    const getData = () => {
      // setLoading(true);
      API.getClinics(TOKEN).then(result => {
        if (result) {
          console.log(result.data);
          setClinics(result.data);
          // setLoading(false);
        } else {
          alert(result.message);
        }
      });
    };

    const getDataExpert = (id : number) => {
      // setLoading(true);
      // alert(id);
      API.getCustomers(id,TOKEN).then(result => {
        if (result) {
          console.log(result.data);
          setDoctors(result.data);
          // setLoading(false);
        } else {
          alert(result.message);
        }
      });
    };

    
    const getDataAvaiblelities = (id : string, date : string) => {
      // setLoading(true);
      // alert('qw')
      API.getAvaiblelities(id, date, TOKEN).then(result => {
        if (result) {
          console.log(id,date,'ini data scedule : ',result.data);
          // setDoctors(result.data);
          setTimeSchedule(result.data)
          // setLoading(false);
        } else {
          alert(result.message);
        }
      });
    };



    useEffect(() => {
    //  setDoctors(
    //   [{id : 1,name: 'Joeal', rating : '4.0'},
    //  {id : 2,name: 'John', rating : '5.0'},
    //  {id : 3,name: 'Jillian', rating :'4.5'},
    //  {id : 4,name: 'Jimmy', rating : '4.8'},
    //  {id : 5,name: 'Julie', rating : '4.6'}])

    //  setClinics(
    //   [
    //     {id : 1,name: 'klinik A', rating : '4.4'},
    //     {id : 2,name: 'Klinik B', rating : '4.9'},
    //     {id : 3,name: 'Klinik C', rating : '4.8'},
    //     {id : 4,name: 'Klinik D', rating : '4.7'},
    //     {id : 5,name: 'Klinik E', rating : '4.7'},
    //   ])

      // setTimeSchedule([
      //   {id : 1, time : '08:00'},
      //   {id : 2, time : '11:00'},
      //   {id : 3, time : '13:00'},
      //   {id : 4, time : '15:00'},
      //   {id : 5, time : '19:00'},
      //   {id : 6, time : '22:00'},
      // ])

      getData()
    
     console.log('ini data', doctors)
  }, []);

  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      
      
    };

    const [selected, setSelected] = useState('');

    const selectClinic = (item : any) => {
       setClinicName(item.name);
       setClinicRating(item.rating);
       setClinicId(item.id);
       setClinicItem(false);

       getDataExpert(item.id)
      

       if(item.id != clinicId){
        setShowDoctorItem(true);
        setDoctorItem(false);
        setDoctorName('');
        setDoctorRating('');

        setShowClender(false);
        setTimeScheduleActive('');
        setSchedule_id('');
        setShowTimeSchedule(false);
        setSelected('');
       }
       else{
        setShowDoctorItem(true);
       }
    }

    const selectDoctor = (item : any) => {
      setDoctorName(item.customers.name);
      setDoctorRating(item.customers.rating);
      setDoctorId(item.customers.id)
      setDoctorClinicId(item.id);
      setDoctorItem(false);
      setShowClender(true);

      if(item.id != doctorId){
        setShowTimeSchedule(false);
        setTimeScheduleActive('');
        setSchedule_id('');
        setSelected('');
      }
      else{

      }
     
      
   }

   const selectCalendar = (item : any) => {
    setSelected(item.dateString);
    console.log('ini dipilih' , item.dateString)
    getDataAvaiblelities(doctorClinicId ,item.dateString);
    if(!showTimeSchedule){
    setShowTimeSchedule(true);
   
    }
    else{
      setTimeScheduleActive('');
      setSchedule_id('');
    }
   }

   const selectTime = (item : string, time : string) => {
    setTimeScheduleActive(item.toString());
    setSchedule_id(item.toString());
    setSchedule_time(time.toString());
    console.log('ini dipilih' , item)
   }
  
  
  
    return (
      <SafeAreaView style={[backgroundStyle,{flex : 1 }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />



        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[backgroundStyle]}>
  
{/* <View style={styles.header}>
 <TouchableOpacity style={styles.btn}>
  <Text style={{ margin : width*0.01 }}>Semua</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.btn}>
  <Text style={{ margin : width*0.01 }}>Dibayar</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.btn}>
  <Text style={{ margin : width*0.01 }}>Belum Dibayar</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.btn}>
  <Text style={{ margin : width*0.01 }}>Pembatalan</Text>
 </TouchableOpacity>
</View> */}

<View style={{ width: width*0.9, marginLeft : 'auto',
  marginRight : 'auto', }}>

<TouchableOpacity style={ styles.btnLabel } onPress={()=>{setClinicItem(!clinicItem)}}>
<Image source={Clinic} style={styles.icon}/>
  <Text style={styles.label}>{clinicName == "" ?"clinic":clinicName}</Text>

  <View style={{ marginLeft : 'auto', flexDirection :'row' }}>
{clinicRating != "" &&
<>
<Image source={Star} style={{ marginTop : 'auto', width : width*0.05, height : width*0.05, resizeMode : 'contain', marginLeft : 'auto'  } }></Image>
<Text style={{ marginTop : 'auto' }}>{clinicRating }</Text>
</>
}


  <Image source={Arrow} style={ clinicItem ? styles.rowSelect :styles.row }/>
  </View>
</TouchableOpacity>
{clinicItem &&
  <View style ={styles.viewlist}>
      <FlatList
        data={clinics}
        renderItem={({item}) => <ListClinic item = {item} functions = {selectClinic} />  }
      />

</View>
}

{showDoctorItem &&
  <TouchableOpacity style={ styles.btnLabel }  onPress={()=>{setDoctorItem(!doctorItem)}} >
    <Image source={Expert} style={styles.icon}/>
  <Text style={styles.label}>{doctorName == "" ? "Pilih Expert" : doctorName}</Text>
  <View style={{ marginLeft : 'auto', flexDirection :'row' }}>
  {doctorRating != "" &&
<>
<Image source={Star} style={{  marginTop : 'auto',width : width*0.05, height : width*0.05, resizeMode : 'contain'  } }></Image>
  <Text style={{ marginTop : 'auto' }}>{doctorRating }</Text>
</>
}
  <Image source={Arrow} style={ doctorItem ? styles.rowSelect :styles.row }/>
  </View>

</TouchableOpacity>
 }

{doctorItem &&
   <View style ={styles.viewlist}>
<FlatList
        data={doctors}
        renderItem={({item}) => <ListExpert item = {item} functions = {selectDoctor}  />  }
      />
  </View>

}

{showCalender &&
  <Calendar
      minDate={new Date()}
      disableAllTouchEventsForDisabledDays={true}
      onDayPress={day => {
        selectCalendar(day)
        // alert('halo');
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
}
</View>


{ showTimeSchedule &&
<View style={{marginLeft : 'auto',
  marginRight : 'auto', width: width*0.8, }}>

<Text style={[styles.label, {marginVertical : width*0.02} ]}>
  Pilih Jam Tersedia
</Text>
</View>
  }

{ showTimeSchedule &&
  <View style={{ flexDirection : 'row', width: width*0.8,  flexWrap: 'wrap',   marginLeft : 'auto',
  marginRight : 'auto', }}>

{timeSchedule.map((index, key)=>{
return(
  <TouchableOpacity onPress={()=>{selectTime(index.id, index.start + "-" + index.end)}} style={[styles.btnTime, timeScheduleActive == index.id ? { borderWidth : 3, borderColor : 'red' } : {}]} key={key}>
        <Text style={{color : '#FFFFFF', fontWeight : 'bold'}}>{index.start} - {index.end}</Text>
  </TouchableOpacity>
)
})
  }
{timeSchedule.length <= 0 &&
<>
 <Text style= {{textAlign : 'center', fontWeight : 'bold' }}>
 Jadwal yang dipilih tidak tersedia untuk saat ini
   </Text>
   <Text style= {{textAlign : 'center' }}>
 Silahkan ubah jadwal atau expert yang tersedia
   </Text>
   </>
}
 
  
</View>
}



{/* <View>
  <Text style={{ textAlign : 'center', marginTop : height*0.3 }}>
   404 Not Found
  </Text>
</View> */}
   
  
        </ScrollView>
        <TouchableOpacity
        onPress={()=>{navigation.navigate("ReservationCreate",{data : {schedule_id : schedule_id, doctor : doctorName, clinic : clinicName, date : selected, schedule_time : schedule_time}})}}
        style={[styles.button, schedule_id != "" ? {}:{backgroundColor : '#E0E0E0'}]} disabled ={schedule_id != "" ? false : true } >
          <Text style={{ color : '#FFFFFF', fontWeight : 'bold', fontSize : 24 }}>
            konsultasi Sekarang
          </Text>
        </TouchableOpacity>
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
  marginTop : -height*0.02,
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
  fontSize : 14,
  fontWeight : 'bold'
},
icon : {
  width : width*0.06,
  height : width*0.06,
  marginRight : width*0.03,
},
row : {
  marginTop : 'auto',
  width : width*0.03,
  height : width*0.03,
  marginRight : width*0.03,
  marginLeft : width*0.03,
  // transform: [{ rotate: '90deg'}]
},
rowSelect : {
  marginTop : 'auto',
  width : width*0.03,
  height : width*0.03,
  marginRight : width*0.03,
  transform: [{ rotate: '90deg'}],
  marginLeft : width*0.03,
}

});

export default App