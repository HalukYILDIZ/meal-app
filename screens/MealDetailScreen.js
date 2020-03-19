import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen!</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MealDetailScreen;
