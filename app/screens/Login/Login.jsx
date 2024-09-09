import { Button, Image, InputAccessoryView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import logo from '../../../assets/logo.png';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import twiter from '../../../assets/twiter.png';
import { styles } from './Styles';
import { Link } from '@react-navigation/native';


const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.containerImage}/>
      <Text style={styles.textoH1}>Bem vindo de volta !</Text>
      <View style={styles.containerInput}>
          <TextInput placeholder='Email' style={styles.textInput} keyboardType='email-address'></TextInput>
          <TextInput placeholder='Senha' style={styles.textInput} keyboardType='visible-password'></TextInput>
          <TouchableOpacity style={styles.buttonLogin}>Login</TouchableOpacity>
          <Text style={styles.textH3}>ou entre pelo</Text>
          <View style={styles.containerSocialMedia}>
              <TouchableOpacity style={styles.buttonSocialMedia}>
                <Image source={google}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSocialMedia}>
                <Image source={facebook}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSocialMedia}>
                <Image source={twiter}></Image>
              </TouchableOpacity>
          </View>
          <Text style={styles.textH3}>Não tem conta? 
            <Text 
            onPress={() => navigation.navigate('Home')}
            style={styles.textLink}> sing up</Text>
          </Text>
      </View>
    </View>
  )
}

export default Login

