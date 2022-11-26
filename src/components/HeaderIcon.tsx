import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {HeaderIconProps} from '../types/index';

const HeaderIcon = ({showIcon, onPress}: HeaderIconProps) => {
  return (
    <View style={styles.container}>
      {showIcon ? (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../assets/plus.png')}
            style={{height: 25, width: 25, tintColor: 'green'}}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default HeaderIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    marginHorizontal: 5,
  },
});
