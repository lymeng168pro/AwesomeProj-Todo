import React from 'react';
import { NavigationV5Props } from '../../routes/RouteFun';
import MenuScreen from './MenuScreen';
import { useUserStore } from '../../stores/useUserStore';

interface Props extends NavigationV5Props {}

const onGoBack = () => {};

const MenuContainer = (props: Props) => {
  const user = useUserStore(state => state.user);

  return <MenuScreen goBack={onGoBack} user={user} />;
};

export default MenuContainer;
