import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Image } from 'expo-image';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            backgroundColor: '#FAFAFA'
          }
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                source={require('@/assets/images/home.png')}
                style={{
                  width: 24,
                  height: 24
                }}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: () => {
            return (
              <Image
                source={require('@/assets/images/search.png')}
                style={{
                  width: 24,
                  height: 24
                }}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: 'New',
          tabBarIcon: () => {
            return (
              <Image
                source={require('@/assets/images/publish.png')}
                style={{
                  width: 24,
                  height: 24
                }}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="like"
        options={{
          title: 'Like',
          tabBarIcon: () => {
            return (
              <Image
                source={require('@/assets/images/like.png')}
                style={{
                  width: 28,
                  height: 24
                }}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => {
            return (
              <Image
                source={require('@/assets/images/avatar.png')}
                style={{
                  width: 24,
                  height: 24
                }}
              />
            )
          },
        }}
      />
    </Tabs>
  );
}
