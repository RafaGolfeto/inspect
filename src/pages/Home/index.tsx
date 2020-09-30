import React from 'react';
import { Image, Text, View } from 'react-native';

import home from '../../assets/images/logoHome.png';
import proximo from '../../assets/images/icons/proximo.png'
import questionario from '../../assets/images/icons/questionario.png';
import inspecionar from '../../assets/images/icons/inspecionar.png';
import quest from '../../assets/images/quest.png';

import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function Home() {
    return <View style={styles.container}>

      
      <View style={styles.header}>
        <Image source={home} style={styles.logo}>
        </Image>

        <Image source={proximo} style={styles.proximo}>
        </Image>

          <Text style={styles.h1}>
          Escolha umas das{"\n"} opções para Começar
          </Text>
          
          <TextInput 
          style={styles.pesquisa} 
          placeholder="Procurar por empresas" >
          </TextInput>

      </View>

        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button1}>
              <Image source={questionario} style={styles.imagem1}>

              </Image>
              <Text style={styles.textbutton1}> Questionário</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
              <Image source={inspecionar} style={styles.imagem2}>

              </Image>
              <Text style={styles.textbutton2}>inspecionar</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.inspecoes32}>
          <Text style={styles.texto1}>Inspeções</Text>
          <Text style={styles.texto2}>32</Text>
        </View>


        <View style={styles.centroDeDistribuição}>
          <Image source={quest} />

          <Text style={styles.text1}>Centro de distribuição</Text>

        </View>



        <View style={styles.frigorificoSaoBento}>
          <Image source={quest} />

          <Text style={styles.text2}>Frigorífico São Bento...</Text>
        </View>
        


        <View style={styles.industriaGeral}>
          <Image source={quest}/>

          <Text style={styles.text3}>Indústria Geral do...</Text>
        </View>

        <View style={styles.outros}>
          <Image source={quest} />

          <Text style={styles.text4}>Outros...</Text>
        </View>
</View>
      
}

export default Home; 