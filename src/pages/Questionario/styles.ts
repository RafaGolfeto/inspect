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
        marginBottom: 7,
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

    TitleButtonAndText: {
        padding: 28
    },

    TitleDateDivisoriaAndIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    divisoriaAndIcons: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
    },

    h2: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24
    },

    data: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 10,
        lineHeight: 12,
        color: '#737373',
        paddingVertical: 5
    },

    divisoria: {
        width: 1,
        height: 20,
        marginVertical: 20,
        marginHorizontal: 5,
        backgroundColor: '#abacaf'
    },

    editar: {
        marginHorizontal: 10
    },

    excluir: {

    },
    
    containerButtonAndRegistro: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 10
    },

    button: {
        alignItems: "center",        
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#179250',
        width: 137,
        height: 35,
        borderRadius: 23
    },

    inserir: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        color: '#ffffff',
        textAlign: "center",
        padding: 9
    },

    registros: {
        paddingRight: 5,
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        color: '#c5c5c5'
    },
});

export default styles;