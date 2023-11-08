import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomScreen';
import { NavigationContainer } from '@react-navigation/native';
import CatDetailScreen from "../screens/CatDetailScreen";
import MapViewScreen from "../screens/MapViewScreen";


const Stack = createNativeStackNavigator();


function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CatDetail" component={CatDetailScreen} />
        <Stack.Screen name="MapView" component={MapViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;
