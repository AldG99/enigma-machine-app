// src/components/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>ENIGMA SIMULATOR v1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 8,
    marginBottom: 24,
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.subtext,
    fontSize: 12,
    letterSpacing: 1,
  },
});

export default Footer;
