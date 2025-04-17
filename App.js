import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import EnigmaScreen from './app/screens/EnigmaScreen';
import { colors } from './app/constants/colors';
import { globalStyles } from './app/styles/globalStyles';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <EnigmaScreen />
    </SafeAreaView>
  );
}
