import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
//import FilterScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const MealsNavigator = createStackNavigator(
  {
    Categories: {screen: CategoriesScreen},
    CategoryMeals: {screen: CategoryMealScreen},
    MealDetail: {screen: MealDetailScreen},
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Meal Categories',
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: 'white',
    },
  },
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabinfo => {
          return <Icon name="cutlery" size={25} color={tabinfo.tintColor} />;
        },
      },
    },
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: tabinfo => {
          return <Icon name="star" size={25} color={tabinfo.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  },
);

export default createAppContainer(MealsFavTabNavigator);
