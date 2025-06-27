// src/components/MessageInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';

const MessageInput = ({ value, onChangeText }) => {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.cardTitle}>Mensaje Original</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu mensaje aquí..."
        placeholderTextColor={COLORS.subtext}
        value={value}
        onChangeText={onChangeText}
        multiline
        autoCapitalize="characters"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.input,
    borderRadius: 8,
    padding: 16,
    color: COLORS.text,
    minHeight: 120,
    textAlignVertical: 'top',
    fontSize: 16,
    marginTop: 8,
  },
});

export default MessageInput;
