import React from 'react'
import { ScrollView, Text } from 'react-native-web'
import { styles } from './Styles'

const ContainerHome = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.h1}>Cuidando da Qualidade da sua Vida</Text>

        </ScrollView>
    )
}

export default ContainerHome

