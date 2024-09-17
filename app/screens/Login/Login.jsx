import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import logo from '../../../assets/logo.png';
import twiter from '../../../assets/twiter.png';
import {styles} from "./Styles"
import { useEffect, useState } from 'react';





const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
      console.log('componentDidMount')
    }, 5000)
  

function handleLogin(){

  let hasError = false;

  if (email.trim() === '') {
    Alert.alert('Erro', 'O email não pode estar vazio');
    alert('Email não pode estar vazio')
    hasError = true;
  }

  if (password.trim() === '') {
    Alert.alert('Erro', 'A senha não pode estar vazia');
    alert('Senha não pode estar vazio')
    hasError = true;
  }

  if (!hasError) {
    Alert.alert('Sucesso', 'Email e senha enviados com sucesso!');
        // Web Alert
    navigation.navigate('Home')
  }
 

}

function HandleLoginMedia(){
  alert('Login realizado com sucesso')
  navigation.navigate('Home')
}

return (
  <View style={styles.container}>
    <Image source={logo} style={styles.containerImage}/>
    <Text style={styles.textoH1}>Seja bem vindo de volta !</Text>
    <View style={styles.containerInput}>
        <TextInput 
                  placeholder='Email' 
                  style={styles.textInput} 
                  keyboardType='email-address'
                  value={email}
                  onChangeText={setEmail}
                  >
                      
                  </TextInput>
        <TextInput 
                  placeholder='Password' 
                  style={styles.textInput} 
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                  >

                  </TextInput>
        <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>Login</TouchableOpacity>
        <Text style={styles.textH3}>ou entre por</Text>
        <View style={styles.containerSocialMedia}>
            <TouchableOpacity onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
              <Image source={google}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
              <Image source={facebook}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
              <Image source={twiter}></Image>
            </TouchableOpacity>
        </View>
        <Text style={styles.textH3}>Não tem conta? 
          <Text 
          onPress={() => navigation.navigate('Registro')}
          style={styles.textLink}> Registre-se</Text>
        </Text>
    </View>
  </View>
)
}

export default Login;

