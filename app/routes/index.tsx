import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppTabs } from './AppTabs';
import { NavigationContainer } from '@react-navigation/native';
import PostContainer from '../screens/Post/BagContainer';
import SearchContainer from '../screens/Search/SearchContainer';
import MessageContainer from '../screens/Message/MessageContainer';
import { Modal } from 'react-native';
import LoginContainer from '../screens/Login/LoginContainer';

const AppStack = createNativeStackNavigator();

function APP_STACK() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="LOGIN" component={LoginContainer} />
      <AppStack.Screen
        name="APP_TAB"
        options={{ presentation: 'modal' }}
        component={AppTabs}
      />
      <AppStack.Screen name="POST" component={PostContainer} />
      <AppStack.Screen
        name="SEARCH"
        component={SearchContainer}
        options={{ presentation: 'modal' }}
      />
      <AppStack.Screen
        name="MESSAGE"
        component={MessageContainer}
        options={{ presentation: 'modal' }}
      />
    </AppStack.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <APP_STACK />
    </NavigationContainer>
  );
}
