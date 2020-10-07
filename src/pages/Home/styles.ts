import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
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
        height: 260,
        left: 0,
        top: 0,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        
    },

    h1: {
        position: 'absolute',
        left: 28,
        top: 100,

        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF'
        
    },

    logo: {
        position:'absolute',
        width: 50,
        height: 50,
        left: 24,
        top: 28
    },

    voltarHome: {
        width: 18,
        height: 18,
        left: 368,
        top: 36
    },

    pesquisa: {
        position: 'absolute',
        width: 360,
        height: 50,
        padding: 15,
        left: 28,
        top: 180,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },

    buttons: {
        flexDirection: 'row',
        marginTop: -20,
        justifyContent: 'space-between'
    },

    button1: {
        width: 170,
        height: 109,
        left: 28,
        top: 50,
        justifyContent: 'space-between',
        
        backgroundColor: '#f3f5fa',
        borderRadius: 10
    },

    imagem1: {
        left: 75,
        top: 25
    },
    
    textbutton1: {
        width: 115,
        height: 50,
        left: 20,

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
        height: 109,
        left: -28,
        top: 50,
        justifyContent: 'space-between',
        
        backgroundColor: '#f3f5fa',
        borderRadius: 10
    
    },

    imagem2: {
        left: 74,
        top: 25
    },

    textbutton2: {
        width: 115,
        height: 50,
        left: 24,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000'
    },

    inspecoes32: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 85
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

    centroDeDistribuição: {
        backgroundColor: '#F3F5FA',
        width: 355,
        height: 60,
        left: 28,
        top: 10,
        borderRadius: 10
    },

    text1: {
        height: 17,
        left: 70,
        top: -50,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'
    },

    frigorificoSaoBento: {
        backgroundColor: '#F3F5FA',
        width: 355,
        height: 60,
        left: 28,
        top: 30,
        borderRadius: 10

    },

    text2: {
        height: 17,
        left: 70,
        top: -50,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'

    },

    industriaGeral: {
        backgroundColor: '#F3F5FA',
        width: 355,
        height: 60,
        left: 28,
        top: 50,
        borderRadius: 10
    },

    text3: {
        height: 17,
        left: 70,
        top: -50,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'

    },

    outros: {
        backgroundColor: '#F3F5FA',
        width: 355,
        height: 60,
        left: 28,
        top: 70,
        borderRadius: 10
    },

    text4: {
        height: 17,
        left: 70,
        top: -50,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'

    },

    data: {
        color: '#7a7b7d',
        left: 70,
        bottom: 45,

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
        bottom: 70

    },

    total: {
        color: '#7a7b7d',
        left: 300,
        bottom: 95,

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
        bottom: 95,
        
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 20,
        alignItems: 'center'
    },
});

export default styles;