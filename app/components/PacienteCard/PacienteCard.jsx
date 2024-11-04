import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Styles';

const PacienteCard = ({ paciente }) => {
    const [isDeleting, setIsDeleting] = useState(false); // State to track delete confirmation
  
    const handleDelete = async (pacienteId) => {
      setIsDeleting(true); // Set state to indicate deletion in progress
  
      try {
        const response = await fetch(`http://localhost:5032/api/paciente/${pacienteId}`, {
          method: 'DELETE', // Specify DELETE method for removal
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete paciente');
        }
  
        // Handle successful deletion (e.g., display success message, update UI)
        console.log('Paciente deleted successfully!');
        setIsDeleting(false); // Reset delete confirmation state
  
      } catch (error) {
        console.error('Error deleting paciente:', error);
        setIsDeleting(false); // Reset delete confirmation state in case of error
      }
    };
  
    return (
      <View style={styles.card}>
        <Text style={styles.text}>Nome: {paciente.nome}</Text>
        <Text style={styles.text}>Idade: {paciente.idade}</Text>
        <Text style={styles.text}>Gênero: {paciente.genero}</Text>
        <Text style={styles.text}>Telefone: {paciente.telefone}</Text>
        <Text style={styles.text}>CPF: {paciente.cpf}</Text>
        <Text style={styles.text}>id: {paciente.id}</Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => handleDelete(paciente.id)}>
            {isDeleting ? <Text>Deletando...</Text> : <Text>Deletar</Text>}
          </Pressable>
        </View>
      </View>
    );
  };
  
  export default PacienteCard;


