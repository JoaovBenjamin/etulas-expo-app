import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getPaciente } from '../../actions/paciente/get';
import PacienteCard from '../PacienteCard/PacienteCard';
import { styles } from './Styles';
import { Feather } from '@expo/vector-icons';

const PacienteContainer = () => {
    const navigation = useNavigation();
    const [pacientes, setPacientes] = useState([]);

    const fetchPacientes = async () => {
        try {
            const data = await getPaciente();
            console.log("Pacientes:", data);
            setPacientes(data);
        } catch (error) {
            console.error("Erro ao buscar pacientes:", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchPacientes();
        }, [])
    );

    const handleRefresh = () => {
        fetchPacientes();
    };

    const handleNew = () => {
        navigation.navigate('NewPaciente'); 
    };

    if (pacientes.length === 0) return <Text>Carregando...</Text>;

    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <Text style={styles.title}>PACIENTES</Text>
                <Pressable 
                    onPress={handleNew}
                    style={styles.buttonNew}>
                    Novo 
                    <Feather
                        name='plus'
                        color='white'
                        size={16}
                    />
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {pacientes.map((paciente, index) => (
                    <PacienteCard key={index} paciente={paciente} onPacienteDeleted={handleRefresh} />
                ))}
            </ScrollView>
        </View>
    );
};

export default PacienteContainer;
