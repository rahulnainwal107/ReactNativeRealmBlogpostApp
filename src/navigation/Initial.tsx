import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BlogsContainer from '../screens/Blogs/BlogsContainer';
import AddBlogContainer from '../screens/AddBlog/AddBlogContainer';
import UpdateBlogContainer from '../screens/UpdateBlog/UpdateBlogContainer';
import {InitialStackParamList} from '../types/index';

const Stack = createNativeStackNavigator<InitialStackParamList>();

const Initial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Blog"
        component={BlogsContainer}
        options={{title: 'Blogs'}}
      />
      <Stack.Screen
        name="AddBlogContainer"
        component={AddBlogContainer}
        options={{title: 'Add Blog'}}
      />
      <Stack.Screen
        name="UpdateBlogContainer"
        component={UpdateBlogContainer}
        options={{title: 'Update Blog'}}
      />
    </Stack.Navigator>
  );
};

export default Initial;
