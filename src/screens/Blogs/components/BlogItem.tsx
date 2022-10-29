import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type BlogItemProps = {
  item: {
    //_id: Realm.BSON.ObjectId;
    title: string;
    description: string;
    isDeleted: false;
    createdAt: Date;
  };
};

const BlogItem = ({item}: BlogItemProps) => {
  const {title, description, isDeleted, createdAt} = item;
  return (
    <View style={isDeleted ? styles.container : styles.deleteContainer}>
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
  );
};

export default BlogItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderRadius: 5,
  },
  deleteContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
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
