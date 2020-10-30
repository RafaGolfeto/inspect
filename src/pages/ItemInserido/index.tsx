import React from 'react';

import styles from '.styles';

import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function ItemInserido() {
    const {navigate} = useNavigation();
    
    function handleNavigateToListaInserir() {
        navigate('ListaInserir')
    }
    return (
        <View>
            <Text>Item Inserido</Text>
            <RectButton
            onPress={handleNavigateToListaInserir}>
                <Text>Salvar</Text>
            </RectButton>
        </View>
    );
}

export default ItemInserido;