import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import styles from './styles';

import fechar from '../../assets/images/icons/fechar.png'

function Inserir() {
    return (<View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.h1}>Inserir</Text>
                    <RectButton
                    style={styles.fechar}>
                    <Image source={fechar} >                
                    </Image>
                    </RectButton>  
                </View>

                <View style={styles.textoCorpo}>
                    <Text style={styles.h2}>Informe o nome do questionário e</Text>
                    <Text style={styles.salve}>Salve</Text>

                    <TextInput 
                        style={styles.nomeDoQuestionário}
                        placeholderTextColor="#808080" 
                        placeholder="Nome do questionário" >
                    </TextInput>

                    <RectButton 
                        style={styles.button}
                    >
                        <Text style={styles.salvar}>Salvar</Text>

                    </RectButton>

                </View>

            </View>
        

        
    );
}

export default Inserir;
