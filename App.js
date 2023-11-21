import React from 'react';
import Router from './src/router';
import {store} from './src/pages/redux';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
const App = () => {
  LogBox.ignoreLogs(['Setting a timer', 'Animated: `useNativeDriver`']);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
