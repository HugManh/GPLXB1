import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  getSignItemById,
  updateSignItemById,
  createSignItem,
} from '../../services/firestoreService';
import SignForm from '../../components/SignForm';

const EditScreen = () => {
  const router = useRouter();
  const { id, type } = useLocalSearchParams();
  const [item, setItem] = useState({ name: '', content: '', image: '', type: type || '' });
  const [originalItem, setOriginalItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [focusKeys, setFocusKeys] = useState({
    name: false,
    content: false,
    image: false,
  });

  useEffect(() => {
    const loadItem = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      const data = await getSignItemById(type, id);
      if (!data) {
        router.back();
        return;
      }
      setItem(data);
      setOriginalItem(data);
      setLoading(false);
    };
    loadItem();
  }, [id, type]);

  const handleSave = async () => {
    if (!item.name.trim()) return;
    if (id) {
      await updateSignItemById(item.type || type, id, item);
    } else {
      const created = await createSignItem(item.type || type, item);
      if (created?.id) {
        // optional: navigate back or to detail
      }
    }
    router.back();
  };

  const handleReset = () => {
    if (originalItem) setItem(originalItem);
  };

  if (loading)
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 16, color: '#666' }}>Loading...</Text>
      </View>
    );

  const renderInput = (label, valueKey, multiline = false) => (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          value={item[valueKey]}
          onChangeText={(text) =>
            setItem((prev) => ({ ...prev, [valueKey]: text }))
          }
          style={[
            styles.input,
            multiline && { height: 100, textAlignVertical: 'top' },
          ]}
          multiline={multiline}
          onFocus={() =>
            setFocusKeys((prev) => ({ ...prev, [valueKey]: true }))
          }
          onBlur={() =>
            setFocusKeys((prev) => ({ ...prev, [valueKey]: false }))
          }
        />
        {focusKeys[valueKey] && item[valueKey] ? (
          <TouchableOpacity
            onPress={() => setItem((prev) => ({ ...prev, [valueKey]: '' }))}
            style={styles.clearButton}
          >
            <Text style={{ fontSize: 18, color: '#999' }}>×</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SignForm value={item} onChange={setItem} onSubmit={handleSave} onReset={handleReset} submitLabel={id ? 'Save Changes' : 'Create'} />
    </ScrollView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f9f9f9', flexGrow: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontWeight: '600', fontSize: 14, color: '#333', marginBottom: 6 },
  inputWrapper: { position: 'relative' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    paddingRight: 36,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginVertical: 15,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: '#e0e0e0',
  },
  saveButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
