import { Dimensions, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../../footer';

interface apps {
    navigation: any;
    focus: string;
  }
  
  function App({navigation}:apps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
  
  
    return (
      <SafeAreaView style={[backgroundStyle,{flex : 1}]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
  
   
  
        </ScrollView>
        <Footer focus="Home" navigation={navigation} />
      </SafeAreaView>
    );
  }

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({


  profileImage :{
    width : width*0.12,
    height : width*0.12,
    borderRadius : width*0.06,
    margin : width*0.02,
    marginLeft : 'auto',
    backgroundColor : '#000000',
   
  },


});

export default App