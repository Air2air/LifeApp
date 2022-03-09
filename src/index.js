import React, { createContext, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './navigation/Routes';
import { Footer } from './navigation/Footer';
import AppLoading from 'expo-app-loading';
// import { Context } from './state/context';
//import { screenBackgroundColor } from './utilities/screenBackgroundColor';
import {
  useFonts,
  Inter_300Light,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

const BgColorContext = createContext('green');

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setBackgroundColor('blue');
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
        <BgColorContext.Provider value={backgroundColor}>
          <StatusBar style="light" />
          <SafeAreaView
            style={[
              styles.container,
              { backgroundColor: backgroundColor },
            ]}
          >
            <SafeAreaProvider>
              <NavigationContainer>
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
