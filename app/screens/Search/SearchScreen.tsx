import { View } from 'react-native';
import React from 'react';
import { _styles } from '../../_styles';
import SafeArea from '../../component/SafeArea';
import modules from '../../modules';
import Header from '../../component/HeaderHome';

interface Props {
  goBack: () => void;
}

const SearchScreen = ({ goBack }: Props) => {
  return (
    <View style={_styles.container}>
      <SafeArea color={modules.WHITE} />
      <Header title="Search" goBack={goBack} isModal />
    </View>
  );
};

export default SearchScreen;
