import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function BurgerList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 Burger List</Text>
      <Text style={styles.subtitle}>Welcome to BurgerFast Home!</Text>

      <Link href="/(tabs)/pay" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Go to Payment</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', alignItems: 'center' },
  title: { color: '#ffd33d', fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#fff', marginBottom: 20 },
  btn: { backgroundColor: '#ffd33d', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  btnText: { color: '#25292e', fontWeight: 'bold' },
});
