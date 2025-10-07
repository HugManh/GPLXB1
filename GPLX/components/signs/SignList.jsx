import React, { useMemo } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import SignCard from './SignCard';

export default function SignList({ data = [], loading = false, onEndReached, refreshing, onRefresh, layout = 'list', onItemPress }) {
  const footer = useMemo(() => (
    loading ? (
      <View style={{ paddingVertical: 16 }}>
        <ActivityIndicator color="#66bb6a" />
      </View>
    ) : null
  ), [loading]);

  return (
    <FlatList
      key={layout}
      data={data}
      keyExtractor={(i) => `${i.id}`}
      renderItem={({ item }) => (
        <SignCard
          item={item}
          variant={layout}
          onPress={() => onItemPress && onItemPress(item)}
        />
      )}
      contentContainerStyle={[styles.listContent, layout === 'grid' && styles.gridWrap]}
      numColumns={layout === 'grid' ? 2 : 1}
      columnWrapperStyle={layout === 'grid' ? { justifyContent: 'space-between' } : undefined}
      onEndReachedThreshold={0.4}
      onEndReached={onEndReached}
      ListFooterComponent={footer}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
}

const styles = StyleSheet.create({
  listContent: { padding: 12 },
  gridWrap: { paddingBottom: 12 },
});

