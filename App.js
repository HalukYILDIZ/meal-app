import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, Text} from 'react-native';

import MealsNavigator from './navigation/MealsNavigator';

const App = () => {
  return <MealsNavigator></MealsNavigator>;
};

const styles = StyleSheet.create({});

export default App;
