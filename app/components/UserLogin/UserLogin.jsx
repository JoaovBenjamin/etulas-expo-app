import React, { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import logo from '../../../assets/logo.png';
import { styles } from "./Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-web';
import SocialLogin from '../SocialLogin/SocialLogin';
import UserRegister from '../UserRegister/UserRegister';
import {decryptData} from '../../utils/Cripto'
import {useNavigation} from '@react-navigation/native'


const UserLogin = () => {
  const navigation = useNavigation();
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
          alert("Dados incorretos")
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


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.containerImage} />
      <Text style={styles.textoH1}>Seja bem-vindo de volta!</Text>
      <View style={styles.containerInputerInput}>
        <TextInput
          placeholder='Email'
          style={styles.textInput}
          inputMode='email'
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
        <Pressable onPress={handleLogin} style={styles.buttonLogin}>Login</Pressable>
        <Text style={styles.textH3}>ou entre por</Text>
      </View>
      <SocialLogin></SocialLogin>
      <UserRegister></UserRegister>
    </ScrollView>
  );
}

export default UserLogin;
