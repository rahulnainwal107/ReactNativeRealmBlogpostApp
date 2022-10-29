import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import ListHeader from '../../components/ListHeader';
import BlogItem from './components/BlogItem';
import AddBlogBottomSheet from './components/AddBlogBottomSheet';

const BlogsContainer = () => {
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

  const hideBottomSheet = () => {
    setShowBottomSheet(val => !val);
  };

  return (
    <View>
      <FlatList
        data={[1, 2, 4, 5, 6, 7, 78, 8]}
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
          <ListHeader
            headerTitle="All Blogs"
            rightIcons={true}
            onPressRightIcon={hideBottomSheet}
          />
        }
      />
      <AddBlogBottomSheet
        hideBottomSheet={hideBottomSheet}
        showBottomSheet={showBottomSheet}
      />
    </View>
  );
};

export default BlogsContainer;
