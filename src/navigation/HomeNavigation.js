import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CatDetailScreen from '../screens/CatDetailScreen';
import MapViewScreen from '../screens/MapViewScreen';


export default function HomeNavigation() {
  const Stack=createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}  />
        {/*<Stack.Screen name="Welcome" component={WelcomeScreen} />*/}
        <Stack.Screen name="CatDetail" component={CatDetailScreen}  />
        <Stack.Screen name="MapView" component={MapViewScreen}  />
    </Stack.Navigator>
  );
}
