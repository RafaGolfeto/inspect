import React from 'react';
import { Image, KeyboardAvoidingView, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import styles from './styles';

import fechar from '../../assets/images/icons/fechar.png'
import { useNavigation } from '@react-navigation/native';

function Importar() {

    const { navigate } = useNavigation();

    function handleNavigateToListaImportar() {
        navigate('ListaImportar')
    }
    return (

        <View style={styles.container1}>

            <View style={styles.header}>
                <View style={styles.textoEBotao}>
                    <Text style={styles.h1}>Importar</Text>
                    <RectButton
                        style={styles.fechar}>
                        <Image source={fechar}></Image>
                    </RectButton>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.bordaPontilhada}>

                    <View style={styles.containerTitleAndDate}>
                        <View style={styles.titleAndDate}>
                            <Text style={styles.titleInspect}>Nome indefinido</Text>
                            <Text style={styles.data}>Data do upload 01/09/2020 15:54</Text>
                        </View>
                    </View>

                    <View style={styles.divisoriaTotalAndNumber}>
                        <View style={styles.divisoria} />
                        <View style={styles.totalAndNumber}>
                            <Text style={styles.total}>Total</Text>
                            <Text style={styles.totalNum}>45</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.h2}>Informe o nome do questionário e salve</Text>

                <KeyboardAvoidingView>
                    <TextInput style={styles.input} placeholder="Nome do questionário" />
                </KeyboardAvoidingView>

                <RectButton
                    onPress={handleNavigateToListaImportar}
                    style={styles.button}
                >
                    <Text style={styles.salvar}>Salvar</Text>
                </RectButton>
            </View>
        </View>


    );
}

export default Importar;
