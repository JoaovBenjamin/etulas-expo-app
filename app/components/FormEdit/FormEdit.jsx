import { Pressable, ScrollView, Text, TextInput, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { updatePaciente } from '../../actions/paciente/put'; 
import { styles } from '../FormCreate/Styles';

const FormEdit = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;

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

    useEffect(() => {
        const fetchPacienteData = async () => {
            try {
                const response = await fetch(`http://localhost:5032/api/paciente/${id}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados do paciente');
                }
                const data = await response.json();
                setPaciente(data); 
            } catch (error) {
                console.error('Erro ao buscar dados do paciente:', error);
                Alert.alert('Erro', 'Não foi possível carregar os dados do paciente.');
            }
        };

        fetchPacienteData();
    }, [id]);

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
            const response = await updatePaciente(id, pacienteData);
            console.log('Dados do paciente:', pacienteData);

            if (response) {
                Alert.alert('Sucesso', 'Paciente atualizado com sucesso!');
                navigation.navigate('Paciente'); 
                 
            }
        } catch (error) {
            console.error('Erro ao atualizar paciente:', error);
            Alert.alert('Erro', 'Falha ao atualizar paciente: ' + error.message);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Editar Paciente</Text>
            {Object.keys(paciente).length > 0 ? (
                Object.keys(paciente).map((key) => (
                    <TextInput 
                        key={key}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)} 
                        value={paciente[key]} 
                        onChangeText={(value) => handleChange(key, value)} 
                        style={styles.input} 
                    />
                ))
            ) : (
                <Text>Carregando dados do paciente...</Text> 
            )}
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>
        </ScrollView>
    );
};

export default FormEdit;
