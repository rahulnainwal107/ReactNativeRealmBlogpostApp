import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

type ListHeaderProps = {
  headerTitle: string;
  rightIcons: boolean;
};

const ListHeader = ({headerTitle}: ListHeaderProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text
        style={[styles.headerText, {color: isDarkMode ? 'white' : 'black'}]}>
        {headerTitle}
      </Text>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  headerText: {
    fontSize: 20,
  },
});
