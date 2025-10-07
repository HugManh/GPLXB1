import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchBar({ value, onChangeText, placeholder = 'Tìm theo tên/ký hiệu...', onClear }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        returnKeyType="search"
      />
      {value ? (
        <TouchableOpacity style={styles.clearBtn} activeOpacity={0.7} onPress={onClear}>
          <Text style={{ color: '#999', fontSize: 18 }}>×</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    backgroundColor: '#f4f5f6',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#333',
  },
  clearBtn: {
    position: 'absolute',
    right: 20,
    top: 8,
    bottom: 8,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

