import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Tutorial extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.intro}>
          Đây là ứng dụng giúp bạn học lý thuyết để chuẩn bị cho kỳ thi sát hạch
          lý thuyết lái xe chỉ trong 3 ngày. Vui lòng thực hiện các bước dưới
          đây để đạt kết quả thi tốt nhất và rút ngắn nhất thời gian ôn luyện!
        </Text>

        <Text style={styles.step}>
          1. Ngày đầu tiên bạn nên dành 8 tiếng để học hết tất cả các loại biển
          báo hay gặp. Tập trung vào các loại biển báo cấm, biển báo hiệu lệnh,
          biển báo chỉ dẫn, biển báo nguy hiểm...
        </Text>

        <Text style={styles.step}>
          2. Ngày thứ 2 bạn hãy vào phần học 450 câu lý thuyết, học đi học lại
          các câu này và các mẹo làm của từng câu; nhớ các định nghĩa cơ bản như
          nồng độ cồn, tốc độ cho phép… và học mẹo làm bài các câu hỏi sa hình.
        </Text>

        <Text style={styles.step}>
          3. Ngày thứ 3 bạn hãy vào làm hết các bộ đề thi của từng hạng bằng lái
          xe. Sau khi làm xong tất cả các đề mặc định (đều đạt &gt; 28 câu), hãy
          chọn 1 đề xáo trộn và làm đến khi nào điểm thi của bạn đều đạt.
        </Text>

        <Text style={styles.step}>
          4. Nếu bạn đã hoàn thành 3 bước trên, chỉ cần giữ tự tin và bình tĩnh
          khi thi, chắc chắn bạn sẽ đạt kết quả cao. Chúc bạn thi đỗ với số điểm
          tối đa!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('home')}
        >
          <Text style={styles.buttonText}>Bắt đầu sử dụng</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: '#f5f5f5', // nền xám nhạt tổng thể
  },
  intro: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    lineHeight: 22,
  },
  step: {
    fontSize: 16,
    marginBottom: 20,
    color: '#444',
    lineHeight: 22,
  },
  button: {
    marginTop: 10,
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 12,
    backgroundColor: '#66bb6a', // xanh lá đồng bộ header
    borderRadius: 30,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
