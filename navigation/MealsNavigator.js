import React from 'react';
//import {Platform} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FilterScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultNavigationOptions = {
  headerTitle: 'Meal Categories',
  // headerTitleStyle: {
  //   color: 'white',
  // },
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: 'white',
};

const FiltersNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  },
);

const MealsNavigator = createStackNavigator(
  {
    Categories: {screen: CategoriesScreen},
    CategoryMeals: {screen: CategoryMealScreen},
    MealDetail: {screen: MealDetailScreen},
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  },
);
const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
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
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabinfo => {
        return <Icon name="star" size={25} color={tabinfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: 'white',
    tabStyle: {backgroundColor: Colors.primaryColor},
    barStyle: {
      backgroundColor: Colors.accentColor,
    },
  },
});

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
    },
  },
);

export default createAppContainer(MainNavigator);
