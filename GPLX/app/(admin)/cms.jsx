import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useEffect, useState } from 'react';
import { getAllSignsPage, createSignItem } from '../../services/firestoreService';
import SignList from '../../components/SignList';
import { useRouter } from 'expo-router';
import { useIsFocused } from '@react-navigation/native';

const CMSScreen = () => {
  const [signs, setSigns] = useState([]);
  const [cursors, setCursors] = useState({}); // lưu lastVisible cho từng type
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [activeType, setActiveType] = useState('all');
  const router = useRouter();
  const isFocused = useIsFocused();
  const PAGE_SIZE = 10;

  const loadSigns = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const data = await getAllSignsPage(PAGE_SIZE, cursors);
      // data = { ban: {items, lastVisible}, command: {items, lastVisible}, ... }

      const merged = Object.entries(data).flatMap(([type, value]) =>
        (value.items || []).map((item) => ({ ...item, type }))
      );

      setSigns((prev) => {
        const existingKeys = new Set(prev.map((i) => `${i.type}_${i.id}`));
        const incoming = merged.filter((i) => !existingKeys.has(`${i.type}_${i.id}`));
        return [...prev, ...incoming];
      });

      // cập nhật cursors
      const newCursors = { ...cursors };
      let more = false;
      Object.entries(data).forEach(([type, value]) => {
        if (value.lastVisible) {
          newCursors[type] = value.lastVisible;
          more = true;
        }
      });
      setCursors(newCursors);
      setHasMore(more);
    } catch (err) {
      console.error('Error loading signs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isFocused) return;
    setSigns([]);
    setCursors({});
    setHasMore(true);
    loadSigns();
  }, [isFocused]);

  const handleEdit = (item) => {
    router.push({
      pathname: '/(admin)/edit',
      params: {
        id: item.id,
        name: item.name,
        content: item.content,
        type: item.type,
      },
    });
  };

  const handleCreate = async () => {
    router.push({ pathname: '/(admin)/edit', params: { type: 'ban' } });
  };

  const filtered = activeType === 'all' ? signs : signs.filter(s => s.type === activeType);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode='cover'
        />
      ) : null}
      <View style={styles.content}>
        <Text style={styles.title}>{item.name || 'No Name'}</Text>
        <Text style={styles.text}>{item.content || 'No Content'}</Text>
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleEdit(item)}
      >
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity style={[styles.typeBtn, activeType==='all' && styles.typeBtnActive]} onPress={() => setActiveType('all')}>
          <Text style={styles.typeText}>All</Text>
        </TouchableOpacity>
        {['ban','command','danger','instruction'].map(t => (
          <TouchableOpacity key={t} style={[styles.typeBtn, activeType===t && styles.typeBtnActive]} onPress={() => setActiveType(t)}>
            <Text style={styles.typeText}>{t}</Text>
          </TouchableOpacity>
        ))}
        <View style={{flex:1}} />
        <TouchableOpacity style={styles.addBtn} onPress={handleCreate}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>+ New</Text>
        </TouchableOpacity>
      </View>
      <SignList data={filtered} onEdit={handleEdit} onEndReached={loadSigns} loading={loading} />
    </View>
  );
};

export default CMSScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
