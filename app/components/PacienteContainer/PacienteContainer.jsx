import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { getPaciente } from '../../actions/paciente/get';
import PacienteCard from '../PacienteCard/PacienteCard';
import { styles } from './Styles';

const PacienteContainer = () => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        getPaciente().then(data => {
            console.log("Pacientes:", data); 
            setPacientes(data); 
        }).catch(error => {
            console.error("Erro ao buscar pacientes:", error);
        });
    }, []);

    if (pacientes.length === 0) return <Text>Carregando...</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PACIENTES</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {pacientes.map((paciente, index) => (
                    <PacienteCard key={index} paciente={paciente} />
                ))}
            </ScrollView>
        </View>
    );
};

export default PacienteContainer;

