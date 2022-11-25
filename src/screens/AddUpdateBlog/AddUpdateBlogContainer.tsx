import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Blog} from '../../realmDB/models/Blog';
import Button from '../../components/Button';
import {BlogRealmContext} from '../../realmDB/schema';
import CustomTextInput from '../../components/CustomTextInput';

const {useQuery, useRealm} = BlogRealmContext;

type AddBlogProps = {
  title: string;
  description: string;
};

type BlogProp = {
  _id: Realm.BSON.ObjectId;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
};

const AddBlogContainer = ({route}) => {
  const realm = useRealm();
  const navigation = useNavigation();
  const {blog} = route.params || {};

  // Blog inputs
  const [blogData, setBlogData] = useState<AddBlogProps>({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (blog) {
      const {title, description} = blog;
      setBlogData({title, description});
    }
  }, [blog]);

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

  const addBlog = useCallback((): void => {
    const {title, description} = blogData;
    if (!title || !description) {
      return;
    }
    realm.write(() => {
      realm.create('Blog', Blog.generate(title, description));
    });
    setBlogData({title: '', description: ''});
    navigation.goBack();
  }, [realm, blogData]);

  const updateBlog = useCallback((): void => {
    const {title, description} = blogData;
    if (!title || !description) {
      return;
    }
    //const blogBeforeUpdate = JSON.parse(blog);
    realm.write(() => {
      blog.title = title;
      blog.description = description;
    });
    setBlogData({title: '', description: ''});
    navigation.goBack();
  }, [realm, blogData, blog]);

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
        name={blog ? 'Update Blog' : 'Add Blog'}
        onPress={blog ? updateBlog : addBlog}
        customStyle={styles.buttonCustomStyle}
      />
    </View>
  );
};

export default AddBlogContainer;

const styles = StyleSheet.create({
  buttonCustomStyle: {marginVertical: 0, marginTop: 10},
});
