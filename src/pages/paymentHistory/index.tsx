import { Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../../footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { Search } from '../../components/Icon';
import { User1 } from '../../components/sementara';

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
  
<View style={styles.header}>
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
</View>
<View>
  <Text style={{ textAlign : 'center', marginTop : height*0.3 }}>
    Data pembayaran kosong
  </Text>
</View>
   
  
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
}


});

export default App