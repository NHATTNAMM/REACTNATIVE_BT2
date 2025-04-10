import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ImageBackground,} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login thành công', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <ImageBackground
      source={require('../assets/images/doremon.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logodr.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        <TextInput
          placeholder="USERNAME"
          placeholderTextColor="#000"
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          placeholder="PASSWORD"
          placeholderTextColor="#000"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerContainer}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 120,
    alignSelf: 'center',
    marginBottom: 50,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 5,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#b76e79',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  registerText: {
    color: '#000',
    fontStyle: 'italic',
  },
});
