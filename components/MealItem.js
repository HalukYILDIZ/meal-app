import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {withOrientation} from 'react-navigation';
const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => {}}>
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
          <ImageBackground source={{uri: props.image}} style={styles.BGImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}> {props.title}</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{...styles.mealRow, ...styles.mealDetail}}>
          <Text>{props.duration}m</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#d5d5d5',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

    textAlign: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    height: '15%',
  },
  mealHeader: {
    height: '85%',
  },

  BGImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});
export default MealItem;
