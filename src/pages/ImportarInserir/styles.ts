import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    
    header: {
        backgroundColor: '#179250',
        padding: 26,
        marginBottom: 7
    },
    textoEBotao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    h1: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
        color: '#FFFFFF' 
    },

    fechar: {
        width: 14,
        height: 14,
    },

    textoCorpo: {
        padding: 26,
    },

    h2: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
    },
        
    input: {
        marginTop: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#b3b3b3',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        fontSize: 16,
    },

    button: {
        marginTop: 30,
        backgroundColor: '#179250',
        borderRadius: 77,
    },

    salvar: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        padding: 15,
    }

});

export default styles;