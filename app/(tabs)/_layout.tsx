import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'ראשי',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'חיפוש',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
