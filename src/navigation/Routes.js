import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Stack = createNativeStackNavigator();

export const Routes = () => (
  <Stack.Navigator
    initialRouteName="Screen1"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
    <Stack.Screen name="Screen3" component={Screen3} />
  </Stack.Navigator>
);
