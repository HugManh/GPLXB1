import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignCard({ item, variant = 'list', onPress }) {
  const isGrid = variant === 'grid';
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.card, isGrid && styles.cardGrid]}
    >
      {item?.image ? (
        <Image source={{ uri: item.image }} style={[styles.image, isGrid && styles.imageGrid]} resizeMode="cover" />
      ) : null}
      <View style={[{ flex: 1 }, isGrid && styles.gridTextWrap]}>
        <Text style={styles.name} numberOfLines={2}>{item?.name || 'Chưa có tên'}</Text>
        {item?.content ? <Text style={styles.content} numberOfLines={2}>{item.content}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardGrid: {
    flexDirection: 'column',
    width: '48%',
    padding: 8,
  },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 10 },
  imageGrid: { width: '100%', height: 100, marginRight: 0, marginBottom: 8 },
  name: { fontSize: 16, fontWeight: '700', color: '#333', marginBottom: 4 },
  content: { fontSize: 14, color: '#555' },
  gridTextWrap: { width: '100%' },
});

