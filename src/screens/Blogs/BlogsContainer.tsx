import React, {useState, useMemo, useCallback} from 'react';
import {View, FlatList} from 'react-native';

import {Blog} from '../../realmDB/models/Blog';
import ListHeader from '../../components/ListHeader';
import BlogItem from './components/BlogItem';
import AddBlogBottomSheet from './components/AddBlogBottomSheet';
import {BlogRealmContext} from '../../realmDB/schema';

const {useQuery, useRealm} = BlogRealmContext;

type AddBlogProps = {
  title: string;
  description: string;
};

type BlogItemProp = {
  _id: Realm.BSON.ObjectId;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
};

const BlogsContainer: React.FC = () => {
  const result = useQuery(Blog);
  const realm = useRealm();
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

  // Blog inputs
  const [blogData, setBlogData] = useState<AddBlogProps>({
    title: '',
    description: '',
  });

  const blogs = useMemo(() => result.sorted('createdAt'), [result]);

  const hideBottomSheet = useCallback(() => {
    setShowBottomSheet(val => !val);
  }, [showBottomSheet]);

  const addBlog = useCallback((): void => {
    const {title, description} = blogData;
    if (!title || !description) {
      return;
    }
    realm.write(() => {
      realm.create('Blog', Blog.generate(title, description));
    });
    hideBottomSheet();
    setBlogData({title: '', description: ''});
  }, [realm, blogData]);

  const updateBlog = useCallback(
    (blog: BlogItemProp): void => {
      realm.write(() => {
        blog.isDeleted = !blog.isDeleted;
      });
    },
    [realm],
  );

  const deleteBlog = useCallback(
    (blog: BlogItemProp): void => {
      realm.write(() => {
        realm.delete(blog);

        // Alternatively if passing the ID as the argument to handleDeleteTask:
        // realm?.delete(realm?.objectForPrimaryKey('Task', id));
      });
    },
    [realm, blogData],
  );

  const onChangeBlogInput = useCallback(
    (value: string, inputFor: string): void => {
      if (inputFor === 'title') {
        setBlogData({...blogData, title: value});
      } else {
        setBlogData({...blogData, description: value});
      }
    },
    [blogData],
  );

  return (
    <View>
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
        addBlog={addBlog}
        onChangeBlogInput={onChangeBlogInput}
        inputData={blogData}
      />
    </View>
  );
};

export default BlogsContainer;
