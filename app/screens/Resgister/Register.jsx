import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encryptData} from '../../utils/Cripto'
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import logo from '../../../assets/logo.png';
import twiter from '../../../assets/twiter.png';
import { styles } from "./Styles";

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    let hasError = false;

    if (name.trim() === '') {
      Alert.alert('Erro', 'O nome não pode estar vazio');
      hasError = true;
    }

    if (email.trim() === '') {
      Alert.alert('Erro', 'O email não pode estar vazio');
      hasError = true;
    }

    if (password.trim() === '') {
      Alert.alert('Erro', 'A senha não pode estar vazia');
      hasError = true;
    }

    if (confirmPassword.trim() === '') {
      Alert.alert('Erro', 'A confirmação de senha não pode estar vazia');
      hasError = true;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      hasError = true;
    }

    if (!hasError) {
      const userData = { name, email, password };
      
      const encryptedData = encryptData(JSON.stringify(userData));

      await AsyncStorage.setItem('user_data', encryptedData);
      console.log(userData)
      Alert.alert('Sucesso', 'Registro enviado com sucesso!');
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.containerImage} />
      <Text style={styles.textoH1}>Seja bem-vindo</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Name'
          value={name}
          onChangeText={setName}
          style={styles.textInput}
        />
        <TextInput
          placeholder='Email'
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
        />
        <TextInput
          placeholder='Password'
          style={styles.textInput}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder='Confirm password'
          style={styles.textInput}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.buttonRegister}
        >
          Registre-se
        </TouchableOpacity>
        <Text style={styles.textH3}>Ou se registre por</Text>
        <View style={styles.containerSocialMedia}>
          <TouchableOpacity onPress={() => {}} style={styles.buttonSocialMedia}>
            <Image source={google} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.buttonSocialMedia}>
            <Image source={facebook} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.buttonSocialMedia}>
            <Image source={twiter} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textH3}>Já tem uma conta? 
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.textLink}> Login</Text>
        </Text>
      </View>
    </View>
  );
}
