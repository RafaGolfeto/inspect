import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
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

        inputAndButton: {
            padding: 28
        },
        
        nomeDaEmpresa: {
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            fontSize: 16,
            marginBottom: 15
        },
        
        selecionarUmQuestionário: {
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            fontSize: 16,
            marginBottom: 15
        },
        
        informeALocalização: {
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            fontSize: 16,
            marginBottom: 15
        },
        
        dataDaInspeção: {
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            fontSize: 16,
            marginBottom: 15
        },
        
        fotoDoLocal: {
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            fontSize: 16,
            marginBottom: 15
        },
        
        informeUmaObservação: {  
            paddingBottom: 72,         
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: '#b3b3b3',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            fontSize: 16,
            marginBottom: 30
        },

        button: {
            backgroundColor: '#179250',
            borderRadius: 77,
        },
    
        iniciarInspecao: {
            fontFamily: 'Montserrat_700Bold',
            color: '#FFFFFF',
            textTransform: "uppercase",
            fontSize: 16,
            textAlign: 'center',
            padding: 15,
        }
});

export default styles;