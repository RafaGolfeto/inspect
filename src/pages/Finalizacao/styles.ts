import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },

    container2: {
        flex: 1,
        padding: 30,
        justifyContent: 'space-between',
        marginTop: 75
    },

    containertopo: {
        paddingHorizontal: 15,
        marginTop: 80,
        alignItems: "center"
    },

    logo: {
        alignItems: "center",
        marginBottom: 60
    },

    textoInspecaoFinalizada: {
        textAlign: "center",
        fontFamily: 'Montserrat_700Bold',
        fontSize: 23,
        lineHeight: 28,

    },

    sucesso: {    
        fontFamily: 'Montserrat_700Bold',
        fontSize: 23,
        lineHeight: 28,
        color: '#179250'
    },

    containerBotao: {
        paddingBottom: 100
    },

    botaoTelaInicial: {
        backgroundColor: '#179250',
        borderRadius: 77,
        padding: 15
    },

    textoTelaInicial: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        lineHeight: 20,
        color: '#ffffff',
        textAlign: "center"
    },

});

export default styles;
