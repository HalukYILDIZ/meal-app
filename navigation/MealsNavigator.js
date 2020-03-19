import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMealScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FilterScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMeals,
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
