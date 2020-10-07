import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

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

    logo: {
        width: 50,
        height: 50,
        left: 335,
        top: 28
    },

    h1: {
        height: 24,
        left: 115,
        top: -10,

        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF' 
    },

    voltar: {
        width: 14,
        height: 14,
        left: 28,
        bottom: 28
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

    abaixo: {
        left: 225,
        top: -27,
        color: '#179250',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
        alignItems: 'center'
    },

    buttons: {
        flexDirection: 'row',
        top: 70,
        justifyContent: 'space-between'
    },

    button1: {
        width: 170,
        height: 115,
        left: 28,
        backgroundColor: '#f3f5fa',
        borderRadius: 10,        
    },

    imagem1: {
        position: 'absolute', 
        width: 20,
        height: 20,       
        left: 69,
        top: 30,
        bottom: '62.72%',
    },

    textbutton1: {
        width: 115,
        height: 50,
        left: 25,
        top: 70,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000'
    },

    button2: {
        width: 170,
        height: 115,
        left: -28,
        backgroundColor: '#f3f5fa',
        borderRadius: 10,        
    },

    imagem2: {
        position: 'absolute',        
        left: 69,
        top: 30,
        bottom: '62.72%',
    },

    textbutton2: {
        width: 115,
        height: 50,
        left: 25,
        top: 70,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000'
    },

    questionario32: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 115
    },

    texto1: {
        left: 28,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'              

    },

    texto2: {
        left: -28,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center',
        textAlign: "right",
        color: '#C5C5C5'

    },

    frigorifico: {
        backgroundColor: '#F3F5FA',
        width: 355,
        height: 60,
        left: 28,
        top: 10,
        borderRadius: 10
    },

    text1: {       
        height: 18,
        left: 20,
        top: 10,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'
    },

    industria: {        
        backgroundColor: '#F3F5FA',
        width: 355,
        height: 60,
        left: 28,
        top: 30,
        borderRadius: 10

    },

    text2: {       
        height: 18,
        left: 20,
        top: 10,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'

    },

    areaAgricola: {
        backgroundColor: '#F3F5FA',
        width: 355,
        height: 60,
        left: 28,
        top: 50,
        borderRadius: 10
    },

    text3: {       
        height: 18,
        left: 20,
        top: 10,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'

    },

    campo: {
        backgroundColor: '#F3F5FA',
        width: 355,
        height: 60,
        left: 28,
        top: 70,
        borderRadius: 10
    },

    text4: {       
        height: 18,
        left: 20,
        top: 10,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'
    },
    

    data: {        
        color: '#7a7b7d',
        left: 20,
        bottom: -15,

        fontFamily: 'Montserrat_500Medium',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 9,
        lineHeight: 11,
        alignItems: 'center'
    },

    divisor: {
        borderBottomColor: '#abacaf',
        borderBottomWidth: 1,
        borderRadius: 1,
        transform: [{rotate: '90deg'}],
        width: 28,
        height: 10,
        left: 278,
        bottom: 10
    },

    total: {
        color: '#7a7b7d',
        left: 300,
        bottom: 30,

        fontFamily: 'Montserrat_600SemiBold',
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 10,
        lineHeight: 12,
        alignItems: 'center'
    },

    totalnum: {
        color: '#179250',
        left: 300,
        bottom: 33,
        
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 20,
        alignItems: 'center'
    },
});

export default styles;
