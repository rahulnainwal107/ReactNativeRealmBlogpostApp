import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type CustomTextInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
};

const TEXT_INPUT_HEIGHT = 40;

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  multiline,
}: CustomTextInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const conditionalColor = isFocus ? 'green' : 'black';

  return (
    <View style={styles.textInputContainer}>
      <Text style={[styles.textInputHeader, {color: conditionalColor}]}>
        {placeholder}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        numberOfLines={multiline ? 4 : 1}
        multiline={multiline}
        style={[
          styles.textInput,
          {
            minHeight: multiline ? TEXT_INPUT_HEIGHT * 3 : TEXT_INPUT_HEIGHT,
            paddingVertical: multiline ? 10 : 0,
            borderColor: conditionalColor,
          },
        ]}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 10,
  },
  textInputHeader: {letterSpacing: 1, marginBottom: 5},
  textInput: {
    minHeight: TEXT_INPUT_HEIGHT,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});
