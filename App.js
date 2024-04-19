import React from 'react';
import {RootNavigation} from './src/navigation/rootNavigation';
import {AppProvider} from './src/provider/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <RootNavigation />
    </AppProvider>
  );
};

export default App;
