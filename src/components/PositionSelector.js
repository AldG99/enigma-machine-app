// src/components/PositionSelector.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';

const PositionSelector = ({ label, value, onValueChange, width = '100%' }) => {
  return (
    <View style={[styles.selectorContainer, { width }]}>
      <Text style={styles.selectorLabel}>{label}</Text>
      <View style={globalStyles.pickerContainer}>
        <Picker
          selectedValue={value}
          style={globalStyles.picker}
          onValueChange={onValueChange}
          dropdownIconColor={COLORS.text}
          itemStyle={globalStyles.pickerItem}
        >
          {Array.from({ length: 26 }, (_, i) =>
            String.fromCharCode(65 + i)
          ).map(letter => (
            <Picker.Item
              key={letter}
              label={letter}
              value={letter}
              color={COLORS.text}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PositionSelector;
