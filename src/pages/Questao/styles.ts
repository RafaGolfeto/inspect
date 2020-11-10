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

    corpo: {
        padding: 26,
    },

    numeroECarregamento: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },

    botaoNumeroInspencao: {
        backgroundColor: '#179250',
        borderRadius: 77,
        paddingHorizontal: 15,
        paddingVertical: 5
    },

    numeroInspencao: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
    },

    bordaCarregamento: {
        borderRadius: 33,
        height: 5,
        backgroundColor: '#F1F1F1',
        width: 110,
        paddingHorizontal: 90,
        marginRight: 5
    },

    textoCorpo: {
        marginTop: 20,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        color: '#808080',
        lineHeight: 20
    },

    botaoCorpo: {

    },

    botaoIrregularAnalisarERegular: {
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    botaoIrregular: {
        justifyContent: 'space-around',
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        paddingHorizontal: 5,
        paddingVertical: 30,
        marginRight: 10,
        alignItems: 'center',
        flex: 1,
    },

    imagemButtonIrregularAnalisarERegular: {
        marginBottom: 25
    },

    textoIrregular: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17,
    },

    botaoAnalisar: {
        justifyContent: 'space-around',
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        paddingHorizontal: 5,
        paddingVertical: 30,
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
    },

    textoAnalisar: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17
    },

    botaoRegular: {
        justifyContent: 'space-around',
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        paddingHorizontal: 5,
        paddingVertical: 30,
        marginLeft: 15,
        alignItems: 'center',
        flex: 1,
    },

    textoRegular: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        lineHeight: 17
    },

    botaoImagemVideoArquivoAnotacao: {
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imagemButtonImagemVideoArquivoAnotacao: {
        marginBottom: 10
    },

    botaoImagem: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        paddingVertical: 20,
        marginRight: 15,
        alignItems: 'center',
        flex: 1,
    },

    textoImagem: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 10,
        lineHeight: 12
    },

    botaoVideo: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        paddingVertical: 20,
        marginRight: 15,
        alignItems: 'center',
        flex: 1,

    },

    textoVideo: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 10,
        lineHeight: 12
    },

    botaoArquivo: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        paddingVertical: 20,
        marginRight: 15,
        alignItems: 'center',
        flex: 1,

    },

    textoArquivo: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 10,
        lineHeight: 12
    },

    botaoAnotacao: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        paddingVertical: 20,
        marginRight: 10,
        alignItems: 'center',
        flex: 1,

    },

    textoAnotacao: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 10,
        lineHeight: 12
    },

    botaoProximoVoltar: {
        alignItems: "center"
    },

    botaoProximo: {
        backgroundColor: '#179250',
        borderRadius: 77,
        marginBottom: 20,
        paddingHorizontal: 30
    },

    textoProximo: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        padding: 15,
        paddingHorizontal: 80
    },

    botaoVoltar: {

    },

    textoVoltar: {
        fontFamily: 'Montserrat_700Bold',
        color: '#7e7e7e',
        fontSize: 13,
        lineHeight: 16,
        textAlign: "center"
    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    textoBotaoFechar: {
        fontFamily: 'Montserrat_700Bold',
        color: '#808080',
        fontSize: 14,
        lineHeight: 16,
        alignItems: 'center',
    },

    containerFechar: {
        marginBottom: 45,
        marginHorizontal: 26,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: '#f3f5fa',

    },

    containerModal: {

    },

    containerTitle: {
        justifyContent: "flex-start",
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemnInspect: {
        marginHorizontal: 26,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#F3F5FA',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },

    title: {
        paddingLeft: 12,
    },

    titleInspect: {
        fontFamily: 'Montserrat_300Light',
        fontSize: 12,
        lineHeight: 14,
        maxWidth: '80%'
    },


    divisoriaESelecionar: {
        flexDirection: 'row',
        alignItems: "center",
        marginRight: 20,
    },

    divisoria: {
        width: 1,
        height: 20,
        marginVertical: 20,
        marginHorizontal: 16,
        backgroundColor: '#abacaf'
    },

    selecionar: {
        width: 20,
        backgroundColor: '#61BC48',
        borderRadius: 10,
        height: 20,
    },


    imageTitleAndDate: {
        justifyContent: "flex-start",
        flexDirection: 'row',
        alignItems: 'center'
    },

    titleAndDate: {
        paddingLeft: 12
    },

    titleInspec: {
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
    divisoriaContainerBotaoExcluir: {
        flexDirection: 'row',
        alignItems: "center",
    },

    containerBotaoExcluirImagem: {
        marginRight: 30,
    },

    botaoExcluirImagem: {

    },


    containerBotaoInserirImagem: {
        padding: 26,
    },

    botaoInserirImagem: {
        marginTop: 30,
        backgroundColor: '#179250',
        borderRadius: 77,
    },

    textoBotaoInserirImagem: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        padding: 15,
    },

    textoModalAnotacao: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#737373',
        borderColor: '#b3b3b3',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },

    bordaTextoModalAnotacao: {   
        margin: 26,
        paddingVertical: 15,
        paddingHorizontal: 15,     
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#BEBEBE',
    }

});

export default styles;
