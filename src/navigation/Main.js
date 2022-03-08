import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Screen2 from '../screens/Screen2';

const Stack = createNativeStackNavigator();

export const Main = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Screen2" component={Screen2} />
  </Stack.Navigator>
);
