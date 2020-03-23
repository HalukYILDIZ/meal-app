import React from 'react';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoriteScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1');
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="bars"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoriteScreen;
