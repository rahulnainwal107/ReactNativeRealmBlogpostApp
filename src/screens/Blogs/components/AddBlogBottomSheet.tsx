import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import CustomTextInput from '../../../components/CustomTextInput';
import Button from '../../../components/Button';

const {height} = Dimensions.get('window');

type AddBlogBottomSheetProps = {
  hideBottomSheet: () => void;
  showBottomSheet: boolean;
  addBlog: () => void;
  onChangeBlogInput: (value: string, inputType: string) => void;
  inputData: {title: string; description: string};
};

const AddBlogBottomSheet: React.FC<AddBlogBottomSheetProps> = ({
  hideBottomSheet,
  showBottomSheet,
  addBlog,
  onChangeBlogInput,
  inputData,
}) => {
  const {title, description} = inputData;

  const bottomSheetSharedValue = useDerivedValue(
    () =>
      showBottomSheet
        ? withTiming(1, {duration: 1000})
        : withTiming(0, {duration: 1000}),
    [showBottomSheet],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            bottomSheetSharedValue.value,
            [0, 1],
            [height, -200],
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity
        style={styles.touchablePart}
        onPress={hideBottomSheet}
      />
      <View style={{backgroundColor: 'white'}}>
        <CustomTextInput
          placeholder="Blog Title"
          value={title}
          onChangeText={text => onChangeBlogInput(text, 'title')}
        />
        <CustomTextInput
          placeholder="Blog Description"
          value={description}
          onChangeText={text => onChangeBlogInput(text, 'description')}
          multiline={true}
        />
        <Button
          name="Add Blog"
          onPress={addBlog}
          customStyle={styles.buttonCustomStyle}
        />
      </View>
    </Animated.View>
  );
};

export default AddBlogBottomSheet;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // top: 0,
    height: height,
    backgroundColor: 'transparent',
    padding: 10,
    justifyContent: 'flex-end',
  },
  touchablePart: {flex: 1},
  buttonCustomStyle: {marginVertical: 0, marginTop: 10},
});
