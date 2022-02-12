import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme, SafeAreaView, StyleSheet } from 'react-native';
import './constants';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { DarkTheme, LightTheme } from './themes/Theme';
import { Main } from './navigation/Main';
import { Footer } from './navigation/Footer';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  const scheme = useColorScheme();

  const [loaded] = useFonts({
    Inter_900Black,
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
          <NavigationContainer
            theme={scheme === 'dark' ? DarkTheme : LightTheme}
          >
            <Main />
            <Footer />
          </NavigationContainer>
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
