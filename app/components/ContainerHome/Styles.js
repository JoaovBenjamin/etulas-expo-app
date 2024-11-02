import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '100vh',
        alignItems: 'center',
        gap:20,
        paddingTop: '20px'
    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 12,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        alignItems: 'center',

      },
      image: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        borderRadius: 8,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 12,
      },
      description: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
      },
})