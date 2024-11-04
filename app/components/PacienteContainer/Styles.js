import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    scrollContainer: {
        paddingBottom: 16,
    },
    containerButton:{
        display:'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 8
    },
    buttonNew: {
        backgroundColor: 'green',
        padding:12,
        gap: 8,
        display: 'flex',
        flexDirection: 'row',
        textAlign:'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        borderRadius: 8,
        color: 'white'

    }
});
