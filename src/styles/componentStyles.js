// src/styles/componentStyles.js
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

// Estilos específicos para cada componente
export const headerStyles = StyleSheet.create({
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

export const enigmaConfigStyles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rotorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  rotorConfig: {
    width: '33%',
    alignItems: 'center',
    marginBottom: 12,
  },
  rotorLabelContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  rotorNumber: {
    color: COLORS.card,
    fontSize: 16,
    fontWeight: 'bold',
  },
  reflectorContainer: {
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: 'transparent',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  resetButtonText: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: '500',
  },
});

export const selectorStyles = StyleSheet.create({
  selectorContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  selectorLabel: {
    fontSize: 14,
    color: COLORS.subtext,
    marginBottom: 4,
  },
});

export const messageInputStyles = StyleSheet.create({
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

export const messageOutputStyles = StyleSheet.create({
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

export const footerStyles = StyleSheet.create({
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
