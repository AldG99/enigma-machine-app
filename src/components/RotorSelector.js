// src/components/RotorSelector.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';

const RotorSelector = ({
  label,
  value,
  onValueChange,
  options,
  width = '100%',
}) => {
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
          {Object.keys(options).map(option => (
            <Picker.Item
              key={option}
              label={option}
              value={option}
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

export default RotorSelector;
