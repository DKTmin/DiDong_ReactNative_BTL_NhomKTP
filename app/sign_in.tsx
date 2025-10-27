import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import CheckBox from 'expo-checkbox';

export default function SignIn() {
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/Logo_SignIn_SignUp.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subtitle}>Sign into your account via email</Text>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={styles.row}>
          <View style={styles.rememberContainer}>
            <CheckBox value={remember} onValueChange={setRemember} color={remember ? '#ff8c00' : undefined} />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </View>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInBtn} onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.signInText}>Sign in →</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.socialText}>Sign in with social media</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-google" size={20} color="#000" />
          <Text style={styles.socialBtnText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-facebook" size={20} color="#1877F2" />
          <Text style={styles.socialBtnText}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom link */}
      <Text style={styles.footerText}>
        Not a member?{' '}
        <Link href="/sign_up" style={styles.footerLink}>
          Create a new account
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
  },
  form: {
    width: '100%',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rememberText: {
    color: '#000',
  },
  forgotText: {
    color: '#555',
    fontWeight: '500',
  },
  signInBtn: {
    backgroundColor: '#ff8c00',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialText: {
    color: '#888',
    marginBottom: 10,
  },
  socialButtons: {
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 12,
    justifyContent: 'center',
    gap: 8,
  },
  socialBtnText: {
    fontSize: 15,
    color: '#000',
  },
  footerText: {
    color: '#555',
    fontSize: 14,
  },
  footerLink: {
    color: '#ff8c00',
    fontWeight: 'bold',
  },
});
