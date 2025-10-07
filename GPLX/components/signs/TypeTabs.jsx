import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TypeTabs({ types = [], labels = {}, activeType, onChange }) {
  return (
    <View style={styles.toolbar}>
      {types.map((t) => (
        <TouchableOpacity
          key={t}
          activeOpacity={0.7}
          style={[styles.typeBtn, activeType === t && styles.typeBtnActive]}
          onPress={() => onChange && onChange(t)}
        >
          <Text style={[styles.typeText, activeType === t && styles.typeTextActive]}>
            {labels[t] || t}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 4,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  typeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  typeBtnActive: {
    backgroundColor: '#66bb6a',
  },
  typeText: { fontSize: 13, color: '#333' },
  typeTextActive: { color: '#fff', fontWeight: '700' },
});

