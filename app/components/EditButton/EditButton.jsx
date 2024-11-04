import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './Styles';
import {Feather} from "@expo/vector-icons"
import {useNavigation} from '@react-navigation/native'

const EditButton = () => {
    const navigation = useNavigation()
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('PutPaciente')}> 
      <Text style={styles.texto}>editar 
          <Feather
            name='edit'
            color="white"
            size={16}  
          /></Text>
    </Pressable>
  );
};

export default EditButton;