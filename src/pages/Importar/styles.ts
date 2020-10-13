import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container1: {
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

    container2: {
        padding: 26,
    },

    bordaPontilhada: {              
        flexDirection: 'row',
        justifyContent: "space-between",
        borderRadius: 10,
        alignItems: 'center',
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor:'#BEBEBE',
        marginBottom: 46
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
    },
});

export default styles;