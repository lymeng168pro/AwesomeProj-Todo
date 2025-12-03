import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { _styles } from '../../_styles';
import Header from '../../component/HeaderHome';
import SafeArea from '../../component/SafeArea';
import modules from '../../modules';

interface Props {}

const NotificationScreen = ({}: Props) => {
  return (
    <View style={_styles.container}>
      <SafeArea color={modules.WHITE} />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
