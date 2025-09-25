import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Category = ({ text, img, press }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={press}>
      <Image style={styles.categoryImage} source={img} />
      <Text style={styles.categoryText}>{text}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Banner trên cùng */}
      <View style={styles.bannerTop}>
        <Image
          source={require('../assets/images/img1.jpg')}
          style={styles.bannerImage}
        />
      </View>

      {/* Danh mục */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {[
          { text: 'THI SÁT HẠCH', img: require('../assets/images/home/1.png') },
          { text: 'HỌC LÝ THUYẾT', img: require('../assets/images/home/2.png') },
          { text: 'BIỂN BÁO ĐƯỜNG BỘ', img: require('../assets/images/home/3.png') },
          { text: 'MẸO THI HIỆU QUẢ', img: require('../assets/images/home/4.png') },
          { text: 'TRA CỨU LUẬT NHANH', img: require('../assets/images/home/5.png') },
          { text: 'ĐÈN CẢNH BÁO TAPLO', img: require('../assets/images/home/6.png') },
        ].map((item, index) => (
          <Category
            key={index}
            text={item.text}
            img={item.img}
            // press={() => navigation.navigate('...')}
          />
        ))}
      </ScrollView>

      {/* Banner dưới */}
      <View style={styles.bannerBottom}>
        <Image
          source={require('../assets/images/img2.webp')}
          style={styles.bannerImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  bannerTop: {
    flex: 3,
  },
  bannerBottom: {
    flex: 2,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Khu vực lưới danh mục
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#f5f6fa',
  },
  categoryCard: {
    width: '40%',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});

export default Home;
