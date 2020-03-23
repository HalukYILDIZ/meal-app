import 'react-native-gesture-handler';
import React from 'react';
//import {StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

enableScreens(); // ekran optimizasyonu sağlıyor

const store = createStore(rootReducer);
const rootReducer = combineReducers({
  meals: mealsReducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

//const styles = StyleSheet.create({});

export default App;
