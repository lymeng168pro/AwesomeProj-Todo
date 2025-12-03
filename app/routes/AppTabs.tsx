import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuContainer from '../screens/Menu/MenuContainer';
import { TabComponent } from './TabComponent';
import { TABS_NAME } from './TabData';
import ProfileContainer from '../screens/Profile/ProfileContainer';
import HomeContainer from '../screens/Home/HomeContainer';
import VideosContainer from '../screens/Videos/VideosContainer';
import NotificationContainer from '../screens/Notification/NotificationContainer';
import MenuScreen from '../screens/Menu/MenuScreen';

const Tab = createBottomTabNavigator();

export function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <TabComponent {...props} />}
    >
      <Tab.Screen name={TABS_NAME.HOME} component={HomeContainer} />
      <Tab.Screen name={TABS_NAME.VIDEOS} component={VideosContainer} />
      <Tab.Screen name={TABS_NAME.PROFILE} component={ProfileContainer} />
      <Tab.Screen
        name={TABS_NAME.NOTIFICATIONS}
        component={NotificationContainer}
      />
      <Tab.Screen name={TABS_NAME.MENU} component={MenuContainer} />
    </Tab.Navigator>
  );
}
