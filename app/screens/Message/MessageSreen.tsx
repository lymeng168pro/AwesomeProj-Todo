import { StyleSheet, View } from 'react-native';
import React from 'react';
import { _styles } from '../../_styles';
import SafeArea from '../../component/SafeArea';
import modules from '../../modules';
import Header from '../../component/HeaderHome';

interface Props {
  goBack: () => void;
}

const MessageSreen = ({ goBack }: Props) => {
  return (
    <View style={_styles.container}>
      <SafeArea color={modules.WHITE} />
      <Header goBack={goBack} isModal title="Message" />
    </View>
  );
};

export default MessageSreen;

const styles = StyleSheet.create({});
