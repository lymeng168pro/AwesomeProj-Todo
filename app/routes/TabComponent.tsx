import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TabName, TABS_DATA } from './TabData';
import Ionicons from '@react-native-vector-icons/ionicons';
import modules from '../modules';
import { SafeAreaView } from 'react-native-safe-area-context';

export function TabComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tab}>
        {state.routes.map((route, index) => {
          const routeName = route.name as TabName;
          const tabData = TABS_DATA[routeName];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={`${index}`}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              {isFocused ? (
                <View style={[StyleSheet.absoluteFill, styles.tabBar]} />
              ) : null}
              <Ionicons
                style={[styles.tabIcon, isFocused ? styles.activeIcon : null]}
                name={isFocused ? tabData.activeIcon : tabData.icon}
              />
              <Text
                numberOfLines={1}
                style={[
                  styles.tabText,
                  { color: isFocused ? modules.PRIMARY : modules.TAB_COLOR },
                ]}
              >
                {tabData.label}
              </Text>
            </TouchableOpacity>
          );
        })}
        <SafeAreaView edges={['bottom', 'left', 'right']} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: modules.BODY_H_16,
    backgroundColor: modules.WHITE,
  },
  tabBar: {
    backgroundColor: modules.PRIMARY,
    height: 2,
    borderRadius: modules.BODY_V_8,
  },
  tab: {
    flexDirection: 'row',
    backgroundColor: modules.WHITE,
    borderTopColor: modules.BORDER_COLOR,
    borderTopWidth: 1,
  },
  tabIcon: {
    fontSize: 26,
    marginBottom: modules.PADDING_4 - 1,
    color: modules.TAB_COLOR,
  },
  tabText: {
    fontSize: 11,
    fontWeight: '500',
  },
  activeIcon: {
    color: modules.PRIMARY,
  },

  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: modules.BODY_V_8,
    paddingBottom: modules.BODY_H_16,
  },
});
