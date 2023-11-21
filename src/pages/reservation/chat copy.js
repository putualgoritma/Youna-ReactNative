import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';

export default function chat({navigation, route}) {
  // Set an initializing state whilst Firebase connects
  const TOKEN = useSelector(state => state.TokenReducer);
  const USER = useSelector(state => state.UserReducer);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [messages, setMessages] = useState([]);

  const data = route.params.data;
  const expert_id = data.availabilities[0].clinic_customers.customers.id;
  const order_id = data.id;

  async function onSend(text) {
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

    firestore()
      .collection('THREADS')
      .doc('PuJKVN4vEgMnujEi3OuU')
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: '10',
          email: 'budi@gmail.com',
        },
      });

    await firestore()
      .collection('THREADS')
      .doc('PuJKVN4vEgMnujEi3OuU')
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

  async function getChats() {
    const messagesListener = firestore()
      .collection('chats')
      //   .where('recipient_id', 'in', [2, recipient.id])
      // .where('order_id', '==', order_id)
      // .orderBy('order_id', 'desc')
      .where('order_id', '==', order_id)
      // .orderBy('order_id', 'desc')
      .orderBy('createdAt', 'desc')

      // .get()
      // .orderBy('createdAt', 'asc')

      // .where('recipient_id', '==', recipient.id)
      // .where('sender_id', '==', 2)
      // .get()
      .onSnapshot(querySnapshot => {
        // console.log('ini jumlah log', querySnapshot.docs.length);
        // if (querySnapshot.docs) {
        //   const messages = querySnapshot.docs.map(doc => {
        //     const firebaseData = doc.data();
        //     const data = {
        //       _id: doc.id,
        //       text: '',
        //       createdAt: new Date().getTime(),
        //       ...firebaseData,
        //     };
        //     console.log('ini data log', firebaseData);
        //     // if (!firebaseData.system) {
        //     //   data.user = {
        //     //     ...firebaseData.user,
        //     //     name: firebaseData.user.email,
        //     //   };
        //     // }
        //     return data;
        //   });
        //   setMessages(messages);
        // }
        // console.log('djdhddndmd', messages);
      });
  }

  useEffect(() => {
    // loginForm();
    getChats();
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
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: USER.id,
      }}
    />
  );
}
