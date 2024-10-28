import {Pressable, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import {useNavigation} from '@react-navigation/native'


const UserRegister = () => {
  const navigation = useNavigation()
  console.log("componente 2 renderizado")
  return (
    <View style={styles.containerInput}>
        <Text style={styles.textH3}>Não tem conta? 
            <Pressable
                onPress={() => navigation.navigate('Registro')}
                style={styles.textLink}> Registre-se
            </Pressable>
        </Text>
    </View>
  )
}

export default UserRegister

