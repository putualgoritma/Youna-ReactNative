import * as React from 'react';
import {Dimensions,Text, View, StyleSheet,TouchableOpacity, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TFavourite, THome, THomeFocus, TProfile, TReservation } from '../src/components/TabMenu';
import SvgUri from 'react-native-svg-uri';


interface FooterProps {
    navigation: any;
    focus: string;
  }
  
  const Footer: React.FC<FooterProps> = (props) => {
    return (
        <View style={{ backgroundColor : "#FFFFFF", height : windowHeight*0.1, marginTop : 'auto', borderTopWidth : 1, borderColor : '#00000050',}}>
  <View style={{ flexDirection : 'row', marginTop : 'auto', marginBottom : 'auto' }}>
<TouchableOpacity onPress={()=>props.navigation.navigate('Home')} style = {styles.navMenu} disabled={props.focus == "Home"?true:false}>
{/* <Icon name="home" size={30} color={props.focus == "Home"?'#256CFC':'#DCDCDC'} /> */}
{/* <View style={styles.icon} /> */}
<THomeFocus
 width={windowWidht*0.07}
 height={windowWidht*0.07}
 fill={"#000"}
/>
{/* <SvgUri
      width="200"
      height="200"
      source={THome}
    /> */}
  {/* <Text>Absen</Text> */}
</TouchableOpacity>

<TouchableOpacity onPress={()=>props.navigation.navigate('ReservationActive')} style = {[styles.navMenu,{  marginLeft : 'auto',}]} disabled={props.focus == "ReservationActive"?true:false}>
{/* <Image source={TReservation} style={styles.icon} /> */}
<TReservation
 width={windowWidht*0.07}
 height={windowWidht*0.07}
 fill={"#000"}
/>
  {/* <Text>User</Text> */}
</TouchableOpacity>

<TouchableOpacity onPress={()=>Alert.alert('pindah halaman')} style = {[styles.navMenu,{  marginLeft : 'auto',}]} disabled={props.focus == "User"?true:false}>
{/* <Image source={TFavourite} style={styles.icon} /> */}
<TFavourite
 width={windowWidht*0.07}
 height={windowWidht*0.07}
 fill={"#000"}
/>
  {/* <Text>User</Text> */}
</TouchableOpacity>

<TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}  style = {[styles.navMenu,{  marginLeft : 'auto',}]} disabled={props.focus == "Profile"?true:false}>
{/* <Image source={TProfile} style={styles.icon} /> */}
<TProfile
 width={windowWidht*0.07}
 height={windowWidht*0.07}
 fill={"#000"}
/>
  {/* <Text>User</Text> */}
</TouchableOpacity>


</View>
</View>
    )
}
const windowWidht =Dimensions.get('window').width;
const windowHeight =Dimensions.get('window').height;
const styles = StyleSheet.create({
    navMenu : {

        alignItems : 'center',
        marginHorizontal : windowWidht*0.1,
      
      },
      icon : {
width : windowWidht*0.07,
height : windowWidht *0.07,
resizeMode: 'contain'
      }
});
export default Footer