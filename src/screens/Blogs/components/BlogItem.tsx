import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {BlogItemProps} from '../../../types/index';

const BlogItem: React.FC<BlogItemProps> = ({
  item,
  onPressDelete,
  updateBlog,
}) => {
  const {title, description, isDeleted, createdAt} = item;
  return (
    <TouchableOpacity
      style={isDeleted ? styles.deleteContainer : styles.container}
      onPress={updateBlog}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text numberOfLines={2} style={styles.titleText}>
          {title}
        </Text>
        <Text numberOfLines={4} style={styles.descriptionText}>
          {description}
        </Text>
        <Text numberOfLines={2} style={styles.dateText}>
          {createdAt.toDateString()}
        </Text>
      </View>
      <TouchableOpacity style={{marginHorizontal: 5}} onPress={onPressDelete}>
        <Image
          source={require('../../../assets/delete.png')}
          style={{height: 25, width: 25, tintColor: 'red'}}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BlogItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#c9fec9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'green',
  },
  deleteContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f4d4d5',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'red',
  },
  titleText: {
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
  dateText: {
    fontSize: 12,
    letterSpacing: 1,
    color: 'grey',
  },
});
