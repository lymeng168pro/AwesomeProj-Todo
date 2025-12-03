import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeArea from '../../component/SafeArea';
import { _styles } from '../../_styles';
import MenuHeader from './MenuHeader';
import { styles } from './MenuStyles';
import { IUser } from '../../interfaces/auth.interface';

interface props {
  user: IUser | null;
  goBack: () => void;
}

const MenuScreen = ({ user }: props) => {
  return (
    <View style={[_styles.container, styles.backgroundColor]}>
      <SafeArea />
      <MenuHeader />
      <Text>
        {user ? user?.firstName + ' ' + user?.lastName : 'No user logged in'}
      </Text>
    </View>
  );
};

export default MenuScreen;
