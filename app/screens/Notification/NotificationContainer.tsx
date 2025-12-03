import React from 'react';
import { View } from 'react-native';
import NotificationScreen from './NotificationScreen';
import { NavigationV5Props } from '../../routes/RouteFun';
import UserCard from './UserCard';

interface Props extends NavigationV5Props {}

const NotificationContainer = (props: Props) => {
  return (
    <View>
      <NotificationScreen />
      <UserCard name="Lymeng" age={21} active={true} />
      <UserCard name="Yoo" age={100} active={false} />
    </View>
  );
};

export default NotificationContainer;
