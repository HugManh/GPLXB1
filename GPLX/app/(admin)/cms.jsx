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
import { getAllSignsPage } from '../../services/firestoreService';
import { useRouter } from 'expo-router';
import { useIsFocused } from '@react-navigation/native';

const CMSScreen = () => {
  const [signs, setSigns] = useState([]);
  const [cursors, setCursors] = useState({}); // lưu lastVisible cho từng type
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
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

      setSigns((prev) => [...prev, ...merged]);

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
      <FlatList
        data={signs}
        keyExtractor={(item) => `${item.type}_${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        onEndReached={loadSigns}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size='small' /> : null
        }
      />
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
