import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Account() {
  const [user, setUser] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0901234567',
    address: '123 Nguyễn Văn Bảo, Gò Vấp, TP.HCM',
  });

  const handleSave = () => {
    console.log('Thông tin đã lưu:', user);
    alert('Cập nhật thông tin thành công ✅');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>👤 Tài khoản của tôi</Text>

        {/* Thông tin cá nhân */}
        <View style={styles.section}>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput
            style={styles.input}
            value={user.name}
            onChangeText={(text) => setUser({ ...user, name: text })}
            placeholder="Nhập họ và tên"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
            placeholder="Nhập email"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            value={user.phone}
            onChangeText={(text) => setUser({ ...user, phone: text })}
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Địa chỉ giao hàng</Text>
          <TextInput
            style={[styles.input, { height: 60 }]}
            value={user.address}
            onChangeText={(text) => setUser({ ...user, address: text })}
            placeholder="Nhập địa chỉ giao hàng"
            placeholderTextColor="#999"
            multiline
          />
        </View>

        {/* Các tùy chọn tài khoản */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>⚙️ Tùy chọn</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Lịch sử đơn hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Mã giảm giá của tôi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Trung tâm hỗ trợ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={[styles.optionText, { color: '#E74C3C' }]}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>

        {/* Nút lưu */}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>💾 Lưu thay đổi</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    color: '#FFD700',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  label: {
    color: '#FFB84D',
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 15,
  },
  subHeader: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    paddingVertical: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#E67E22',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
