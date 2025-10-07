import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Policy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.heading}>1. Chấp nhận chính sách này</Text>
          <Text style={styles.paragraph}>
            Bằng cách truy cập, truy cập hoặc sử dụng Dịch vụ của chúng tôi, bạn lệnh
            truy cập và đại diện cho rằng bạn đã đọc, hiểu và đồng ý với Chính sách này
            và Điều khoản Dịch vụ của chúng tôi. Nếu bạn không đồng ý với bất cứ điều gì
            trong Chính sách này, bạn có thể không sử dụng hoặc truy cập Dịch vụ.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>2. Sửa đổi chính sách này</Text>
          <Text style={styles.paragraph}>
            Chúng tôi có thể thay đổi định kỳ về Chính sách này khi cập nhật hoặc mở rộng
            Dịch vụ của mình. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi quan trọng
            nào bằng cách gửi email hoặc thông báo trong ứng dụng trước khi có hiệu lực.
            Nếu bạn không đồng ý với các thay đổi, vui lòng ngừng sử dụng Dịch vụ trước khi
            chính sách sửa đổi có hiệu lực. Việc tiếp tục sử dụng đồng nghĩa với việc bạn
            chấp nhận chính sách mới.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>3. Thông tin thu thập thông qua Dịch vụ</Text>
          <Text style={styles.paragraph}>
            Trong Chính sách này, "thông tin cá nhân" bao gồm mọi thông tin nhận dạng hoặc
            tạo ra một danh tính cá nhân. Dịch vụ của chúng tôi không thu thập bất kỳ
            thông tin nào của bạn và cam kết không lưu trữ dữ liệu cá nhân.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Policy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    color: '#1E88E5',
    fontWeight: 'bold',
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  paragraph: {
    marginTop: 10,
    fontSize: 16,
    color: '#424242',
    lineHeight: 24,
    textAlign: 'justify',
  },
});

