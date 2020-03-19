import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealScreen!</Text>
      <Button
        title="MealDetailScreen"
        onPress={() => {
          //props.navigation.navigate('MealDetail');
          props.navigation.push('MealDetail');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
