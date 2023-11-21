import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/home';
import HomeExpert from '../pages/home/expert';
import Login from '../pages/login';
import Register from '../pages/register'
import Splashscreen from '../pages/splashscreen'
import Voucher from '../pages/voucher'
import MemberShip from '../pages/membership'
import Doctor from '../pages/doctor'
import PriceList from '../pages/priceList'
import PriceDetail from '../pages/priceList/detail'
import Promo from '../pages/promo'
import VisitHistory from '../pages/visitHistory'
import PaymentHistory from '../pages/paymentHistory'
import Maintenance from '../pages/maintenance'
import Article from '../pages/article'
import ClinicTour from '../pages/clinicTour'
import Testimoni from '../pages/testimoni'
import Profile from '../pages/profile'
import NearestClinic from '../pages/nearestClinic'
import Reservation from '../pages/reservation'
import ReservationCreate from '../pages/reservation/create'
import ReservationActive from '../pages/reservation/active'
import ReservationDetail from '../pages/reservation/detail'
import ReservationChat from '../pages/reservation/chat'
import HistoryExpert from '../pages/doctor/history'
import ScanQr from '../pages/qr_scan'


const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splashscreen">
        <Stack.Screen
        name="ScanQr"
        component={ScanQr}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="Voucher"
        component={Voucher}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="MemberShip"
        component={MemberShip}
      />
         <Stack.Screen
        name="Doctor"
        component={Doctor}
      />
         <Stack.Screen
        name="PriceList"
        component={PriceList}
      />
         <Stack.Screen
        name="Promo"
        component={Promo}
      />
         <Stack.Screen
        name="VisitHistory"
        component={VisitHistory}
      />

<Stack.Screen
        name="PaymentHistory"
        component={PaymentHistory}
      />
      <Stack.Screen
        name="Maintenance"
        component={Maintenance}
      />
        <Stack.Screen
        name="Article"
        component={Article}
      />
       <Stack.Screen
        name="ClinicTour"
        component={ClinicTour}
      />
         <Stack.Screen
        name="Testimoni"
        component={Testimoni}
      />
         <Stack.Screen
        name="NearestClinic"
        component={NearestClinic}
      />

<Stack.Screen
        name="Reservation"
        component={Reservation}
      />

<Stack.Screen
        name="ReservationCreate"
        component={ReservationCreate}
      />

<Stack.Screen
        name="ReservationActive"
        component={ReservationActive}
      />
      
      <Stack.Screen
        name="PriceDetail"
        component={PriceDetail}
      />

<Stack.Screen
        name="ReservationDetail"
        component={ReservationDetail}
      />

<Stack.Screen
        name="HistoryExpert"
        component={HistoryExpert}
      />

<Stack.Screen
        name="ReservationChat"
        component={ReservationChat}
      />
   
   <Stack.Screen
        name="HomeExpert"
        component={HomeExpert}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};
export default Router;
