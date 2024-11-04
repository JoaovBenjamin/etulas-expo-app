import { Pressable, ScrollView, Text, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createPaciente } from '../../actions/paciente/create';
import { styles } from './Styles';
const FormCreate = ({ onPacienteCreated }) => {
    const navigation = useNavigation();
 
    const [paciente, setPaciente] = useState({
        nome: '',
        idade: '',
        genero: '',
        endereco: '',
        cidade: '',
        estado: '',
        telefone: '',
        dataAdmissao: '',
        diagnostico: '',
        medicamento: '',
        cpf: '',
    });

    const handleChange = (name, value) => {
        setPaciente(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pacienteData = {
            ...paciente,
            dataAdmissao: new Date(paciente.dataAdmissao).toISOString(),
        };
        
        try {
            const response = await createPaciente(pacienteData);
            console.log('Dados do paciente:', pacienteData);

            if (response) {
                Alert.alert('Paciente cadastrado com sucesso!');
                navigation.navigate('Paciente');
                onPacienteCreated(); 
                setPaciente({
                    nome: '',
                    idade: '',
                    genero: '',
                    endereco: '',
                    cidade: '',
                    estado: '',
                    telefone: '',
                    dataAdmissao: '',
                    diagnostico: '',
                    medicamento: '',
                    cpf: '',
                });
            }
        } catch (error) {
            console.error('Erro ao cadastrar paciente:', error);
            Alert.alert('Erro ao cadastrar paciente: ' + error.message);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Cadastrar paciente</Text>
            {Object.keys(paciente).map((key) => (
                <TextInput 
                    key={key}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)} 
                    value={paciente[key]} 
                    onChangeText={(value) => handleChange(key, value)} 
                    style={styles.input} 
                />
            ))}
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Criar</Text>
            </Pressable>
        </ScrollView>
    );
};

export default FormCreate;
