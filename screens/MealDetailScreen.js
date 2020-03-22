import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import HeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/FontAwesome';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="MealDetailScreen"
        onPress={() => {
          //props.navigation.navigate('MealDetail');
          props.navigation.push('MealDetail'); //aynı sayfada farklı içerikle navigasyon sağlar navigate den farklı olarak
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MealDetailScreen;
