export const TABS_DATA = {
  HOME: {
    key: 'HOME',
    label: 'Home',
    icon: 'home-outline',
    activeIcon: 'home',
  },
  MENU: {
    key: 'MENU',
    label: 'Menu',
    icon: 'menu-outline',
    activeIcon: 'menu',
  },
  PROFILE: {
    key: 'PROFILE',
    label: 'Profile',
    icon: 'person-outline',
    activeIcon: 'person',
  },
  VIDEOS: {
    key: 'VIDEOS',
    label: 'Videos',
    icon: 'videocam-outline',
    activeIcon: 'videocam',
  },
  NOTIFICATIONS: { 
    key: 'NOTIFICATIONS',
    label: 'Notifications',
    icon: 'notifications-outline',
    activeIcon: 'notifications',
  },
} as const;

// Derive a runtime constant object where each key maps to its own name
// and export a typed union for compile-time use.
export type TabsData = typeof TABS_DATA;

export const TABS_NAME = Object.keys(TABS_DATA).reduce((acc, key) => {
  // assign key -> key (value is the string literal of the key)
  (acc as any)[key] = key;
  return acc;
}, {} as { [K in keyof TabsData]: K }) as { [K in keyof TabsData]: K };

export type TabName = keyof typeof TABS_DATA;
