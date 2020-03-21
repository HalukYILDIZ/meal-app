import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        id={itemData.item.id}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {categoryId: itemData.item.id},
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};
// CategoriesScreen.navigationOptions = {
//   headerTitle: 'Meal Categories',
//   headerStyle: {
//     backgroundColor: Colors.primaryColor,
//   },
//   headerTintColor: 'white',
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
  },
});
export default CategoriesScreen;
