import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Easing,
} from 'react-native';
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
};

const AddBlogBottomSheet = ({
  hideBottomSheet,
  showBottomSheet,
}: AddBlogBottomSheetProps) => {
  console.log('showBottomSheet ', showBottomSheet);
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
            [0, 0.25, 0.5, 1],
            [height, 0, -height / 2, -height],
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
