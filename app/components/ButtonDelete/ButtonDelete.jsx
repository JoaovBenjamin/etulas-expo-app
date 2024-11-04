import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './Styles';
import {Feather} from "@expo/vector-icons"

const ButtonDelete = ({ onDelete, isDeleting }) => {
  return (
    <Pressable style={styles.button} onPress={() => onDelete()}>
      {isDeleting ? <Text style={styles.texto}>Deletando...</Text> : 
      <Text style={styles.texto}>Deletar 
          <Feather
            name='trash-2'
            color="white"
            size={16}  
          /></Text>}
    </Pressable>
  );
};

export default ButtonDelete;