import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const Main = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);
