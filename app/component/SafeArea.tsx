import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  color?: string;
};

const SafeArea = ({ color }: Props) => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{ backgroundColor: color || 'transparent' }}
    />
  );
};

export default SafeArea;

const styles = StyleSheet.create({});
