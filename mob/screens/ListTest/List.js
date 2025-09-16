import React, { useState } from 'react';
import { CheckBox, Text, StyleSheet, View, Alert, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ListTest() {
  const [setSelection] = useState(false);
  const [setSelection2] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.header}>
            1. Người lái xe không được quay đầu xe tại các khu vực nào nêu dưới
            đây?
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection} style={styles.checkbox} />
            <Text style={styles.label}>Nơi đường giao nhau.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>Trên cầu.</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.header}>
            2. Người lái xe không được quay đầu xe tại các khu vực nào nêu dưới
            đây? trên cầu, gầm cầu vượt, đường ngầm hay khu vực đường bộ giao
            nhau cùng mức với đường sắt?
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection} style={styles.checkbox} />
            <Text style={styles.label}>Gầm cầu vượt.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>Nơi đường giao nhau.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>
              Nơi có biển báo cho phép quay đầu xe.
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.header}>
            3. Người lái xe không được quay đầu xe tại các khu vực nào nêu dưới
            đây?
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection} style={styles.checkbox} />
            <Text style={styles.label}>Nơi đường giao nhau.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>
              Nơi có biển báo cho phép quay đầu xe.
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>Đường ngầm.</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.header}>
            4. Người lái xe không được quay đầu xe tại các khu vực nào nêu dưới
            đây?
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection} style={styles.checkbox} />
            <Text style={styles.label}>
              Nơi có biển báo cho phép quay đầu xe.
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>Nơi đường giao nhau.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>
              Nơi đường bộ giao nhau cùng mức với đường sắt.
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.header}>
            5. Trên cầu đường bộ đi chung với đường sắt thì loại phương tiện nào
            được quyền ưu tiên đi trước?
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection} style={styles.checkbox} />
            <Text style={styles.label}>
              Phương tiện nào bên phải không vướng.
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>
              Phương tiện nào ra tín hiệu xin đường trước.
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>Phương tiện giao thông đường sắt.</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.header}>
            6. Hành vi đua xe, cổ vũ đua xe, tổ chức đua xe trái phép trên đường
            bộ có bị nghiêm cấm không?
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection} style={styles.checkbox} />
            <Text style={styles.label}>Không nghiêm cấm.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>
              Bị nghiêm cấm tuỳ theo các tuyến đường.{' '}
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox onValueChange={setSelection2} style={styles.checkbox} />
            <Text style={styles.label}>Bị nghiêm cấm.</Text>
          </View>
        </View>
        <View>
          <Button title="Nộp bài" onPress={() => Alert.alert('Kết quả: 4/6')} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontWeight: 'bold',
    paddingLeft: 0,
    paddingRight: 10,
  },

  checkboxContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
