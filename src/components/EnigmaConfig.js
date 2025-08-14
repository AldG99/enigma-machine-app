// src/components/EnigmaConfig.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RotorSelector from './RotorSelector';
import PositionSelector from './PositionSelector';
import { ROTORS, REFLECTORS } from '../constants/enigmaConfig';
import { COLORS } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';

const EnigmaConfig = ({
  selectedRotors,
  rotorPositions,
  reflector,
  onRotorChange,
  onPositionChange,
  onReflectorChange,
  onReset,
}) => {
  return (
    <View style={globalStyles.card}>
      <View style={styles.cardHeader}>
        <Text style={globalStyles.cardTitle}>Configuración</Text>
        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.resetButtonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      {/* Rotores */}
      <Text style={globalStyles.sectionHeading}>Rotores</Text>
      <View style={styles.rotorsContainer}>
        {[0, 1, 2].map(index => (
          <View key={`rotor-${index}`} style={styles.rotorConfig}>
            <View style={styles.rotorLabelContainer}>
              <Text style={styles.rotorNumber}>{index + 1}</Text>
            </View>
            <RotorSelector
              label="Tipo"
              value={selectedRotors[index]}
              onValueChange={value => onRotorChange(value, index)}
              options={ROTORS}
              width="85%"
            />
            <PositionSelector
              label="Posición"
              value={rotorPositions[index]}
              onValueChange={value => onPositionChange(value, index)}
              width="85%"
            />
          </View>
        ))}
      </View>

      {/* Reflector */}
      <Text style={globalStyles.sectionHeading}>Reflector</Text>
      <View style={styles.reflectorContainer}>
        <RotorSelector
          label="Tipo"
          value={reflector}
          onValueChange={onReflectorChange}
          options={REFLECTORS}
          width="50%"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default EnigmaConfig;
