import { Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../../footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { Search } from '../../components/Icon';

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
  
  <View  style = {styles.search}>
  <TextInput
  style = {{ width : width*0.7 }}
placeholder='Cari Voucher'
/>
<TouchableOpacity style={{ marginTop : height*0.02 }}>
<Image source={Search} style={{ width : width*0.05, height : width*0.05 }}/>
</TouchableOpacity>
</View>

<View style={styles.navMenu}>
<TouchableOpacity onPress={()=>{setActive(1)}} style={[styles.navButton,active === 1? { borderBottomWidth : 2} : null]}>
<Text style={styles.text3}>Semua</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{setActive(2)}} style={[styles.navButton,active === 2? { borderBottomWidth : 2} : null]}>
<Text style={styles.text3}>Terpakai</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{setActive(3)}}  style={[styles.navButton,active === 3? { borderBottomWidth : 2} : null]}>
<Text style={styles.text3}>Tidak Berlaku</Text>
</TouchableOpacity>
    </View>
<ScrollView style={styles.menu}>
    
    <View style={styles.content}>
<Text>Data Voucher Kosong</Text>
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
    height : height*0.65,
    width : width*0.78,
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
}


});

export default App