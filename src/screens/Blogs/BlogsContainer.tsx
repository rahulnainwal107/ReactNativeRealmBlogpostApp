import React from 'react';
import {Text, FlatList} from 'react-native';

import ListHeader from '../../components/ListHeader';
import BlogItem from './components/BlogItem';

const BlogsContainer = () => {
  return (
    <FlatList
      data={[1, 2]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={item => (
        <BlogItem
          item={{
            title: 'string',
            description: 'string',
            isDeleted: false,
            createdAt: new Date(),
          }}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <ListHeader headerTitle="All Blogs" rightIcons={true} />
      }
    />
  );
};

export default BlogsContainer;
