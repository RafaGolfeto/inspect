import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: 900
    },
    
    header: {
        backgroundColor: '#179250',
        flex: 0,
        width: 415,
        height: 100,
        left: 0,
        top: 0
    },

    h1: {
        width: 80,
        height: 24,
        left: 28,
        top: 33,

        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF' 
    },

    fechar: {
        left: '89.6%',
        right: '7.2%',
        top: 15,
        bottom: '92.46%'
    },

    textoCorpo: {
        width: 279,
        height: 48,
        left: 28,
        top: 35,
        justifyContent: 'space-between'
    },

    h2: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
        alignItems: 'center'
    },

    salve: {
        left: 178,
        top: -27,
        color: '#179250',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
        alignItems: 'center'
    },
        
    nomeDoQuestionário: {
        position: 'absolute',
        padding: 15,
        left: 0,
        right: -75,
        top: 95,
        borderWidth: 1,
        borderColor: '#b3b3b3',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,

        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        lineHeight: 20,
        alignItems: 'center', 
    },

    button: {
        position: 'absolute',
        width: 355,
        height: 60,
        left: 0,
        right: -70,
        top: 185,
        backgroundColor: '#179250',
        borderRadius: 77
    },

    salvar: {
        left: '40.8%',
        right: '41.07%',
        top: '30.82%',
        bottom: '52.22%',

        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 20,
        textTransform: 'uppercase',
        alignItems: 'center',
    }

});

export default styles;