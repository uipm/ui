import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
export const Button = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: { backgroundColor: '#007bff', padding: 10, borderRadius: 4 },
  text: { color: '#fff', textAlign: 'center' },
});
