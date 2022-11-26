import React, {useMemo, useCallback, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {Blog} from '../../realmDB/models/Blog';
import BlogItem from './components/BlogItem';
import {BlogRealmContext} from '../../realmDB/schema';
import HeaderIcon from '../../components/HeaderIcon';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import {
  BlogItemProp,
  BlogsContainerProps,
  BlogRenderItemProps,
} from '../../types/index';

const {useQuery, useRealm} = BlogRealmContext;

const BlogsContainer: React.FC<BlogsContainerProps> = ({navigation}) => {
  const realm = useRealm();
  const result = useQuery(Blog);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        result?.length ? (
          <HeaderIcon showIcon={true} onPress={onAddPress} />
        ) : null,
    });
  }, [navigation, result]);

  const blogs = useMemo(() => result.sorted('createdAt'), [result]);

  const onAddPress = () => {
    navigation.navigate('AddBlogContainer');
  };

  const updateBlog = useCallback((blog: BlogItemProp): void => {
    navigation.navigate('UpdateBlogContainer', {id: blog._id});
  }, []);

  const deleteBlog = useCallback(
    (blog: BlogItemProp): void => {
      try {
        realm.write(() => {
          realm.delete(blog);
          // Alternatively if passing the ID as the argument to handleDeleteTask:
          // realm?.delete(realm?.objectForPrimaryKey('Task', id));
        });
      } catch (error) {
        console.log('Error in getting all blogs !');
      }
    },
    [realm],
  );

  const renderItem = ({item, index}: BlogRenderItemProps) => (
    <BlogItem
      item={item}
      onPressDelete={deleteBlog.bind(this, item)}
      updateBlog={updateBlog.bind(this, item)}
    />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={blogs}
        keyExtractor={(item, index) => item._id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<ListEmptyComponent onPress={onAddPress} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BlogsContainer;
