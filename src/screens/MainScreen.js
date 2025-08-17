// src/screens/MainScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import EnigmaConfig from '../components/EnigmaConfig';
import MessageInput from '../components/MessageInput';
import MessageOutput from '../components/MessageOutput';
import Footer from '../components/Footer';
import { encryptText } from '../utils/enigmaLogic';
import { COLORS } from '../constants/colors';

const MainScreen = () => {
  // Estado para el texto de entrada y salida
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Estado para la configuración de Enigma
  const [selectedRotors, setSelectedRotors] = useState(['I', 'II', 'III']);
  const [rotorPositions, setRotorPositions] = useState(['A', 'A', 'A']);
  const [reflector, setReflector] = useState('B');

  // Función para manejar el cambio en la posición de un rotor
  const handlePositionChange = (position, index) => {
    const newPositions = [...rotorPositions];
    newPositions[index] = position;
    setRotorPositions(newPositions);
  };

  // Función para manejar el cambio en la selección de un rotor
  const handleRotorChange = (rotor, index) => {
    const newRotors = [...selectedRotors];
    newRotors[index] = rotor;
    setSelectedRotors(newRotors);
  };

  // Función para reiniciar la configuración
  const resetSettings = () => {
    setSelectedRotors(['I', 'II', 'III']);
    setRotorPositions(['A', 'A', 'A']);
    setReflector('B');
    setInputText('');
    setOutputText('');
  };

  // Efecto para actualizar el texto cifrado cuando cambia el texto de entrada o la configuración
  useEffect(() => {
    if (inputText) {
      const encrypted = encryptText(
        inputText,
        selectedRotors,
        rotorPositions,
        reflector
      );
      setOutputText(encrypted);
    } else {
      setOutputText('');
    }
  }, [inputText, selectedRotors, rotorPositions, reflector]);

  return (
    <View style={styles.container}>
      <Header />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <EnigmaConfig
            selectedRotors={selectedRotors}
            rotorPositions={rotorPositions}
            reflector={reflector}
            onRotorChange={handleRotorChange}
            onPositionChange={handlePositionChange}
            onReflectorChange={setReflector}
            onReset={resetSettings}
          />

          <MessageInput value={inputText} onChangeText={setInputText} />

          <MessageOutput value={outputText} />

          <Footer />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
});

export default MainScreen;
