import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './navigation/Main';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_300Light,
  Inter_500Medium
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <SafeAreaProvider>
            <NavigationContainer>
              <Main />
            </NavigationContainer>
          </SafeAreaProvider>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
