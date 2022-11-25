import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BlogsContainer from '../screens/Blogs/BlogsContainer';
import AddUpdateBlogContainer from '../screens/AddUpdateBlog/AddUpdateBlogContainer';

const Stack = createNativeStackNavigator();

const Initial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Blog" component={BlogsContainer} />
      <Stack.Screen name="AddUpdateBlog" component={AddUpdateBlogContainer} />
    </Stack.Navigator>
  );
};

export default Initial;
