import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Realm from 'realm';

type BlogProp = {
  _id: Realm.BSON.ObjectId;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
};

type BlogItemProps = {
  item: BlogProp;
  onPressDelete: () => void;
  updateBlog: () => void;
};

const BlogItem: React.FC<BlogItemProps> = ({
  item,
  onPressDelete,
  updateBlog,
}) => {
  const {title, description, isDeleted, createdAt} = item;
  return (
    <View style={isDeleted ? styles.deleteContainer : styles.container}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text numberOfLines={2} style={styles.titleText}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {description}
        </Text>
        <Text numberOfLines={2} style={styles.dateText}>
          {description}
        </Text>
      </View>
      <TouchableOpacity style={{marginHorizontal: 5}} onPress={updateBlog}>
        <Image
          source={require('../../../assets/edit.png')}
          style={{height: 25, width: 25, tintColor: 'red'}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal: 5}} onPress={onPressDelete}>
        <Image
          source={require('../../../assets/delete.png')}
          style={{height: 25, width: 25, tintColor: 'red'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BlogItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'green',
  },
  deleteContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'red',
  },
  titleText: {
    fontSize: 18,
    letterSpacing: 1,
  },
  descriptionText: {
    fontSize: 12,
    letterSpacing: 1,
  },
  dateText: {
    fontSize: 10,
    letterSpacing: 1,
  },
});
