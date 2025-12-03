import React from 'react';
import MessageSreen from './MessageSreen';
import { NavigationV5Props } from '../../routes/RouteFun';

interface Props extends NavigationV5Props {}

const MessageContainer = (props: Props) => {
  const onGoBack = () => {
    props.navigation.goBack();
  };

  return <MessageSreen goBack={onGoBack} />;
};

export default MessageContainer;
