import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigators/MainStack';
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RootStoreProvider } from './models/root-store-provider';
import { NativeBaseProvider } from 'native-base';

export default App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView style={styles.safeArea}>
        <RootStoreProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
          </RootStoreProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  )

}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
