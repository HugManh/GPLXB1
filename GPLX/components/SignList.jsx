import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SignCard = ({ item, onEdit }) => (
    <View style={styles.card}>
        {item.image ? (
            <Image source={{ uri: item.image }} style={styles.image} resizeMode='cover' />
        ) : null}
        <View style={styles.content}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.title}>{item.name || 'No Name'}</Text>
            <Text style={styles.text} numberOfLines={3}>{item.content || 'No Content'}</Text>
        </View>
        {onEdit ? (
            <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
                <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
        ) : null}
    </View>
);

const SignList = ({ data, onEdit, onEndReached, loading }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => `${item.type}_${item.id}`}
            renderItem={({ item }) => <SignCard item={item} onEdit={onEdit} />}
            contentContainerStyle={styles.listContainer}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <Text style={styles.loading}>Loading...</Text> : null}
        />
    );
};

export default SignList;

const styles = StyleSheet.create({
    listContainer: { padding: 10 },
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
    image: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
    content: { flex: 1, justifyContent: 'center' },
    type: { fontSize: 12, color: '#888', marginBottom: 2 },
    title: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
    text: { fontSize: 14, color: '#555' },
    editButton: { backgroundColor: '#007bff', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
    editText: { color: '#fff', fontWeight: 'bold' },
    loading: { textAlign: 'center', padding: 10, color: '#666' }
});

