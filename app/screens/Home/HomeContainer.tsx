import React, { useEffect, useState } from 'react';
import { _styles } from '../../_styles';
import { NavigationV5Props } from '../../routes/RouteFun';
import HomeScreen from './HomeScreen';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { useUserStore } from '../../stores/useUserStore';

interface Props extends NavigationV5Props {}

const HomeContainer = (_props: Props) => {
  const userProfile = useUserStore().user;
  const onPost = () => {
    _props.navigation.navigate('POST');
  };

  const onSearch = () => {
    _props.navigation.navigate('SEARCH');
  };

  const onMessage = () => {
    _props.navigation.navigate('MESSAGE');
  };
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function handleAuthStateChanged(user: any) {
    setUser(user);
    console.log('user', user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    console.log('userProfile', userProfile);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <HomeScreen onMessage={onMessage} onPost={onPost} onSearch={onSearch} />
  );
};

export default HomeContainer;
