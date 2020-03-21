import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, Text} from 'react-native';
import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';
enableScreens(); // ekran optimizasyonu sağlıyor

const App = () => {
  return <MealsNavigator></MealsNavigator>;
};

const styles = StyleSheet.create({});

export default App;
