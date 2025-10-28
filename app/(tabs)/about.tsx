import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  const [loading, setLoading] = React.useState(false);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#E74C3C" />
        <Text style={{ color: '#fff', marginTop: 10 }}>Đang tải...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Về chúng tôi</Text>

      <View style={styles.section}>
        <Text style={styles.title}>🍔 Burger House</Text>
        <Text style={styles.content}>
          Chúng tôi bắt đầu từ một tiệm burger nhỏ với đam mê mang đến hương vị tươi ngon
          và chất lượng nhất cho mọi khách hàng.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>🎯 Mục Tiêu</Text>
        <Text style={styles.content}>
          Mang đến trải nghiệm ẩm thực nhanh – sạch – ngon, giúp bạn tận hưởng burger chuẩn vị
          mọi lúc, mọi nơi.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>🌿 Cam kết</Text>
        <Text style={styles.content}>
          Sử dụng nguyên liệu tươi, thịt bò 100% và rau sạch được tuyển chọn mỗi ngày.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>📍 Liên hệ</Text>
        <Text style={styles.content}>
          Địa chỉ: 123 Nguyễn Văn Bảo, Gò Vấp, TP.HCM{'\n'}
          Hotline: 1900 123 456{'\n'}
          Email: contact@burgerhouse.vn
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>⏰ Giờ hoạt động</Text>
        <Text style={styles.content}>Thứ 2 - Chủ Nhật: 9:00 - 22:00</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#FFD700',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#FFB84D',
    fontWeight: '600',
    marginBottom: 6,
  },
  content: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 22,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
});
