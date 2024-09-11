import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import logo from '../../../assets/logo.png';
import twiter from '../../../assets/twiter.png';
import { styles } from './Styles';


export default function Register({ navigation }) {
  // const [selected, IsSetSelected] = useState = (false)
  function handleRegister() {
    alert("Registrado com Sucesso")
    navigation.navigate('Login')
  }

  // function handleCheck() {
  //   IsSetSelected(!selected)
  // }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.containerImage} />
      <Text style={styles.textoH1}>Seja bem-vindo !</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Nome'
          style={styles.textInput}
          keyboardType='email-address'></TextInput>
        <TextInput
          placeholder='Email'
          style={styles.textInput}
          keyboardType='visible-password'></TextInput>
        <TextInput
          placeholder='Senha'
          style={styles.textInput}
          keyboardType='visible-password'></TextInput>
        <TextInput
          placeholder='Confirme sua senha'
          style={styles.textInput} k
          eyboardType='visible-password'></TextInput>
        {/* <Text style={styles.containerCheckbox}>
          <CheckBox
          ></CheckBox>Entendido e aceito
          <Text style={styles.textUseTerms}>os termos de uso
          </Text>
        </Text> */}
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.buttonRegister}>Resgistre-se</TouchableOpacity>
        <Text style={styles.textH3}>ou se registe pelo</Text>
        <View style={styles.containerSocialMedia}>
          <TouchableOpacity onPress={handleRegister} style={styles.buttonSocialMedia}>
            <Image source={google}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister} style={styles.buttonSocialMedia}>
            <Image source={facebook}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister} style={styles.buttonSocialMedia}>
            <Image source={twiter}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.textH3}>Já tem uma conta?
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.textLink}> login</Text>
        </Text>
      </View>
    </View>
  )
}
