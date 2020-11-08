import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

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

    textoCorpo: {        
        paddingTop: 30,
        paddingLeft: 30,
    },

    h2: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        lineHeight: 24,
    },

    containerButtonAndList: {
        padding: 28 
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 35,
        alignContent: 'stretch'
    },

    button1: {
        paddingTop: 38,
        paddingBottom: 20,
        marginRight: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,        
        backgroundColor: '#f3f5fa',
        borderRadius: 10        
    },

    imagem1: {
        marginBottom: 28
    },

    textbutton1: {
        width: 115,

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000'
    },

    button2: {
        paddingTop: 38,
        marginLeft: 10,
        paddingBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f3f5fa',
        borderRadius: 10
    },

    imagem2: {
    },

    textbutton2: {
        width: 115,

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
        paddingBottom: 12
    },

    texto1: {

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'                   

    },

    texto2: {

        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center',
        textAlign: "right",
        color: '#C5C5C5'


    },

    itemnInspect: {
        
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#F3F5FA',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    containerTitleAndDate: {
        justifyContent: "flex-start",
        flexDirection: 'row',
        alignItems: 'center'
    },

    titleAndDate: {
        paddingLeft: 12
    },

    titleInspect: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17
    },

    data: {    
    fontFamily: 'Montserrat_500Medium',
    fontSize: 9,
    lineHeight: 11,
    color: '#7a7b7d'
    },

    divisoriaTotalAndNumber: {
        flexDirection: 'row'
    },

    divisoria: {
        width: 1,
        height: 20,
        marginVertical: 20,
        marginHorizontal: 16,
        backgroundColor: '#abacaf'
    },

    totalAndNumber: {
        marginTop: 12,
        marginRight: 30,
    },

    total: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 10,
        lineHeight: 12,
        color: '#7a7b7d'
    },

    totalNum: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 20,
        lineHeight: 24,
        color: '#179250'
    }
});

export default styles;
