import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Splashscreen } from '../../components/background';
import { useDispatch } from 'react-redux';
import { SET_DATA_PERMISSION, SET_DATA_TOKEN, SET_DATA_USER } from '../redux/action';
import API from '../service';

export default function index({navigation}) {
    // const [state, setState] = useState(true);

    const dispatch = useDispatch();
    useEffect(() => {
          let isAmounted = false
         if(!isAmounted){
                Promise.all([getDataUser(), getDataToken()])
                .then(response => {
                      if(response[0] !== null && response !== response[1]){
                        // alert('1')
                          dispatch(SET_DATA_USER(response[0]))
                          dispatch(SET_DATA_TOKEN(response[1]))
                          setTimeout(() => {
                              if(response[0].type != "expert"){
                                    navigation.replace('Home')
                              }
                              else{
                                    navigation.replace('HomeExpert')
                              }
                                
                          }, 2000);
                    }else{
                          setTimeout(() => {
                                navigation.replace('Login')
                          }, 2000);
                      }
                }).catch((e) => {
                      setTimeout(() => {
                            navigation.replace('Login')
                      }, 2000);
                      console.log('data local tidak dibaca');
                })
         }
          return () => {
                isAmounted= true
          }
    }, [])


    
    const getDataUser = async () => {
          try {
          const jsonValue = await AsyncStorage.getItem('@LocalUser')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
          // console.log('local user',jsonValue);
          } catch(e) {
          // error reading value
          }
    }
    
    const getDataToken = async () => {
          try {
            const value = await AsyncStorage.getItem('@LocalToken')
            if(value !== null) {
                return value
            }
          } catch(e) {
            // error reading value
          }
    }

    const getDataPermission = async () => {
          try {
                const jsonValue = await AsyncStorage.getItem('@LocalPermission')
                return jsonValue != null ? JSON.parse(jsonValue) : null;
          } catch(e) {
            // error reading value
          }
    }


    const storeDataUser = async (value) => {
          try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@LocalUser', jsonValue)
          } catch (e) {
            console.log('no save')
          }
      }
  
      const storeDataToken = async (value) => {
          try {
            await AsyncStorage.setItem('@LocalToken', value)
          } catch (e) {
            console.log('TOken not Save ')
          }
      }
  
      const storeDataPermission = async (value) => {
          try {
              const jsonValue = JSON.stringify(value)
              await AsyncStorage.setItem('@LocalPermission', jsonValue)
          } catch (e) {
          console.log('no save', e)
          }
      }
  



    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.replace('Login');
    //         // Alert.alert('tesss')
    //       }, 2000);
    // }, []);


  return (
   <ImageBackground source={Splashscreen} style={{ width : width, height : height}}>

   </ImageBackground>
  )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({})