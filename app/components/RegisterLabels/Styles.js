import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'white',
        alignItems: 'center',
        gap: 10,
        textAlign: 'center',
        height: '100%',
    },

    containerImage: {
        width: '150px',
        height: '135px',
    },

    textoH1: {
        fontSize: '18px',
        fontWeight: 'semibold',
        color: 'black',
    },

    containerInput: {
        marginTop: '36px',
        display: 'flex',
        alignItems: "center",
        gap: 16
    },

    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 35,
        width: 225,
        borderRadius: 20,
        padding: 8,
    },

    buttonRegister: {
        display: 'flex',
        backgroundColor: 'green',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        height: 35,
        width: 225,
        borderRadius: 20,
    },

})