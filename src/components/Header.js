// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>ENIGMA</Text>
      <Text style={styles.subtitle}>Simulador</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.accent,
    letterSpacing: 6,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.subtext,
    marginTop: 4,
    letterSpacing: 1,
  },
});

export default Header;
