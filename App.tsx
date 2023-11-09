/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TabNavigation from './src/navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  );
}

export default App;
