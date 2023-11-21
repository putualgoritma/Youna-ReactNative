import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StyleSheet, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import API from '../service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loading from '../loading';

export default function chat({navigation, route}) {
  // Set an initializing state whilst Firebase connects
  const TOKEN = useSelector(state => state.TokenReducer);
  const USER = useSelector(state => state.UserReducer);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [messages, setMessages] = useState([]);

  const data = route.params.id;
  const namaPenerima = route.params.namaPenerima;
  const id_peneima = route.params.id_penerima;
  const status = route.params.status;
  const id_konsultasi = route.params.id_konsultasi;
  const [loading, setLoading] = useState(false);
  // const expert_id = data.availabilities[0].clinic_customers.customers.id;
  const order_id = data;

  async function onSend(messages) {
    const text = messages[0].text;
    // alert(recipient.id);

    // firestore()
    //   .collection('chats')
    //   // .doc(recipient.id)
    //   .add({
    //     text: messages[0].text,
    //     createdAt: new Date().getTime(),
    //     recipient_id: expert_id.toString(),
    //     order_id: order_id,
    //     // sender_id: 2,
    //     user: {
    //       _id: USER.id,
    //       email: USER.email,
    //     },
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });
    const data = {
      id: id_peneima,
      memo: text,
    };
    API.postReservationPushOnesignal(data, TOKEN).then(result => {
      if (result) {
      } else {
      }
    });

    firestore()
      .collection('THREADS')
      .doc(order_id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: USER.id,
          email: USER.email,
        },
      });

    await firestore()
      .collection('THREADS')
      .doc(order_id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime(),
          },
        },
        {merge: true},
      );

    // if (roomName.length > 0) {
    // firestore()
    //   .collection('THREADS')
    //   .add({
    //     name: 'tesss',
    //     latestMessage: {
    //       text: `You have joined the room tess`,
    //       createdAt: new Date().getTime(),
    //     },
    //   })
    //   .then(docRef => {
    //     docRef.collection('MESSAGES').add({
    //       text: `You have joined the room tess`,
    //       createdAt: new Date().getTime(),
    //       system: true,
    //     });
    //     // navigation.navigate('Home');
    //   });
    // }
  }

  function close() {
    setLoading(true);
    console.log('berhasil', id_konsultasi);
    const data1 = {
      id: id_konsultasi,
      status: 'closed',
    };
    Alert.alert('Tutup', 'Apa anda yakin menutup konsultasi ?', [
      {
        text: 'Ya',
        onPress: () => {
          API.postReservationStatus(data1, TOKEN).then(result => {
            if (result) {
              console.log(result);
              alert('Konsultasi sudah selesai');
              setLoading(false);
              navigation.goBack();
            } else {
            }
          });
        },
      },
      {
        text: 'Tidak',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      // {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  async function getChats() {
    const messagesListener = firestore()
      .collection('THREADS')
      .doc(order_id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        console.log('ini data ::', querySnapshot.docs);
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData,
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.email,
            };
          }

          return data;
        });

        setMessages(messages);
      });

    // Stop listening for updates whenever the component unmounts
    // return () => messagesListener();
  }

  useEffect(() => {
    // loginForm();
    getChats();
    console.log(order_id);
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // console.log('ini hasil', subscriber);
    // return subscriber; // unsubscribe on unmount
  }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={{flex: 1}}>
      {loading ? <Loading /> : null}
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            height: height * 0.07,
            borderBottomWidth: 1,
            borderColor: '#00000030',
            // justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: height * 0.05,
              height: height * 0.05,
              backgroundColor: '#00000050',
              borderRadius: (height * 0.05) / 2,
              marginLeft: width * 0.03,
              marginTop: height * 0.01,
            }}></View>
          <Text style={{marginLeft: width * 0.02, marginTop: height * 0.01}}>
            {namaPenerima}
          </Text>
        </View>

        {status == 'activated' && (
          <TouchableOpacity
            onPress={() => {
              close();
            }}
            style={{
              width: width * 0.8,
              height: height * 0.045,
              backgroundColor: '#E37AB1',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}>
              Akhiri Konsultasi
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {status != 'activated' ? (
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          renderInputToolbar={() => {
            return null;
          }}
          user={{
            _id: USER.id,
          }}
        />
      ) : (
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: USER.id,
          }}
        />
      )}
      {status != 'activated' && (
        <Text style={{marginVertical: 20, textAlign: 'center', color: 'grey'}}>
          Sesi sudah berakhir
        </Text>
      )}
    </View>
  );
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({});
