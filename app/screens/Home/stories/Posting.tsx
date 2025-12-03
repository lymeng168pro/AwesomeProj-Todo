import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { _styles } from '../../../_styles';
import modules from '../../../modules';
import Ionicons from '@react-native-vector-icons/ionicons';

type Props = {};

const Posting = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={_styles.rows}>
        <Image style={styles.picture} source={modules.pkPROfile} />
        <TouchableOpacity>
          <Text style={styles.textStyle}>What's on your mind?</Text>
        </TouchableOpacity>
        <View style={_styles.flex1} />
        <TouchableOpacity>
          <Ionicons name="image-sharp" style={styles.btnPhoto} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Posting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: modules.WHITE,
    marginBottom: 6,
    paddingBottom: 14,
  },
  txt: {
    borderWidth: 1,
    padding: 10,
    borderColor: modules.BORDER_COLOR,
    borderRadius: modules.BODY_V_8,
    fontSize: modules.FONT_28,
    fontWeight: '400',
    color: modules.TEXT,
    marginBottom: 10,
  },
  picture: {
    borderRadius: 30,
    width: 52,
    height: 52,
    marginLeft: 14,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '400',
    padding: 8,
  },
  btnPhoto: {
    padding: modules.PADDING_4,
    borderRadius: modules.FONT_28 - 4,
    fontSize: 28,
    color: '#83888cff',
    marginRight: 15,
  },
});
