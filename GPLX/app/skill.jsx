import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable
} from 'react-native';

export default class Skill extends Component {
  state = {
    ListItems: [
      { id: '1', key: 'Dành cho người mới lái xe' },
      { id: '2', key: 'Kỹ thuật lái xe ban đêm' },
      { id: '3', key: 'Kỹ năng lái xe số tự động (AT)' },
      { id: '4', key: 'Kỹ thuật lái xe ô tô lên, xuống dốc an t...' },
      { id: '5', key: 'Thế nào là một lái xe giỏi' },
      { id: '6', key: 'Những dấu hiệu lái xe chưa thành thạo' },
      { id: '7', key: 'Lái xe qua đường ngập ước' },
    ],
  };

  renderItem = ({ item }) => (
    <Pressable style={styles.card} android_ripple={{color:'#e0e0e0'}}>
      <View style={styles.cardContent}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.title}>{item.key}</Text>
      </View>
    </Pressable>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.ListItems}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          contentContainerStyle={styles.listContent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  listContent: {
    padding: 16,
    paddingTop: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  id: {
    backgroundColor: '#f2f2f2',
    color: '#333',
    fontWeight: 'bold',
    width: 32,
    height: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 16,
  },
  title: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
