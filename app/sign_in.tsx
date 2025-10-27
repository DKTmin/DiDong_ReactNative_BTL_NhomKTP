import { Link, router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* Nút đăng nhập chuyển qua Home (app/(tabs)/index.tsx) */}
      <TouchableOpacity style={styles.btn} onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      {/* Link sang trang đăng ký */}
      <Link href="/sign_up" style={styles.link}>
        Don’t have an account? Sign Up
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30, color: '#ffd33d', marginBottom: 30 },
  btn: { backgroundColor: '#ffd33d', padding: 12, borderRadius: 8 },
  btnText: { color: '#25292e', fontWeight: 'bold', fontSize: 16 },
  link: { color: '#fff', marginTop: 20, textDecorationLine: 'underline' },
});
