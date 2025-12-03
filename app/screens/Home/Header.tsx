import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { _styles } from '../../_styles';
import modules from '../../modules';

type Props = {
  onPost?: () => void;
  onSearch?: () => void;
  onMessage?: () => void;
};

const Header = ({ onPost, onMessage, onSearch }: Props) => {
  return (
    <View style={[styles.container, _styles.rows, _styles.body]}>
      <Image style={[styles.logo]} source={modules.LOGO} />
      <View style={_styles.flex1} />
      <View style={styles.groupBtn}>
        <TouchableOpacity style={styles.btn} onPress={onPost}>
          <Ionicons style={styles.btnIcon} name="bag-add" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onSearch}>
          <Ionicons style={styles.btnIcon} name="search-outline" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onMessage}>
          <Ionicons style={styles.btnIcon} name="chatbubble-ellipses" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 120,
  },
  container: {
    backgroundColor: modules.WHITE,
    borderBottomColor: modules.BORDER_COLOR,
  },
  btn: {
    padding: modules.PADDING_4,
    borderRadius: modules.FONT_28 - 4,
  },
  btnIcon: {
    fontSize: modules.FONT_28 - 4,
  },
  groupBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
