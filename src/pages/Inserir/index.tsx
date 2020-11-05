import React from 'react';
import { Image, KeyboardAvoidingView, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import styles from './styles';

import fechar from '../../assets/images/icons/botaoFechar.png'
import { useNavigation } from '@react-navigation/native';

function Inserir() {
   
        const {navigate} = useNavigation();

        function handleNavigateToListaImportar() {
            navigate('ListaImportar')
        }
    
    return (

    <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.textoEBotao}>
                    <Text style={styles.h1}>Inserir</Text>
                        <RectButton
                            style={styles.fechar}>
                            <Image source={fechar}></Image>
                        </RectButton>
                </View>  
            </View>

            <View style={styles.textoCorpo}>
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

export default Inserir;
