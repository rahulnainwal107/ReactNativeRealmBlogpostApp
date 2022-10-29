import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import CustomTextInput from '../../../components/CustomTextInput';
import Button from '../../../components/Button';

type AddBlogBottomSheetProps = {
  hideBottomSheet: () => void;
};

const AddBlogBottomSheet = ({hideBottomSheet}: AddBlogBottomSheetProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchablePart}
        onPress={hideBottomSheet}
      />
      <CustomTextInput
        placeholder="Blog Title"
        value=""
        onChangeText={() => {}}
      />
      <CustomTextInput
        placeholder="Blog Description"
        value=""
        onChangeText={() => {}}
        multiline={true}
      />
      <Button
        name="Add Blog"
        onPress={undefined}
        customStyle={styles.buttonCustomStyle}
      />
    </View>
  );
};

export default AddBlogBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    padding: 10,
    justifyContent: 'flex-end',
  },
  touchablePart: {flex: 1},
  buttonCustomStyle: {marginVertical: 0, marginTop: 10},
});
