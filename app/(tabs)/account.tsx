import { View, Text, StyleSheet } from 'react-native';

export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 Account Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff', fontSize: 18 },
});
