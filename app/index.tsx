import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 BurgerFast</Text>
      <Text style={styles.subtitle}>Welcome to the fastest burger app!</Text>

      <View style={styles.buttons}>
        {/* <Link href="/sign_in" asChild>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </Link> */}

        <Link href="/sign_in" style={styles.btn}>
          <Text style={styles.btnText}>Sign In</Text>
        </Link>

        {/* <Link href="/sign_up" asChild>
          <TouchableOpacity style={[styles.btn, styles.outlineBtn]}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </Link> */}

        <Link href="/sign_up" style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#ffd33d', marginBottom: 10 },
  subtitle: { color: '#fff', fontSize: 16, marginBottom: 40 },
  buttons: { flexDirection: 'row', gap: 16 },
  btn: { backgroundColor: '#ffd33d', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  outlineBtn: { backgroundColor: '#ffb800' },
  btnText: { color: '#25292e', fontWeight: 'bold', fontSize: 16 },
});
