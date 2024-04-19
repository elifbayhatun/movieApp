import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {HOME, FAVORITE} from '../utils/routes';
import FavoriteScreen from '../screens/FavoriteScreen';
import StackNavigation from './stackNavigation';
import {Color} from '../styles/color';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Color.BLUE,
        tabBarInactiveTintColor: Color.WHITE,
        tabBarStyle: {
          backgroundColor: Color.LINEN,
          paddingVertical: 15,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
        name={HOME}
        component={StackNavigation}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="favorite" color={color} size={size} />;
          },
        }}
        name={FAVORITE}
        component={FavoriteScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
