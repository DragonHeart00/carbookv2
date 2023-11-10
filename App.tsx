/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TabNavigation from './src/navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomScreen';

function App(): JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        {/*<Stack.Screen name="Welcome" component={WelcomeScreen} />*/}
        <Stack.Screen name="tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
