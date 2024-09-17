import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import logo from '../../../assets/logo.png';
import twiter from '../../../assets/twiter.png';
import {styles} from "./Styles"
import { useEffect, useState } from 'react';


export default function Register({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
      let hasError = false;
  
      if (name.trim() === '') {
        Alert.alert('Erro', 'O nome não pode estar vazio');
        alert('Nome não pode estar vazio')
        hasError = true;
      }
  
      if (email.trim() === '') {
        Alert.alert('Erro', 'O email não pode estar vazio');
        alert('Email não pode estar vazio')
        hasError = true;
      }
  
      if (password.trim() === '') {
          alert('password não pode estar vazio')
        Alert.alert('Erro', 'A senha não pode estar vazia');
        hasError = true;
      }
  
      if (confirmPassword.trim() === '') {
          alert('confirme sua senha')
        Alert.alert('Erro', 'A confirmação de senha não pode estar vazia');
        hasError = true;
      }
  
      if (password !== confirmPassword) {
       alert('a senha deve ser a mesma')
        Alert.alert('Erro', 'As senhas não coincidem');
        hasError = true;
      }
  
      if (!hasError) {
        Alert.alert('Sucesso', 'Registro enviado com sucesso!');
        alert('registro realizado com sucesso')
        navigation.navigate('Login');
      }
    };

function HandleRegisterMedia(){
  alert('Registro realizado com sucesso')
  navigation.navigate('Login')
}


return (
  <View style={styles.container}>
         <Image source={logo} style={styles.containerImage}/>
    <Text style={styles.textoH1}>Seja bem-vindo</Text>
    <View style={styles.containerInput}>
      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={setName}
        style={styles.textInput}
        keyboardType='email-address'></TextInput>
      <TextInput
        placeholder='Email'
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        keyboardType='visible-password'></TextInput>
      <TextInput
        placeholder='Password'
        style={styles.textInput}
        keyboardType='visible-password'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        ></TextInput>
      <TextInput
        placeholder='Confirm password'
        style={styles.textInput} k
        eyboardType='visible-password'
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        ></TextInput>    
      <TouchableOpacity
        onPress={handleRegister}
        style={styles.buttonRegister}>Registre-se</TouchableOpacity>
      <Text style={styles.textH3}>Ou se registre por</Text>
      <View style={styles.containerSocialMedia}>
        <TouchableOpacity onPress={HandleRegisterMedia} style={styles.buttonSocialMedia}>
          <Image source={google}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={HandleRegisterMedia} style={styles.buttonSocialMedia}>
          <Image source={facebook}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={HandleRegisterMedia} style={styles.buttonSocialMedia}>
          <Image source={twiter}></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.textH3}>Ja tem uma conta? 
        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.textLink}> Login</Text>
      </Text>
    </View>
  </View>
)
}