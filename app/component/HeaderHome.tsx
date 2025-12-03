import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import modules from '../modules';
import { _styles } from '../_styles';
import IconButton from './Button/IconButton';

type Props = {
  goBack?: () => void;
  title: string;
  isModal?: boolean;
};

const Header = ({ goBack, title, isModal }: Props) => {
  const icon: any = isModal ? 'close-circle' : 'chevron-back';
  return (
    <View
      style={[styles.container, _styles.rows, isModal ? styles.modalP : null]}
    >
      {/* button close when present stack is modal false */}
      {isModal ? null : <IconButton icon={icon} onPress={goBack} />}

      {/* title of header */}
      <Text style={[styles.title, isModal ? styles.pLeft : styles.pRight]}>
        {title}
      </Text>

      {/* button close when present modal modal true*/}
      {isModal ? (
        <IconButton icon={icon} onPress={goBack} style={styles.modal} />
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  modalP: {
    paddingVertical: modules.BODY_V_8,
  },
  modal: {
    marginRight: 8,
    marginTop: 3,
  },
  pLeft: {
    paddingLeft: 32,
  },
  pRight: {
    paddingRight: 32,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  container: {
    backgroundColor: modules.WHITE,
    borderBottomColor: modules.BORDER_COLOR,
    borderBottomWidth: 1,
    paddingVertical: modules.PADDING_4,
    paddingHorizontal: modules.PADDING_4,
  },
});
