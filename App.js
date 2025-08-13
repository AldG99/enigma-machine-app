// App.js
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { COLORS } from './src/constants/colors';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <MainScreen />
    </SafeAreaView>
  );
}
