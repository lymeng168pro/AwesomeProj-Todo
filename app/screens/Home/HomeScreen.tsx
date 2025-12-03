import React from 'react';
import { ScrollView, View } from 'react-native';
import { _styles } from '../../_styles';
import SafeArea from '../../component/SafeArea';
import modules from '../../modules';
import Header from './Header';
import Posting from './stories/Posting';
import PostListing from './posts/PostListing';

interface Props {
  onPost: () => void;
  onSearch: () => void;
  onMessage: () => void;
}

const HomeScreen = ({ onPost, onMessage, onSearch }: Props) => {
  return (
    <View style={[_styles.container]}>
      <SafeArea color={modules.WHITE} />
      <Header onPost={onPost} onMessage={onMessage} onSearch={onSearch} />
      <Posting />
      <PostListing />
    </View>
  );
};

export default HomeScreen;
