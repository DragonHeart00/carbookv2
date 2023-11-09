import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomScreen';
import CatDetailScreen from '../screens/CatDetailScreen';
import MapViewScreen from '../screens/MapViewScreen';

const Stack = createNativeStackNavigator();

// todo: not used yet
function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*<Stack.Screen name="Welcome" component={WelcomeScreen} />*/}
        <Stack.Screen name="CatDetail" component={CatDetailScreen} />
        <Stack.Screen name="MapView" component={MapViewScreen} />
      </Stack.Navigator>
  )
}

export default AppNavigation;
