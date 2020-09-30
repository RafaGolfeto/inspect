import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        width: 410,
        height: 676
    },

    logo: {
        position: 'absolute',
        height: 72,
        left: 60,
        top: 110.26,
        width: 255,
    },

    title: {
        position: 'absolute',
        width: 203,
        height: 63,
        left: 40,
        top: 355,
        
        
    },

    title1: {
        color: '#000000',
        fontFamily:' Montserrat_700Bold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 30,
        alignItems: 'center'
    },

    title2: {
        color: '#707070',
        fontFamily: 'Montserrat_300Light',
        fontStyle: 'normal',
        fontSize: 18,
        alignItems: 'center',
        
    },

    input: {
        position: 'absolute',
        padding: 15,
        left: 15,
        right: 15,
        marginTop: 570,
        borderWidth: 1,
        borderColor: '#b3b3b3',
        backgroundColor: '#FFFFFF',
        borderRadius: 10
    },

    button: {
        position: 'absolute',
        left: 15 ,
        right: 15,
        top: '78.11%',
        bottom: '14.5%',
        backgroundColor: '#179250',
        borderRadius: 77
    },

    login: {
        left: '42.93%',
        right: '42.67%',
        top: '30.33%',
        bottom: '16.72%',

        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        fontSize: 16,
    }

});

export default styles;