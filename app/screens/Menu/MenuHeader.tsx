import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SafeArea from '../../component/SafeArea';
import { _styles } from '../../_styles';
import modules from '../../modules';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';

type props = {};

const MenuHeader = ({}: props) => {
  return (
    <View style={_styles.rows}>
      <Text style={styles.textStyle}>Menu</Text>
      <View style={_styles.flex1} />
      <TouchableOpacity>
        <Ionicons name="settings-sharp" style={styles.btnSetting} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search-outline" style={styles.btnSearch} />
      </TouchableOpacity>
    </View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  btnSetting: {
    fontSize: 24,
    marginRight: 6,
    paddingTop: 8,
    color: 'black',
    padding: 8,
  },
  btnSearch: {
    fontSize: 30,
    marginRight: 6,
    color: '#727871ff',
  },
});
