// src/styles/globalStyles.js
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.subtext,
    marginVertical: 12,
  },
  pickerContainer: {
    width: '100%',
    height: 100,
    backgroundColor: COLORS.input,
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    color: COLORS.text,
    height: 100,
  },
  pickerItem: {
    fontSize: 16,
    height: 100,
    color: COLORS.text,
  },
});
