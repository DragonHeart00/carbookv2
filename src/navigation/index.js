import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from '../screens/SecondScreen';
import WelcomeScreen from '../screens/WelcomScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator()


function AppNavigation() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={SecondScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
