import { Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../../footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { Search } from '../../components/Icon';
import { Card1, Note } from '../../components/sementara';

interface apps {
    navigation: any;
    focus: string;
    checked : string;
  }
  
  function App({navigation}:apps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const [active,setActive] = useState(1);
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      
    };
  
  
  
    return (
      <SafeAreaView style={[backgroundStyle,{flex : 1 }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[backgroundStyle]}>

<Image source={Note} style={styles.card1}/>

<Image source={Card1} style={styles.card}/>

  
<TouchableOpacity style={styles.btn}>
<Text style={styles.btnText}>UPGRADE MEMBER</Text>
</TouchableOpacity>

<View style={styles.navMenu}>
<TouchableOpacity onPress={()=>{setActive(1)}} style={[styles.navButton,active === 1? { borderBottomWidth : 2} : null]}>
<Text style={styles.text3}>Silver</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{setActive(2)}} style={[styles.navButton,active === 2? { borderBottomWidth : 2} : null]}>
<Text style={styles.text3}>Gold</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{setActive(3)}}  style={[styles.navButton,active === 3? { borderBottomWidth : 2} : null]}>
<Text style={styles.text3}>Platinum</Text>
</TouchableOpacity>
    </View>
<ScrollView style={styles.menu}>
    
    <View style={styles.content}>
<Text style={{ fontWeight : 'bold' }} >Benefit 1</Text>
<Text>Akses promo special di aplikasi You'na Online Clinic</Text>
    </View>
</ScrollView>
   
  
        </ScrollView>
        {/* <Footer focus="Home" navigation={navigation} /> */}
      </SafeAreaView>
    );
  }

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({

text3 : {
fontSize : 11,
},
search : {
    width : width*0.8,
    flexDirection : 'row',
    borderBottomWidth : 1,
    marginLeft : 'auto',
    marginRight : 'auto',
},
menu : { 
    height : height*0.13,
    width : width*0.9,
    borderBottomLeftRadius : width*0.03,
    borderBottomRightRadius : width*0.03,
    // backgroundColor : 'red',
    marginLeft : 'auto',
    marginRight : 'auto',
    borderWidth : 1,
    borderColor : '#00000030'
},
navMenu : { 
    height : height*0.05,
    flexDirection : 'row',
    // marginBottom : -height*0.05,
    width : width*0.9,
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
  // justifyContent : 'center',
  // alignItems : 'center',
  marginTop : height*0.01,
  marginHorizontal : width*0.02
  // height : height*0.5
},
btn : {
  width :width*0.9,
  marginLeft : 'auto',
  marginRight : 'auto',
  backgroundColor :'#E37AB1',
  borderRadius : width*0.02
},
btnText : {
  fontSize : 20,
  color : '#FFFFFF',
  fontWeight : 'bold',
  textAlign : 'center',
  marginVertical : height*0.01
},
card : {
  width :width*0.9,
  height : height*0.3,
  marginLeft : 'auto',
  marginRight : 'auto'
},

card1 : {
  marginTop : height*0.02,
  width :width*0.9,
  height : height*0.07,
  marginLeft : 'auto',
  marginRight : 'auto'
}

});

export default App