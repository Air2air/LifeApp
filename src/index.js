import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './navigation/Routes';
import { Footer } from './navigation/Footer';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_300Light,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <><StatusBar style="light" />
        <SafeAreaView
          style={[styles.container, { backgroundColor: generateColor() }]}
        >
          <SafeAreaProvider>
            <NavigationContainer>
              <Routes />
              <Footer />
            </NavigationContainer>
          </SafeAreaProvider>
        </SafeAreaView>
      </>
    );
  }
}

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
