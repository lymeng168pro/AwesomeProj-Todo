import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IPost } from '../../../interfaces/post.interface';
import modules from '../../../modules';
import { _styles } from '../../../_styles';

type Props = {
  item?: IPost;
};

const PostItem = ({ item }: Props) => {
  return (
    <View>
      <View style={[styles.row, styles.container]}>
        <Image style={styles.pfLeft} source={item?.created_by.photoURL} />
        <View style={styles.BodyColumn}>
          <Text style={styles.txtStyle}>{item?.created_by.name} </Text>
          <Text style={styles.timeStyle}>{item?.createdAt}</Text>
        </View>
      </View>
      <Image style={styles.postStyle} source={{ uri: item?.postImage }} />
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  BodyColumn: {
    flexDirection: 'column',
    paddingVertical: 5,
  },
  timeStyle: {
    fontSize: 12,
    color: '#777',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
  },
  txtStyle: {
    fontSize: modules.FONT_14,
    fontWeight: '600',
    marginLeft: modules.BODY_V_8,
  },
  pfLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
  },
  postStyle: {
    width: '100%',
    height: 300,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
});
