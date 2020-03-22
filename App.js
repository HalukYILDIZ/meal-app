import 'react-native-gesture-handler';
import React from 'react';
//import {StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';
enableScreens(); // ekran optimizasyonu sağlıyor

const App = () => {
  return <MealsNavigator />;
};

//const styles = StyleSheet.create({});

export default App;
