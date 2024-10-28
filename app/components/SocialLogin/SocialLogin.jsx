import React from 'react'
import { Image, Pressable, View } from 'react-native'
import facebook from '../../../assets/facebook.png'
import google from '../../../assets/google.png'
import twiter from '../../../assets/twiter.png'
import {useNavigation} from '@react-navigation/native'
import { styles } from "./Styles"

const SocialLogin = () => {
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
        </> 
  )
}

export default SocialLogin