import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import MainStack from './components/navigate';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <MainStack />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
