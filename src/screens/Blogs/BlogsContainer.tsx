import React, {useMemo, useCallback, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Blog} from '../../realmDB/models/Blog';
import BlogItem from './components/BlogItem';
import {BlogRealmContext} from '../../realmDB/schema';
import HeaderIcon from '../../components/HeaderIcon';
import ListEmptyComponent from '../../components/ListEmptyComponent';

const {useQuery, useRealm} = BlogRealmContext;

type BlogItemProp = {
  _id: Realm.BSON.ObjectId;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
};

const BlogsContainer: React.FC = () => {
  const realm = useRealm();
  const result = useQuery(Blog);
  const navigation = useNavigation();

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
    navigation.navigate('AddUpdateBlog');
  };

  const updateBlog = useCallback((blog: BlogItemProp): void => {
    navigation.navigate('AddUpdateBlog', {blog});
  }, []);

  const deleteBlog = useCallback(
    (blog: BlogItemProp): void => {
      realm.write(() => {
        realm.delete(blog);

        // Alternatively if passing the ID as the argument to handleDeleteTask:
        // realm?.delete(realm?.objectForPrimaryKey('Task', id));
      });
    },
    [realm],
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={blogs}
        keyExtractor={(item, index) => item._id.toString()}
        renderItem={({item}) => (
          <BlogItem
            item={item}
            onPressDelete={deleteBlog.bind(this, item)}
            updateBlog={updateBlog.bind(this, item)}
          />
        )}
        ListEmptyComponent={<ListEmptyComponent onPress={onAddPress} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BlogsContainer;
