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
    <View style={{flex: 1}}>
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
          <ListHeader
            headerTitle="All Blogs"
            rightIcons={true}
            onPressRightIcon={hideBottomSheet}
          />
        }
      />
      {showBottomSheet ? (
        <AddBlogBottomSheet hideBottomSheet={hideBottomSheet} />
      ) : null}
    </View>
  );
};

export default BlogsContainer;
