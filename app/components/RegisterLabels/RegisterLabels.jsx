import { ScrollView, Text, View, TextInput, Pressable, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encryptData} from '../../utils/Cripto'
import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {styles} from './Styles'
import logo from "../../../assets/logo.png"
import RegisterSocial from '../RegisterSocial/RegisterSocial';

const RegisterLabels = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
  
    const validationFields = () => {
      let hasError = false;
  
      if (name.trim() === '') {
        alert('Erro', 'O nome não pode estar vazio');
        hasError = true;
      }
  
      if (email.trim() === '') {
        alert('Erro', 'O email não pode estar vazio');
        hasError = true;
      }
  
      if (password.trim() === '') {
        alert('Erro', 'A senha não pode estar vazia');
        hasError = true;
      }
  
      if (confirmPassword.trim() === '') {
        alert('Erro', 'A confirmação de senha não pode estar vazia');
        hasError = true;
      }
  
      if (password !== confirmPassword) {
        alert('Erro', 'As senhas não coincidem');
        hasError = true;
      }

      return true
      
    };
  
    const saveUser = async (userData) => {
      try {
        const encryptedData = encryptData(JSON.stringify(userData));
        if (encryptedData) {
          await AsyncStorage.setItem("user_data", encryptedData);
          console.log("Dados criptografados salvos:", encryptedData);
          alert("Sucesso", "Registro enviado com sucesso!");
          navigation.navigate("Login");
        } else {
          console.error("Falha na criptografia dos dados");
        }
      } catch (error) {
        console.error("Erro ao salvar dados:", error);
      }
    };
  
    const handleRegister = async () => {
      if (validationFields()) {
        const userData = { email, password };
        await saveUser(userData);
      }
    };

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
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
        <Pressable
          onPress={handleRegister}
          style={styles.buttonRegister}
        >
          Registre-se
        </Pressable>
        <Text style={styles.textH3}>Ou se registre por</Text>
    </View>
    <RegisterSocial/>
    </ScrollView>
    </>
  )
}

export default RegisterLabels

