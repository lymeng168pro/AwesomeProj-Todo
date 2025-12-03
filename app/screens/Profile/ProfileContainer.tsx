import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { _styles } from '../../_styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileContainer = () => {
  return (
    <View style={_styles.container}>
      <SafeAreaView edges={['top']} />
      <Text>ProfileContainer</Text>
    </View>
  );
};

export default ProfileContainer;

const styles = StyleSheet.create({});
