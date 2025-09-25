import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SignForm = ({ value, onChange, onSubmit, onReset, submitLabel = 'Save' }) => {
    const item = value || { name: '', content: '', image: '', type: '' };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Type</Text>
            <TextInput
                style={styles.input}
                value={item.type}
                onChangeText={(t) => onChange && onChange({ ...item, type: t })}
                placeholder="ban | command | danger | instruction"
            />

            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={item.name}
                onChangeText={(t) => onChange && onChange({ ...item, name: t })}
                placeholder="Name"
            />

            <Text style={styles.label}>Content</Text>
            <TextInput
                style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                value={item.content}
                onChangeText={(t) => onChange && onChange({ ...item, content: t })}
                placeholder="Content"
                multiline
            />

            <Text style={styles.label}>Image URL</Text>
            <TextInput
                style={styles.input}
                value={item.image}
                onChangeText={(t) => onChange && onChange({ ...item, image: t })}
                placeholder="https://..."
            />

            {item.image ? (
                <Image source={{ uri: item.image }} style={styles.imagePreview} />
            ) : null}

            <View style={styles.buttonRow}>
                {onReset ? (
                    <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={onReset}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                ) : null}
                <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={onSubmit}>
                    <Text style={styles.buttonText}>{submitLabel}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignForm;

const styles = StyleSheet.create({
    container: { padding: 20 },
    label: { fontWeight: '600', fontSize: 14, color: '#333', marginBottom: 6, marginTop: 12 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
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
    buttonRow: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 },
    button: { paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12, marginLeft: 10 },
    resetButton: { backgroundColor: '#e0e0e0' },
    saveButton: { backgroundColor: '#007bff' },
    buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});

