import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, Dimensions, View, StyleSheet, Text } from 'react-native';

var GridListItems = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
];
var { width } = Dimensions.get('window');

export default class Test extends Component {
  renderTest = (item) => {
    return (
      <TouchableOpacity
        style={[{ width: width / 3 }, { height: width / 3 }, { padding: 15 }]}
        onPress={() => this.props.navigation.navigate('ListTest')}
      >
        <View style={styles.button6}>
          <Text style={styles.button8}>Đề số {item.id}</Text>
          <Text style={styles.button7}>0/20 câu</Text>
        </View>
        <Text style={styles.button1}>Làm bài</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={GridListItems}
          renderItem={({ item }) => <View>{this.renderTest(item)}</View>}
          numColumns={3}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  button2: {
    backgroundColor: '#fff',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderWidth: 2,
    borderRadius: 70,
    borderColor: 'green',
  },
  button1: {
    top: '22%',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'green',
  },
  button6: {
    top: '22%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  button7: {
    fontSize: 10,
    textAlign: 'center',
  },
  button8: {
    fontSize: 20,
    textAlign: 'center',
  },
});
