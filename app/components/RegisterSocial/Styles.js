import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    textH3: {
        fontWeight: 'regular',
        textAlign: 'center',
    },

    containerSocialMedia: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        gap: 28,
        alignItems: 'center'
    },

    buttonSocialMedia: {
        backgroundColor: '#F4F4F4',
        width: 42,
        height: 42,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginBottom : 12
    },

    textLink: {
        color: 'green',
        textTransform: 'uppercase',

    }
})