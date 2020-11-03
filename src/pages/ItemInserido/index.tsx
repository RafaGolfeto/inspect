import React from 'react';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import home from '../../assets/images/logoHome.png';
import voltar from '../../assets/images/icons/voltar.png';

function ItemInserido() {
    const { navigate } = useNavigation();

    function handleNavigateToListaImportar() {
        navigate('ListaImportar')
    }
    return (
        <View style={styles.container1}>

            <View style={styles.header}>
                <View style={styles.botaoTextoLogo}>
                    <RectButton
                        onPress={handleNavigateToListaImportar}
                        style={styles.voltar}
                    >
                        <Image source={voltar}></Image>
                    </RectButton>

                    <Text style={styles.h1}>Frigorífico</Text>
                    <Image source={home} style={styles.logo}></Image>
                </View>
            </View>

            <View style={styles.containertextoCorpoAndButton}>

                <View style={styles.bordarTextoCorpo}>
                    <Text style={styles.textoCorpo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis justo a pellentesque facilisis. Sed porta at arcu vitae rutrum. Nulla fermentum nisl vel nunc posuere laoreet. Sed vel tempus purus.</Text>
                </View>

                <View style={styles.containerButton}>
                    <RectButton
                        onPress={handleNavigateToListaImportar}
                        style={styles.button}
                    >
                        <Text style={styles.salvar}>Salvar</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    );
}

export default ItemInserido;