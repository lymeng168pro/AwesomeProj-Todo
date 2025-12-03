import React from 'react';
import SearchScreen from './SearchScreen';
import { NavigationV5Props } from '../../routes/RouteFun';

interface Props extends NavigationV5Props {}

const SearchContainer = (props: Props) => {
  const onGoBack = () => {
    props.navigation.goBack();
  };
  return <SearchScreen goBack={onGoBack} />;
};

export default SearchContainer;
