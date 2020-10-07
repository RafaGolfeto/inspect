import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation  } from '@react-navigation/native';

import home from '../../assets/images/logoHome.png'
import voltar from '../../assets/images/icons/voltar.png'

import styles from './styles';

function Inspencionar() {

    
const {navigate} = useNavigation();

function handleNavigateToHomePage() {
    navigate('Home')
  }
    return  <View style={styles.container}>
                <View style={styles.header}>

                    <Image source={home} style={styles.logo}>
                    </Image>           
                    <Text style={styles.h1}>Inspecionar</Text>

                    <RectButton
                    onPress={handleNavigateToHomePage} 
                    style={styles.voltar}>
                    <Image source={voltar} >                
                    </Image>
                    </RectButton>  

                </View>

                <View>
                    <TextInput 
                        style={styles.nomeDaEmpresa}
                        placeholderTextColor="#808080" 
                        placeholder="Nome da empresa" >
                    </TextInput>

                    <TextInput 
                        style={styles.selecionarUmQuestionário}
                        placeholderTextColor="#808080" 
                        placeholder="Selecionar um questionário" >
                    </TextInput>

                    <TextInput 
                        style={styles.informeALocalização}
                        placeholderTextColor="#808080" 
                        placeholder="Informe a localização" >
                    </TextInput>

                    <TextInput 
                        style={styles.dataDaInspeção}
                        placeholderTextColor="#808080" 
                        placeholder="Data da inspeção" >
                    </TextInput>

                    <TextInput 
                        style={styles.fotoDoLocal}
                        placeholderTextColor="#808080" 
                        placeholder="Foto do local" >
                    </TextInput>

                    <TextInput 
                        style={styles.informeUmaObservação}
                        placeholderTextColor="#808080" 
                        placeholder="Informe uma observação" >
                    </TextInput>

                    <RectButton 
                        style={styles.button}
                    >
                        <Text style={styles.iniciarInspecao}>INICIAR inspeção</Text>

                    </RectButton>
                </View>
            </View>
}

export default Inspencionar; 
