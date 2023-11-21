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
placeholder='Cari Article'
/>
<TouchableOpacity style={{ marginTop : height*0.02 }}>
<Image source={Search} style={{ width : width*0.05, height : width*0.05 }}/>
</TouchableOpacity>
</View>

<ScrollView style={styles.menu}>
    
 
<View style={{ height : height*0.15, borderBottomWidth : 1, justifyContent : 'center', borderColor : '#00000030'}}>
  <View style={{ flexDirection : 'row', marginLeft :  width*0.03  }}>

  <View style={{ marginHorizontal : width*0.02 ,height : height*0.12, width : width*0.3, backgroundColor : '#00000070', borderRadius :  width*0.04 }}>

</View>
<View>
  <Text style={{ fontSize : 9 }}>
    informasi
  </Text>
  <Text style = {{ fontWeight : 'bold' }}>
    Judul Artikel
  </Text>
  <Text style={{ fontSize : 10, marginTop : height*0.02 }}>
    By (Author)
  </Text>
</View>
  </View>
  

    </View>

    <View style={{ height : height*0.15, borderBottomWidth : 1, justifyContent : 'center', borderColor : '#00000030'}}>
  <View style={{ flexDirection : 'row', marginLeft :  width*0.03  }}>

  <View style={{ marginHorizontal : width*0.02 ,height : height*0.12, width : width*0.3, backgroundColor : '#00000070', borderRadius :  width*0.04 }}>

</View>
<View>
  <Text style={{ fontSize : 9 }}>
    informasi
  </Text>
  <Text style = {{ fontWeight : 'bold' }}>
    Judul Artikel
  </Text>
  <Text style={{ fontSize : 10, marginTop : height*0.02 }}>
    By (Author)
  </Text>
</View>
  </View>
  

    </View>

    <View style={{ height : height*0.15, borderBottomWidth : 1, justifyContent : 'center', borderColor : '#00000030'}}>
  <View style={{ flexDirection : 'row', marginLeft :  width*0.03  }}>

  <View style={{ marginHorizontal : width*0.02 ,height : height*0.12, width : width*0.3, backgroundColor : '#00000070', borderRadius :  width*0.04 }}>

</View>
<View>
  <Text style={{ fontSize : 9 }}>
    informasi
  </Text>
  <Text style = {{ fontWeight : 'bold' }}>
    Judul Artikel
  </Text>
  <Text style={{ fontSize : 10, marginTop : height*0.02 }}>
    By (Author)
  </Text>
</View>
  </View>
  

    </View>

    <View style={{ height : height*0.15, borderBottomWidth : 1, justifyContent : 'center', borderColor : '#00000030'}}>
  <View style={{ flexDirection : 'row', marginLeft :  width*0.03  }}>

  <View style={{ marginHorizontal : width*0.02 ,height : height*0.12, width : width*0.3, backgroundColor : '#00000070', borderRadius :  width*0.04 }}>

</View>
<View>
  <Text style={{ fontSize : 9 }}>
    informasi
  </Text>
  <Text style = {{ fontWeight : 'bold' }}>
    Judul Artikel
  </Text>
  <Text style={{ fontSize : 10, marginTop : height*0.02 }}>
    By (Author)
  </Text>
</View>
  </View>
  

    </View>

 

</ScrollView>
<View>
  <TouchableOpacity style={styles.btn_filter}>
    <Text style={styles.btn_filter_text}>Category</Text>
  </TouchableOpacity>
</View>
  
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


});

export default App