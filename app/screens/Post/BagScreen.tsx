import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { _styles } from '../../_styles';
import Header from '../../component/HeaderHome';
import SafeArea from '../../component/SafeArea';
import modules from '../../modules';

interface Props {
  goBack: () => void;
}

const PostScreen = ({ goBack }: Props) => {
  return (
    <View style={_styles.container}>
      <SafeArea color={modules.WHITE} />
      <Header title="Post" goBack={goBack} isModal />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({});
