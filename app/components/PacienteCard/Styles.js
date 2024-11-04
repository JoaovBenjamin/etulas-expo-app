import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        elevation: 3,
        width: '90%',
        alignSelf: 'center', 
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
    buttonContainer: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});
