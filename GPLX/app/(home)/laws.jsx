import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LawsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tra cứu luật nhanh (Home flow)</Text>
      <Text style={styles.subtitle}>Màn riêng thuộc nhóm Home.</Text>
    </View>
  );
}

export const options = {
  title: 'Tra cứu luật nhanh',
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f7' },
  title: { fontSize: 20, fontWeight: '700', color: '#333', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#555' },
});

