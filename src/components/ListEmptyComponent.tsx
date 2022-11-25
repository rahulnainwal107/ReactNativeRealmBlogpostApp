import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

type ListEmptyComponent = {
  onPress?: () => void;
};

const ListEmptyComponent: React.FC<ListEmptyComponent> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.textStyle}>
        No blog post available!{'\n'}Add new blog
      </Text>
    </TouchableOpacity>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'grey',
    padding: 40,
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
  },
});
