import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NotificationScreen from './NotificationScreen';
import SafeArea from '../../component/SafeArea';

interface Props {
  name: string;
  age: number;
  active: boolean;
}
const UserCard = ({ age, name, active }: Props) => {
  return (
    <View style={styles.hi}>
      <SafeArea />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
      <Text>Age: {age}</Text>
      <Text>Status: {active ? '🟢 Online' : '🔴 Offline'}</Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  hi: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#000',
  },
});
