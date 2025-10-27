import { View, Text, StyleSheet } from 'react-native';

export default function Pay() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>💳 Payment Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff', fontSize: 18 },
});
