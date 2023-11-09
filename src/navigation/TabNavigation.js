import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavScreen from '../screens/FavScreen';
import { Bars4Icon, HomeIcon, HeartIcon } from 'react-native-heroicons/outline';
import HomeNavigation from './HomeNavigation';
import MenuScreen from '../screens/MenuScreen';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
    }}>
      <Tab.Screen name="Home-screen" component={HomeNavigation}
                  options={{
                    tabBarLabel: 'Hjem',
                    tabBarIcon: ({ color, size }) => (
                      <HomeIcon color={"green"} size={size} />
                    ),
                    tabBarLabelStyle: {
                      color: 'green',
                    },
                  }} />
      <Tab.Screen name="Fav" component={FavScreen}
                  options={{
                    tabBarLabel: 'Favoritter',
                    tabBarIcon: ({ color, size }) => (
                      <HeartIcon color={"green"} size={size} />
                    ),
                    tabBarLabelStyle: {
                      color: 'green',
                    },
                  }} />

      <Tab.Screen name="menu" component={MenuScreen}
                  options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ color, size }) => (
                      <Bars4Icon color={"green"} size={size} />
                    ),
                    tabBarLabelStyle: {
                      color: 'green',
                    },
                  }} />
    </Tab.Navigator>
  )
}
