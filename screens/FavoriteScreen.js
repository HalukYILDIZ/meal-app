import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoriteScreen = props => {
  return (
    <View>
      <Text>The FavoriteScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justtifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoriteScreen;
