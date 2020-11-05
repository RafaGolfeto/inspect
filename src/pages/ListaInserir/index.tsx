import React from 'react';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function ListaInserir() {
    const {navigate} = useNavigation();

    function handleNavigateToItemInserido() {
        navigate('ItemInserido')
    }
    return (
        <View>
            <Text>Lista Inserir</Text>
            <RectButton onPress={handleNavigateToItemInserido}>
                <Text>Inserir</Text>
            </RectButton>
        </View>
    );
}

export default ListaInserir;