// src/components/MessageOutput.js
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';

const MessageOutput = ({ value }) => {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.cardTitle}>Mensaje Cifrado</Text>
      <View style={styles.outputContainer}>
        <Text style={styles.outputText}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outputContainer: {
    backgroundColor: COLORS.input,
    borderRadius: 8,
    padding: 16,
    minHeight: 120,
    marginTop: 8,
  },
  outputText: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
});

export default MessageOutput;
