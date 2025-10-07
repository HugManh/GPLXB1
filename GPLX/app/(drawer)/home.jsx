import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

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
      <View style={styles.bannerTop}>
        <Image
          source={require('../../assets/images/img1.jpg')}
          style={styles.bannerImage}
        />
      </View>

      <ScrollView contentContainerStyle={styles.gridContainer}>
        {[
          { key: '(home)/exam', text: 'THI SÁT HẠCH', img: require('../../assets/images/home/1.png') },
          { key: '(home)/theory', text: 'HỌC LÝ THUYẾT', img: require('../../assets/images/home/2.png') },
          { key: '(home)/signs', text: 'BIỂN BÁO ĐƯỜNG BỘ', img: require('../../assets/images/home/3.png') },
          { key: '(home)/tips', text: 'MẸO THI HIỆU QUẢ', img: require('../../assets/images/home/4.png') },
          { key: '(home)/laws', text: 'TRA CỨU LUẬT NHANH', img: require('../../assets/images/home/5.png') },
          { key: '(home)/taplo', text: 'ĐÈN CẢNH BÁO TAPLO', img: require('../../assets/images/home/6.png') },
        ].map((item, index) => (
          <Category
            key={index}
            text={item.text}
            img={item.img}
            press={() => {
              router.push(`/${item.key}`);
            }}
          />
        ))}
      </ScrollView>

      <View style={styles.bannerBottom}>
        <Image
          source={require('../../assets/images/img2.webp')}
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
    elevation: 4,
    shadowColor: '#000',
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

