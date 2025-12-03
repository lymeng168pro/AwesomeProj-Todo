import React from 'react';
import PostScreen from './BagScreen';
import { NavigationV5Props } from '../../routes/RouteFun';

interface Props extends NavigationV5Props {}

const PostContainer = (props: Props) => {
  const onGoBack = () => {
    props.navigation.goBack();
  };

  return <PostScreen goBack={onGoBack} />;
};

export default PostContainer;
