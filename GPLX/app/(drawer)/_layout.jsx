import { ImageBackground, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from './home';
import Tutorial from './tutorial';
import Skill from './skill';
import Policy from './policy';

const Drawer = createDrawerNavigator();

//Phần Menu hiện ra màn hình
function CustomDrawerContent(props) {
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: 'https://images.all-free-download.com/images/graphiclarge/traffic_background_pedestrian_car_icons_cartoon_sketch_6840605.jpg',
        }}
        style={{ width: undefined, padding: 16, paddingTop: 100, height: 200 }}
      ></ImageBackground>
      <View style={styles.container}>
        <DrawerItemList {...props} />
      </View>
    </ScrollView>
  );
}

const DrawerLayout = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Học bằng lái xe'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      backBehavior='initialRoute'
      screenOptions={{
        headerShown: true, // ẩn header nếu muốn
        headerStyle: {
          backgroundColor: '#66bb6a', // màu background header
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          alignSelf: 'center', // căn giữa title
        },
        drawerLabelStyle: { fontSize: 16, marginLeft: -10 },
      }}
    >
      <Drawer.Screen
        name='Học bằng lái xe'
        component={Home}
        options={{
          drawerLabel: 'Học bằng lái xe',
          unmountOnBlur: true,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='directions-car' size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='Hướng dẫn sử dụng'
        component={Tutorial}
        options={{
          drawerLabel: 'Hướng dẫn sử dụng',
          unmountOnBlur: true,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='menu-book' size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='Kỹ năng lái xe'
        component={Skill}
        options={{
          drawerLabel: 'Kỹ năng lái xe',
          unmountOnBlur: true,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='engineering' size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='Chính sách và điều khoản'
        component={Policy}
        options={{
          drawerLabel: 'Chính sách và điều khoản',
          unmountOnBlur: true,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='gavel' size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({
  container: { flex: 1 },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
