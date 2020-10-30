import React from 'react';

import styles from '.styles';

import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function AlterarQuestionario() {
    const {navigate} = useNavigation();

    function handleNavigateToListaImportar() {
        navigate('ListaImportar')
    }
    return (
        <View>
            <Text>Alterar Questionário</Text>
            <RectButton onPress={handleNavigateToListaImportar}>
                <Text>Salvar</Text>
            </RectButton>
        </View>
    );
}

export default AlterarQuestionario;