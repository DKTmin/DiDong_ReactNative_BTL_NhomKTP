import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function GetStarted() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/Logo_GetStarted.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>BURGERFAST</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>We make burgers to die for</Text>

      {/* Buttons */}
      <View style={styles.buttons}>
        {/* Sign in */}
        <Link href="/sign_in" asChild>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>
        </Link>

        {/* Get started */}
        <Link href="/sign_up" asChild>
          <TouchableOpacity style={styles.getStartedBtn}>
            <Text style={styles.getStartedText}>Get started →</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    marginBottom: 50,
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
  },
  signInBtn: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  signInText: {
    color: '#000',
    fontSize: 16,
  },
  getStartedBtn: {
    width: '100%',
    backgroundColor: '#ff8c00',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
