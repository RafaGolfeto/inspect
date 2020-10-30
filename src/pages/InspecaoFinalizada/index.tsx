import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Button, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function InspecaoFinalizada() {
    const { navigate } = useNavigation();

    function handleNavigateHomePage() {
        navigate('Home')
    }

    return (
        <View>
            <Text>Inspeção Finalizada com Sucesso</Text>
            <RectButton
                onPress={handleNavigateHomePage}
            >
                <Text>TELA INICIAL</Text>
            </RectButton>
        </View>
    );
}

export default InspecaoFinalizada;