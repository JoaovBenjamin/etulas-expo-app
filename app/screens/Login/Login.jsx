import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decryptData } from '../../utils/Cripto'
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import logo from '../../../assets/logo.png';
import twiter from '../../../assets/twiter.png';
import { styles } from "./Styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = async () => {
      try {
        const encryptedData = await AsyncStorage.getItem("user_data");
        if (encryptedData) {
          const decryptedData = JSON.parse(decryptData(encryptedData));
          const { email: storedEmail, password: storedPassword } = decryptedData;
  
          if (email === storedEmail && password === storedPassword) {
            Alert.alert("Sucesso", "Login bem-sucedido!");
            navigation.navigate("Home"); 
            console.log("Dados desincriptografado", decryptedData)
          } else {
            Alert.alert("Erro", "Nome ou senha incorretos.");
          }
        } else {
          Alert.alert("Erro", "Nenhum usuário registrado.");
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        Alert.alert("Erro", "Ocorreu um erro ao tentar fazer login.");
      }
    };
  
  const HandleLoginMedia = () => {
    alert('Login realizado com sucesso');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.containerImage} />
      <Text style={styles.textoH1}>Seja bem-vindo de volta!</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Email'
          style={styles.textInput}
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder='Password'
          style={styles.textInput}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>Login</TouchableOpacity>
        <Text style={styles.textH3}>ou entre por</Text>
        <View style={styles.containerSocialMedia}>
          <TouchableOpacity onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
            <Image source={google} />
          </TouchableOpacity>
          <TouchableOpacity onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
            <Image source={facebook} />
          </TouchableOpacity>
          <TouchableOpacity onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
            <Image source={twiter} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textH3}>Não tem conta? 
          <Text 
            onPress={() => navigation.navigate('Registro')}
            style={styles.textLink}> Registre-se</Text>
        </Text>
      </View>
    </View>
  );
}

export default Login;
