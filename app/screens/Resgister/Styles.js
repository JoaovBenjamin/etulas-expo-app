import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'white',
        alignItems: 'center',
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
        gap: '12px'
    },
    
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        height : 35,
        width: 225,
        borderRadius:20,
        padding: 8,
    },

    containerCheckbox:{
        display:'flex',
        alignItems: 'center',
        textAlign: 'center',
        gap: 4
    },

    textUseTerms:{
        color: 'green'
    },

    buttonRegister: {
        display:'flex',
        backgroundColor: 'green',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        height : 35,
        width: 225,
        borderRadius:20,
    },

    textH3: {
      fontWeight: 'regular',
      textAlign: 'center',
    },

    containerSocialMedia:{
        display:"flex",
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop:15,
        alignItems: 'center'
    },

    buttonSocialMedia: {
        backgroundColor: '#F4F4F4',
        width: 42,
        height:42,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },

    textLink:{
        color: 'green',
        textTransform: 'uppercase',
        
    }
})