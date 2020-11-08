import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import home from '../../assets/images/logoHome.png'
import voltar from '../../assets/images/icons/botaoVoltar.png'

import styles from './styles';

function Inspecionar() {
    const { navigate } = useNavigation();

    function handleNavigateToInicioPage() {
        navigate('Inicio')
    }

    function handleNavigateToQuestao() {
        navigate('Questao')
    }


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.botaoTextoLogo}>
                    <RectButton
                        onPress={handleNavigateToInicioPage}
                        style={styles.voltar}
                    >
                        <Image source={voltar}></Image>
                    </RectButton>

                    <Text style={styles.h1}>Inspecionar</Text>
                    <Image source={home} style={styles.logo}></Image>
                </View>
            </View>

            <ScrollView>

                <View style={styles.inputAndButton}>
                    <TextInput
                        style={styles.nomeDaEmpresa} placeholder="Nome da empresa" >
                    </TextInput>

                    <TextInput
                        style={styles.selecionarUmQuestionário} placeholder="Selecionar um questionário" >
                    </TextInput>

                    <TextInput
                        style={styles.informeALocalização} placeholder="Informe a localização" >
                    </TextInput>

                    <TextInput
                        style={styles.dataDaInspeção} placeholder="Data da inspeção" >
                    </TextInput>

                    <TextInput
                        style={styles.fotoDoLocal} placeholder="Foto do local" >
                    </TextInput>

                    <TextInput
                        style={styles.informeUmaObservação} placeholder="Informe uma observação" >
                    </TextInput>

                    <RectButton
                        onPress={handleNavigateToQuestao}
                        style={styles.button}
                    >
                        <Text style={styles.iniciarInspecao}>INICIAR inspeção</Text>

                    </RectButton>
                </View>
            </ScrollView>
        </View>

    );
}

export default Inspecionar; 
