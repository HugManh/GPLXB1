import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { homeStyles } from '../../assets/styles/home.styles';
import { Stack } from 'expo-router';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={homeStyles.button2} onPress={this.props.press}>
        <Image style={homeStyles.imageButton} source={this.props.img} />
        <Text style={homeStyles.button1}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const Home = () => {
  return (
    <View style={homeStyles.container}>
      <View style={{ backgroundColor: '#31edd1', flex: 3.5 }}>
        <Image
          source={require('../../assets/images/img1.jpg')}
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
        />
      </View>

      <View style={homeStyles.gridList}>
        <View style={homeStyles.button}>
          <Category
            text='THI SÁT HẠCH'
            img={require('../../assets/images/home/1.png')}
            // press={() => navigation.navigate('Test')}
          />
          <Category
            text='HỌC LÝ THUYẾT'
            img={require('../../assets/images/home/2.png')}
            // press={() => navigation.navigate('Learn')}
          />
          <Category
            text='BIỂN BÁO ĐƯỜNG BỘ'
            img={require('../../assets/images/home/3.png')}
            // press={() => navigation.navigate('Signs')}
          />
        </View>
        <View style={homeStyles.button}>
          <Category
            text='MẸO THIẾT QUẢ CAO'
            img={require('../../assets/images/home/4.png')}
            // press={() => navigation.navigate('Tips')}
          />
          <Category
            text='TRA CỨU LUẬT NHANH'
            img={require('../../assets/images/home/5.png')}
            // press={() => navigation.navigate('Rules')}
          />
          <Category
            text='ĐÈN CẢNH BÁO TÁP LÔ'
            img={require('../../assets/images/home/6.png')}
            // press={() => navigation.navigate('Taplo')}
          />
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          source={require('../../assets/images/img2.webp')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default Home;
