import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import {Blog} from '../../realmDB/models/Blog';
import {BlogRealmContext} from '../../realmDB/schema';
import BlogForm from '../../components/BlogForm';
import {AddBlogProps, AddBlogContainerProps} from '../../types/index';

const {useRealm} = BlogRealmContext;

const AddBlogContainer: React.FC<AddBlogContainerProps> = () => {
  const realm = useRealm();
  const navigation = useNavigation();

  const addBlog = useCallback(
    (formInput: AddBlogProps): void => {
      const {title, description} = formInput;
      if (!title || !description) {
        return;
      }
      realm.write(() => {
        realm.create('Blog', Blog.generate(title, description));
      });
      navigation.goBack();
    },
    [realm],
  );

  return (
    <BlogForm
      buttonName="Add Blog"
      onPress={addBlog}
      initialValue={{title: '', description: ''}}
    />
  );
};

export default AddBlogContainer;
