import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ExamScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thi sát hạch (Home flow)</Text>
      <Text style={styles.subtitle}>Màn riêng thuộc nhóm Home.</Text>
    </View>
  );
}

export const options = {
  title: 'Thi sát hạch',
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f7' },
  title: { fontSize: 20, fontWeight: '700', color: '#333', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#555' },
});

