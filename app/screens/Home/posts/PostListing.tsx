import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { POST_DATA } from '../../../dummy/post.data';
import modules from '../../../modules';
import PostItem from './PostItem';
import StoryListing from '../stories/StoryListing';

interface Props {}

const PostListing = ({}: Props) => {
  return (
    <FlatList
      data={POST_DATA}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.key.toString()}
      ItemSeparatorComponent={() => <View style={styles.separtor} />}
      renderItem={({ item }) => <PostItem item={item} />}
      ListHeaderComponent={<StoryListing />}
    />
  );
};

export default PostListing;

const styles = StyleSheet.create({
  separtor: {
    height: 8,
  },
});
