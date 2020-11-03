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

    numeroInspencao: {
        backgroundColor: '#179250',
        borderRadius: 77,
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        padding: 8,
        width: 130
    },

    bordaCarregamento: {
        borderRadius: 33,
        height: 5,
        width: 190,
        backgroundColor: '#F1F1F1',
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
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        padding: 30
    },

    textoIrregular: {

    },

    botaoAnalisar: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        padding: 30
    },

    textoAnalisar: {

    },

    botaoRegular: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        padding: 30
    },

    textoRegular: {

    },

    botaoImagemVideoArquivoAnotacao: {
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    botaoImagem: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        padding: 15
    },

    textoImagem: {

    },

    botaoVideo: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        padding: 15

    },

    textoVideo: {

    },

    botaoArquivo: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        padding: 15

    },

    textoArquivo: {

    },

    botaoAnotacao: {
        borderRadius: 10,
        backgroundColor: '#f3f5fa',
        padding: 15

    },

    textoAnotacao: {

    },

    botaoProximoVoltar: {
        alignItems: "center"
    },

    botaoProximo: {
        width: 360,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#179250',
        borderRadius: 77,
    },

    textoProxino: {
        fontFamily: 'Montserrat_700Bold',
        textTransform: "uppercase",
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
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

});

export default styles;
