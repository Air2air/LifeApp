import React, { useEffect, useState, createContext, useContext } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './navigation/Routes';
import { Footer } from './navigation/Footer';
import AppLoading from 'expo-app-loading';
import { generatedBgColor } from './utilities/generatedBgColor';
import {
  useFonts,
  Inter_300Light,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

export const BgColorContext = createContext()

export default function App() {
  const [bgColor, setBgColor] = useState(generatedBgColor);

  useEffect(() => {
    setTimeout(() => {
      setBgColor(generatedBgColor);
    }, 2000);
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <BgColorContext.Provider value={bgColor}>
          <StatusBar style="light" />
          <SafeAreaView
            style={[styles.container, { backgroundColor: bgColor }]}
          >
            <SafeAreaProvider>
              <NavigationContainer bgColor={bgColor}>
                <Routes />
                <Footer />
              </NavigationContainer>
            </SafeAreaProvider>
          </SafeAreaView>
        </BgColorContext.Provider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
