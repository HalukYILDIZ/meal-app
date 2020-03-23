import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: 'bold',
    //marginTop: 5,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
export default DefaultText;
