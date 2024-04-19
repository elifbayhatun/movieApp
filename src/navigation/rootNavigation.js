import TabNavigation from './tabNavigation';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};
