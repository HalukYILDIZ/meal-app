import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
const CategoryGridTile = props => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={styles.gridItem} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.76,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,

    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default CategoryGridTile;
