import React, {useState, useCallback, useEffect, memo} from 'react';
import {View, StyleSheet} from 'react-native';

import Button from './Button';
import CustomTextInput from './CustomTextInput';
import {AddBlogProps, BlogFormProps} from '../types/index';

const BlogForm: React.FC<BlogFormProps> = ({
  buttonName,
  onPress,
  initialValue,
}) => {
  const [blogData, setBlogData] = useState<AddBlogProps>({
    title: '',
    description: '',
  });

  useEffect(() => {
    setBlogData(initialValue);
  }, [initialValue]);

  const onChangeBlogInput = useCallback(
    (value: string, inputFor: string): void => {
      if (inputFor === 'title') {
        setBlogData({...blogData, title: value});
      } else {
        setBlogData({...blogData, description: value});
      }
    },
    [blogData],
  );

  return (
    <View style={{margin: 10}}>
      <CustomTextInput
        placeholder="Blog Title"
        value={blogData.title}
        onChangeText={text => onChangeBlogInput(text, 'title')}
      />
      <CustomTextInput
        placeholder="Blog Description"
        value={blogData.description}
        onChangeText={text => onChangeBlogInput(text, 'description')}
        multiline={true}
      />
      <Button
        name={buttonName}
        onPress={onPress.bind(this, {
          title: blogData.title,
          description: blogData.description,
        })}
        customStyle={styles.buttonCustomStyle}
      />
    </View>
  );
};

export default memo(BlogForm);

const styles = StyleSheet.create({
  buttonCustomStyle: {marginVertical: 0, marginTop: 10},
});
