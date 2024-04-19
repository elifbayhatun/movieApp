import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import {HOME, MOVIE, PERSON, SEARCH} from '../utils/routes';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={MOVIE} component={MovieScreen} />
      <Stack.Screen name={PERSON} component={PersonScreen} />
      <Stack.Screen name={SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
