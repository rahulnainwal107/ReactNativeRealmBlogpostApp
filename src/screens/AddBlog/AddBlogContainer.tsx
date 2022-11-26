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
      try {
        const {title, description} = formInput;
        if (!title || !description) {
          return;
        }
        realm.write(() => {
          realm.create('Blog', Blog.generate(title, description));
        });
        navigation.goBack();
      } catch (error) {
        console.log('Error in adding blog !');
      }
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
