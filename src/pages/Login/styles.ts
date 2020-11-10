import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },

    container2: {
        flex: 1,
        padding: 30,
        justifyContent: 'space-between'
    },

    containertopo: {
        alignItems: "center",
        marginTop: 80
    },

    containerbottom: {
        marginBottom: 20
    },

    logo: {
        alignItems: "center",
        height: 72,
        width: 255,
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
        marginBottom: 30
        
    },

    input: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#b3b3b3',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 24
    },

    button: {
        backgroundColor: '#179250',
        borderRadius: 77,
    },

    login: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        padding: 15
    }

});

export default styles;