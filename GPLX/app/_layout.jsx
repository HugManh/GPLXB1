import { ImageBackground, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from './home';
import Tutorial from './tutorial';
import Skill from './skill';
import Policy from './policy';
import { useRouter } from 'expo-router';

const Drawer = createDrawerNavigator();

// Custom drawer chỉ có header ảnh nền
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      {/* Header: ảnh nền full chiều ngang */}
      <ImageBackground
        source={{
          uri: 'https://images.all-free-download.com/images/graphiclarge/traffic_background_pedestrian_car_icons_cartoon_sketch_6840605.jpg',
        }}
        style={styles.headerBg}
        resizeMode="cover"
      />
      {/* Danh sách menu */}
      <View style={styles.menuList}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const RootLayout = () => {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        backBehavior="initialRoute"
        screenOptions={{
          drawerActiveTintColor: '#66bb6a',
          drawerInactiveTintColor: '#555',
          drawerHideStatusBarOnOpen: true,
          drawerLabelStyle: { fontSize: 16 },
          headerStyle: {
            backgroundColor: '#66bb6a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >
        <Drawer.Screen
          name="home"
          component={Home}
          options={{
            drawerLabel: 'Học bằng lái xe',
            title: 'Học bằng lái xe',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="directions-car" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="tutorial"
          component={Tutorial}
          options={{
            drawerLabel: 'Hướng dẫn sử dụng',
            title: 'Hướng dẫn sử dụng',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="menu-book" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="skill"
          component={Skill}
          options={{
            drawerLabel: 'Kỹ năng lái xe',
            title: 'Kỹ năng lái xe',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="engineering" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="policy"
          component={Policy}
          options={{
            drawerLabel: 'Chính sách & điều khoản',
            title: 'Chính sách & điều khoản',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="gavel" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  headerBg: {
    height: 160,          // chiều cao header, tuỳ chỉnh
    width: '100%',        // full chiều ngang
  },
  menuList: {
    flex: 1,
    paddingTop: 10,
  },
});
