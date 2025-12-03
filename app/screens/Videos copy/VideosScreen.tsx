import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { _styles } from '../../_styles';
import Header from '../../component/HeaderHome';
import SafeArea from '../../component/SafeArea';
import modules from '../../modules';

interface Props {}

const PostScreen = ({}: Props) => {
  return (
    <View style={_styles.container}>
      <SafeArea color={modules.WHITE} />
      <Text>Videos</Text>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({});
