import React from 'react';
import { View, Text, homeStylesheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { homeStyles } from '../../assets/styles/home.styles';

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

const HomeScreen = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     GridListItems: [
  //       {icon:"", key: "THI SÁT HẠNH" },
  //       {icon:"", key: "HỌC LÝ THUYẾT" },
  //       {icon:"", key: "BIỂN BÁO ĐƯỜNG BỘ" },
  //       {icon:"", key: "MẸO THI KẾT QUẢ CAO" },
  //       {icon:"", key: "TRA CỨU LUẬT (NĐ 100/2019/" },
  //       {icon:"", key: "CÁC CÂU HAY SAI" },
  //     ]
  //   };
  // }
  // GetGridViewItem(item) {
  //   Alert.alert(item);
  // }
  return (
    <View style={homeStyles.container}>
      {/* <StatusBar
                    barStyle = "light-content"
                    hidden = {false}
                    backgroundColor = "#4cb050"
                    translucent = {false}
                 />
                 <View style={homeStyles.Header}>
                //    <Icon name='ios-menu' size={40} color='white' onPress={() => navigation.openDrawer()} />
                   <Text style={homeStyles.textHeader}>Ôn thi giấy phép lái xe</Text>
                 </View> */}

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
        {/* <FlatList
                      data={ this.state.GridListItems }
                      renderItem={ ({item}) =>
                        <View style={homeStyles.GridViewContainer}>
                          <Image />
                          <Text style={homeStyles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                        </View> }
                      numColumns={3}
                  /> */}
      </View>
      <View style={{ flex: 2 }}>
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          source={require('../../assets/images/img2.webp')}
        />
        {/* <TouchableOpacity style={homeStyles.addButton}>
              <Text style={homeStyles.iconButton}>+</Text>
            </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default HomeScreen;
