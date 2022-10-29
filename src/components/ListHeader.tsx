import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

import HeaderIcon from './HeaderIcon';

type ListHeaderProps = {
  headerTitle: string;
  rightIcons: boolean;
  onPressRightIcon?: () => void;
};

const ListHeader = ({
  headerTitle,
  rightIcons,
  onPressRightIcon,
}: ListHeaderProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      {rightIcons ? <HeaderIcon showIcon={false} /> : null}
      <Text
        style={[styles.headerText, {color: isDarkMode ? 'white' : 'black'}]}>
        {headerTitle}
      </Text>
      {rightIcons ? (
        <HeaderIcon showIcon={true} onPress={onPressRightIcon} />
      ) : null}
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
});
