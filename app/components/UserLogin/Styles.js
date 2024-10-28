import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'white',
        alignItems: 'center',
        gap: '25px',
        height: '100vh',
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
        gap: '15px'
    },
    
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        height : 35,
        width: 225,
        borderRadius:20,
        padding: 8,
        marginTop: 20
    },

    buttonLogin: {
        display:'flex',
        backgroundColor: 'green',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 40,
        height : 35,
        width: 225,
        borderRadius:20,
        marginBottom: 18
    },

    textH3: {
      fontWeight: 'regular',
      textAlign: 'center',
    }
    
})