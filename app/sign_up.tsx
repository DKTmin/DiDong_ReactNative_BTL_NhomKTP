import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Link href="/sign_in" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Go to Sign In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30, color: '#ffd33d', marginBottom: 30 },
  btn: { backgroundColor: '#ffd33d', padding: 12, borderRadius: 8 },
  btnText: { color: '#25292e', fontWeight: 'bold', fontSize: 16 },
});
