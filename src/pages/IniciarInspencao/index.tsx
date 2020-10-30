import React from  'react';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function IniciarInspencao() {
    const { navigate } = useNavigation();

    function handleNavigateInspecaoFinalizada() {
        navigate('InspecaoFinalizada')
    }
    return (
        <View>
            <Text>Iniciar Inspeção</Text>
            <RectButton
                onPress={handleNavigateInspecaoFinalizada}
            >
                <Text>Próximo</Text>
            </RectButton>
        </View>
    );
}

export default IniciarInspencao;