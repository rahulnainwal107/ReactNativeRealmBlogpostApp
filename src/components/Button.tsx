import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {ButtonComponentProps} from '../types/index';

const ButtonComponent = ({
  name,
  onPress,
  customStyle,
}: ButtonComponentProps) => {
  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
      <Text style={styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    letterSpacing: 1,
  },
});
