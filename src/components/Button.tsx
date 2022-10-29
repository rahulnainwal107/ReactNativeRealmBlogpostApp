import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';

type ButtonComponentProps = {
  name: string;
  onPress?: () => void;
  customStyle?: ViewStyle;
};

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
