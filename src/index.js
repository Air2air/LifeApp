import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet } from 'react-native';
import './constants';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './navigation/Main';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Main />
            {/* <Footer /> */}
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
