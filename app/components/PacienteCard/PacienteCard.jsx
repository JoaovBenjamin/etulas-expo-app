import { Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Styles';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import { deletePaciente } from '../../actions/paciente/delete';
import EditButton from '../EditButton/EditButton';

const PacienteCard = ({ paciente, onPacienteDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deletePaciente(paciente.id);
      Alert.alert('Sucesso', 'Paciente deletado com sucesso!');
      onPacienteDeleted(); 
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
      Alert.alert('Erro', 'Falha ao deletar paciente.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.text}>Nome: {paciente.nome}</Text>
      <Text style={styles.text}>Idade: {paciente.idade}</Text>
      <Text style={styles.text}>Gênero: {paciente.genero}</Text>
      <Text style={styles.text}>Telefone: {paciente.telefone}</Text>
      <Text style={styles.text}>CPF: {paciente.cpf}</Text>
      <Text style={styles.text}>ID: {paciente.id}</Text>
      <View style={styles.buttonContainer}>
        <ButtonDelete
          onDelete={handleDelete}
          isDeleting={isDeleting}
        />
        <EditButton/>
      </View>
    </View>
  );
};

export default PacienteCard;
