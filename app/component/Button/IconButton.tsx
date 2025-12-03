import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import modules from '../../modules';

interface Props {
  icon: any;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const IconButton = ({ icon, onPress, style }: Props) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Ionicons name={icon} style={styles.btnIcon} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btn: {
    padding: modules.PADDING_4,
    borderRadius: modules.FONT_28 - 4,
  },
  btnIcon: {
    fontSize: modules.FONT_28 - 4,
  },
});
