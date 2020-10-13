import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import { FlatList, RectButton, ScrollView } from 'react-native-gesture-handler';

import home from '../../assets/images/logoHome.png';
import voltarHome from '../../assets/images/icons/voltarHome.png'
import questionario from '../../assets/images/icons/questionario.png';
import inspecionar from '../../assets/images/icons/inspecionar.png';
import quest from '../../assets/images/quest.png';

import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function Home() {

  const {navigate} = useNavigation();

  function handleNavigateToQuestPage() {
    navigate('Quest')
  }

  function handleNavigateToInspencionarPage() {
    navigate('Inspencionar')
  }

  function handleNavigateToLandingPage() {
    navigate('Landing')
  }


    return (
    
    <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.logoAndButton}>
                <Image source={home} style={styles.logo}></Image>

                <RectButton
                    onPress={handleNavigateToLandingPage} 
                    style={styles.voltarHome}>
                    <Image source={voltarHome} ></Image>
                </RectButton>
            </View>

            <View>
                <Text style={styles.h1}>
                    Escolha umas das{"\n"}opções para Começar
                </Text>

                <TextInput 
                    style={styles.pesquisa} 
                    placeholder="Procurar por empresas" >
                </TextInput>
            </View>

        </View>

        <ScrollView>
            <View style={styles.containerButtonAndList}>

                <View style={styles.buttons}>

                    <RectButton 
                        onPress={handleNavigateToQuestPage} 
                        style={styles.button1}
                    >
                        <Image source={questionario} style={styles.imagem1}></Image>
                        <Text style={styles.textbutton1}> Questionários</Text>
                    </RectButton>

                    <RectButton 
                        onPress={handleNavigateToInspencionarPage}
                        style={styles.button2}
                    >
                        <Image source={inspecionar} style={styles.imagem2}></Image>
                        <Text style={styles.textbutton2}>inspecionar</Text>
                    </RectButton>

                </View>
                

                <View style={styles.inspecoes32}>
                    <Text style={styles.texto1}>Inspeções</Text>
                    <Text style={styles.texto2}>32</Text>
                </View>            
            
                <View style={styles.itemnInspect}>

                    <View style={styles.imageTitleAndDate}>
                        <Image source={quest} />
                        <View style={styles.titleAndDate}>
                            <Text style={styles.titleInspect}>Centro de distribuição</Text>
                            <Text style={styles.data}>01/09/2020 às 15:45</Text>
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
            </View>
        </ScrollView>
    </View>
    )    
}

export default Home; 