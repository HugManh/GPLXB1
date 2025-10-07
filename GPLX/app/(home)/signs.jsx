import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchBar from '../../components/signs/SearchBar';
import SignList from '../../components/signs/SignList';
import TypeTabs from '../../components/signs/TypeTabs';
import { SIGN_TYPES, getSignItemsPage } from '../../services/firestoreService';

const TYPE_LABELS = {
  ban: 'Biển báo cấm',
  command: 'Biển hiệu lệnh',
  danger: 'Biển nguy hiểm',
  instruction: 'Biển chỉ dẫn',
};

export default function SignsScreen() {
  const [activeType, setActiveType] = useState('ban');
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState('');
  const [layout, setLayout] = useState('list');
  const pageSize = 20;

  const loadPage = useCallback(async (reset = false) => {
    if (loading) return;
    if (!reset && !hasMore) return;
    setLoading(true);
    try {
      const c = reset ? null : cursor;
      const { items: pageItems, lastVisible } = await getSignItemsPage(activeType, pageSize, c);
      setItems(prev => (reset ? pageItems : [...prev, ...pageItems]));
      setCursor(lastVisible);
      setHasMore(Boolean(lastVisible));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Failed to load signs:', e);
    } finally {
      setLoading(false);
      if (reset) setRefreshing(false);
    }
  }, [activeType, cursor, hasMore, loading]);

  useEffect(() => {
    setItems([]);
    setCursor(null);
    setHasMore(true);
    loadPage(true);
  }, [activeType]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadPage(true);
  }, [loadPage]);

  const filteredItems = useMemo(() => (
    items.filter((i) => {
      if (!query.trim()) return true;
      const q = query.trim().toLowerCase();
      return (
        (i.name && String(i.name).toLowerCase().includes(q)) ||
        (i.code && String(i.code).toLowerCase().includes(q)) ||
        (i.symbol && String(i.symbol).toLowerCase().includes(q))
      );
    })
  ), [items, query]);

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChangeText={setQuery} onClear={() => setQuery('')} />
      <TypeTabs types={SIGN_TYPES} labels={TYPE_LABELS} activeType={activeType} onChange={setActiveType} />
      <View style={styles.controls}>
        <Text style={styles.countText}>Tổng: {filteredItems.length}</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.toggleBtn} onPress={() => setLayout(prev => prev === 'list' ? 'grid' : 'list')}>
          <Text style={styles.toggleText}>{layout === 'list' ? 'Dạng lưới' : 'Dạng danh sách'}</Text>
        </TouchableOpacity>
      </View>
      <SignList
        data={filteredItems}
        loading={loading}
        onEndReached={() => loadPage(false)}
        refreshing={refreshing}
        onRefresh={onRefresh}
        layout={layout}
        onItemPress={(item) => { /* TODO: navigate to detail later */ }}
      />
    </View>
  );
}

export const options = { title: 'Biển báo đường bộ' };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7' },
  controls: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  countText: { fontSize: 12, color: '#666' },
  toggleBtn: {
    backgroundColor: '#66bb6a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  toggleText: { color: '#fff', fontWeight: '700' },
});

