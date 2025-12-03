import { StyleSheet } from 'react-native';
import modules from './modules';

export const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e8ed',
  },
  containerWhite: {
    flex: 1,
    backgroundColor: modules.WHITE,
  },
  body: {
    paddingHorizontal: modules.BODY_H_16,
  },
  BG_WHITE: {
    backgroundColor: modules.WHITE,
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
});
