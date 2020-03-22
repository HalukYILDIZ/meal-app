import React from 'react';
import {Platform} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

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
const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
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
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabinfo => {
        return <Icon name="cutlery" size={25} color={tabinfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarIcon: tabinfo => {
        return <Icon name="star" size={25} color={tabinfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        //activeTintColor: Colors.accentColor,
        // activeColor: Colors.accentColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
