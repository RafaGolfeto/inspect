import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#ffffff',
        flex: 1,
    },

    header: {
        backgroundColor: '#179250',
        paddingTop: 40,
        padding: 20,
        marginBottom: 7
    },

    botaoTextoLogo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        width: 50,
        height: 50,
    },

    h1: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
        color: '#FFFFFF'
    },

    voltar: {
        width: 14,
        height: 14,
    },

    containertextoCorpoAndButton: {
        padding: 28
    },

    bordarTextoCorpo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderRadius: 10,
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#BEBEBE',
        padding: 15,
        marginBottom: 15
    },

    textoCorpo: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#737373'
    },

    containerButton: {

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
    },

});

export default styles;
