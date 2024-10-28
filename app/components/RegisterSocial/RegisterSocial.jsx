import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { styles } from './Styles';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import twiter from '../../../assets/twiter.png';

const RegisterSocial = () => {
    const navigation = useNavigation()
    console.log("componente renderizado")
    const HandleLoginMedia = () => {
        alert('Login realizado com sucesso');
        navigation.navigate('Home');
      };
  return (
    <>
        <View style={styles.containerSocialMedia}>
          <Pressable onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
            <Image source={google} />
          </Pressable>
          <Pressable onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
            <Image source={facebook} />
          </Pressable>
          <Pressable onPress={HandleLoginMedia} style={styles.buttonSocialMedia}>
            <Image source={twiter} />
          </Pressable>
        </View>
        <Text style={styles.textH3}>Já tem uma conta? 
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.textLink}> Login</Text>
        </Text>
    </>
  )
}

export default RegisterSocial

