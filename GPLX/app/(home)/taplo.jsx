import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TaploScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đèn cảnh báo taplo (Home flow)</Text>
      <Text style={styles.subtitle}>Màn riêng thuộc nhóm Home.</Text>
    </View>
  );
}

export const options = {
  title: 'Đèn cảnh báo taplo',
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f7' },
  title: { fontSize: 20, fontWeight: '700', color: '#333', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#555' },
});

