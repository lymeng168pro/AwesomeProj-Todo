import React from 'react';
import VideosScreen from './VideosScreen';
import { NavigationV5Props } from '../../routes/RouteFun';

interface Props extends NavigationV5Props {}

const VideosContainer = (props: Props) => {
  const onGoBack = () => {
    props.navigation.goBack();
  };

  return <VideosScreen goBack={onGoBack} />;
};

export default VideosContainer;
