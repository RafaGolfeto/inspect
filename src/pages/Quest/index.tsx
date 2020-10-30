import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

import home from '../../assets/images/logoHome.png';
import voltar from '../../assets/images/icons/voltar.png';
import inserir from '../../assets/images/icons/inserir.png';
import importar from '../../assets/images/icons/importar.png';


function Quest() {
  const { navigate } = useNavigation();

  function handleNavigateToHomePage() {
    navigate('Home')
  }

  function handleNavigateToInserirPage() {
    navigate('Inserir')
  }

  function handleNavigateToImportarPage() {
    navigate('Importar')
  }

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.botaoTextoLogo}>
          <RectButton
            onPress={handleNavigateToHomePage}
            style={styles.voltar}
          >
            <Image source={voltar}></Image>
          </RectButton>

          <Text style={styles.h1}>Questionários</Text>
          <Image source={home} style={styles.logo}></Image>
        </View>
      </View>

      <View style={styles.textoCorpo}>
        <Text style={styles.h2}>Gerencie os registros através das opções abaixo</Text>
      </View>

      <ScrollView>
        <View style={styles.containerButtonAndList}>

          <View style={styles.buttons}>

            <RectButton
              onPress={handleNavigateToInserirPage}
              style={styles.button1}
            >
              <Image source={inserir} style={styles.imagem1}></Image>
              <Text style={styles.textbutton1}>Inserir</Text>
            </RectButton>

            <RectButton
              onPress={handleNavigateToImportarPage}
              style={styles.button2}
            >
              <Image source={importar} style={styles.imagem2}></Image>
              <Text style={styles.textbutton2}>Importar</Text>
            </RectButton>
          </View>

          <View style={styles.questionario32}>
            <Text style={styles.texto1}>Questionários</Text>
            <Text style={styles.texto2}>32</Text>
          </View>

          <View style={styles.itemnInspect}>

            <View style={styles.containerTitleAndDate}>
              <View style={styles.titleAndDate}>
                <Text style={styles.titleInspect}>Frigorífico</Text>
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

export default Quest; 