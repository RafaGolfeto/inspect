import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
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
        
        nomeDaEmpresa: {
            position: 'absolute',
            padding: 15,
            left: 28,
            right: 30,
            top: 35,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,

            fontFamily: 'Montserrat_500Medium',
            fontSize: 16,
            lineHeight: 20,
            alignItems: 'center', 
        },
        
        selecionarUmQuestionário: {
            position: 'absolute',
            padding: 15,
            left: 28,
            right: 30,
            top: 115,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,

            fontFamily: 'Montserrat_500Medium',
            fontSize: 16,
            lineHeight: 20,
            alignItems: 'center', 
        },
        
        informeALocalização: {
            position: 'absolute',
            padding: 15,
            left: 28,
            right: 30,
            top: 195,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,

            fontFamily: 'Montserrat_500Medium',
            fontSize: 16,
            lineHeight: 20,
            alignItems: 'center', 
        },
        
        dataDaInspeção: {
            position: 'absolute',
            padding: 15,
            left: 28,
            right: 30,
            top: 275,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,

            fontFamily: 'Montserrat_500Medium',
            fontSize: 16,
            lineHeight: 20,
            alignItems: 'center', 
        },
        
        fotoDoLocal: {
            position: 'absolute',
            padding: 15,
            left: 28,
            right: 30,
            top: 355,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,

            fontFamily: 'Montserrat_500Medium',
            fontSize: 16,
            lineHeight: 20,
            alignItems: 'center', 
        },
        
        informeUmaObservação: {
            position: 'absolute',
            paddingTop: 15,
            paddingRight: 15,
            paddingLeft: 15,
            paddingBottom: 80,
            left: 28,
            right: 30,
            top: 435,
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
            left: 28 ,
            top: 595,
            backgroundColor: '#179250',
            borderRadius: 77
        },
    
        iniciarInspecao: {
            left: '28.8%',
            right: '28.8%',
            top: '30.33%',
            bottom: '16.72%',
    
            fontFamily: 'Montserrat_700Bold',
            color: '#FFFFFF',
            fontSize: 16,
            lineHeight: 20,
            textTransform: 'uppercase',
            alignItems: 'center',
        }
});

export default styles;