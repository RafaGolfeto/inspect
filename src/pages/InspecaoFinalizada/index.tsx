import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Button, Image, ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import inspencaoFinalizada from '../../assets/images/inspecaoFinalizada.png';


function InspecaoFinalizada() {
    const { navigate } = useNavigation();

    function handleNavigateHomePage() {
        navigate('Home');
    }

    return (

        <View style={styles.container}>

            <ImageBackground
                source={require('../../assets/images/landingFundo.png')}
                style={styles.container}
                imageStyle={{ width: '100%', height: 308.64, left: 0, top: 0 }}
            >


                <View style={styles.container2}>

                    <View style={styles.containertopo}>
                        <View style={styles.logo}>
                            <Image source={inspencaoFinalizada} />
                        </View>

                        <Text style={styles.textoInspecaoFinalizada}>Inspeção Finalizada com Sucesso</Text>
                    </View>
                    <View style={styles.containerBotao}>
                        <RectButton style={styles.botaoTelaInicial}
                            onPress={handleNavigateHomePage}
                        >
                            <Text style={styles.textoTelaInicial}>TELA INICIAL</Text>
                        </RectButton>
                    </View>
                </View>



            </ImageBackground>

        </View>
    );
}

export default InspecaoFinalizada;