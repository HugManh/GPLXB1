import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { ImageBackground, StyleSheet, View } from 'react-native';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <ImageBackground
        source={{
          uri: 'https://images.all-free-download.com/images/graphiclarge/traffic_background_pedestrian_car_icons_cartoon_sketch_6840605.jpg',
        }}
        style={styles.headerBg}
        resizeMode="cover"
      />
      <View style={styles.menuList}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      initialRouteName="home"
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
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="home"
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
        options={{
          drawerLabel: 'Chính sách & điều khoản',
          title: 'Chính sách & điều khoản',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="gavel" size={size} color={color} />
          ),
        }}
      />
      {/* Drawer chỉ chứa Home. Các màn khác là Stack screens riêng lẻ. */}
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  headerBg: {
    height: 160,
    width: '100%',
  },
  menuList: {
    flex: 1,
    paddingTop: 10,
  },
});

