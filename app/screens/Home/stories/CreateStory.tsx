import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { _styles } from '../../../_styles';
import modules from '../../../modules';
import Ionicons from '@react-native-vector-icons/ionicons';

interface Props {}

const PostingStory = ({}: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={modules.pkPROfile} style={styles.userPhoto}>
        <View style={[_styles.rows, styles.btnadd]}>
          <Ionicons name="add-circle" style={styles.addIcon} />
        </View>
        <View style={styles.addTextBox}>
          <Text style={styles.addText}>Create story</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PostingStory;

const styles = StyleSheet.create({
  addTextBox: {
    bottom: -40,
  },
  addText: {
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 12,
    alignSelf: 'center',
    color: modules.TEXT,
  },
  container: {
    width: 140,
    borderRadius: 10,
    aspectRatio: 1 / 1.5,
    overflow: 'hidden',
    backgroundColor: modules.BORDER_COLOR,
  },
  userPhoto: {
    width: '100%',
    aspectRatio: 1 / 1.1,
    objectFit: 'cover',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  addIcon: {
    fontSize: 32,
    color: modules.PRIMARY,
    borderRadius: 15,
    backgroundColor: modules.WHITE,
  },
  btnadd: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -16,
  },
});
