import React from 'react'
import { ScrollView, Text , View, Image} from 'react-native-web'
import { styles } from './Styles'
import { Feather } from '@expo/vector-icons';


const ContainerHome = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.h1}>Cuidando da Qualidade da sua Vida</Text>
                <View style={styles.card}>
                     <Feather
                        name='check-circle'
                        color='green'
                        size={100}
                        style={styles.image}
                    />
                    <Text style={styles.title}>Mais controle da sua saúde</Text>
                    <Text style={styles.description}>
                        Controle suas consultas, medicamentos e histórico na palma da sua mão. 
                    </Text>
                </View>
                <View style={styles.card}>
                     <Feather
                        name='calendar'
                        color='green'
                        size={100}
                        style={styles.image}
                    />
                    <Text style={styles.title}>Agende sua consulta com mais facilidade</Text>
                    <Text style={styles.description}>
                        Marque suas consultas de forma rápida e receba lembretes direto no celular!
                    </Text>
                </View>
                <View style={styles.card}>
                     <Feather
                        name='users'
                        color='green'
                        size={100}
                        style={styles.image}
                    />
                    <Text style={styles.title}>Chega de hospitais lotados</Text>
                    <Text style={styles.description}>
                          Priorize sua saúde com atendimentos ágeis e sem espera!
                    </Text>
                </View>
        </ScrollView>  
    )
}

export default ContainerHome

