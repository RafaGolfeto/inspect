import React from 'react'
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';


function ListaImportar() {

    const {navigate} = useNavigation();

    function handleNavigateToAlterarQuestionario() {
        navigate('AlterarQuestionario')
    }
    return (
        <View>
            <Text>ListaImportar</Text>
            <RectButton onPress={handleNavigateToAlterarQuestionario}>
                <Text>Alterar Questionário</Text>
            </RectButton>
        </View>
    );
}

export default ListaImportar;