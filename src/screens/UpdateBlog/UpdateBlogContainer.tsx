import React, {useCallback} from 'react';

import {Blog} from '../../realmDB/models/Blog';
import {BlogRealmContext} from '../../realmDB/schema';
import BlogForm from '../../components/BlogForm';
import {AddBlogProps, UpdateBlogContainerProps} from '../../types/index';

const {useObject, useRealm} = BlogRealmContext;

const UpdateBlogContainer: React.FC<UpdateBlogContainerProps> = ({
  route,
  navigation,
}) => {
  const {id} = route.params;
  const realm = useRealm();
  const blogData = useObject(Blog, id)!;

  const updateBlog = useCallback(
    (formInput: AddBlogProps): void => {
      try {
        const {title, description} = formInput;
        if (!title || !description) {
          return;
        }
        realm.write(() => {
          blogData.title = title;
          blogData.description = description;
        });
        navigation.goBack();
      } catch (error) {
        console.log('Error in updating blog !');
      }
    },
    [realm, blogData],
  );

  return (
    <BlogForm
      buttonName="Update Blog"
      onPress={updateBlog}
      initialValue={{
        title: blogData?.title!,
        description: blogData?.description!,
      }}
    />
  );
};

export default UpdateBlogContainer;
