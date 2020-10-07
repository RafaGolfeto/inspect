import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation  } from '@react-navigation/native';


import styles from './styles';

import home from '../../assets/images/logoHome.png';
import voltar from '../../assets/images/icons/voltar.png';
import inserir from '../../assets/images/icons/inserir.png';
import importar from '../../assets/images/icons/importar.png';


function Quest() {
    const {navigate} = useNavigation();

  function handleNavigateToHomePage() {
    navigate('Home')
  }

  function handleNavigateToInserirPage() {
    navigate('Inserir')
  }

    return  <View style={styles.container}> 

            <View style={styles.header}>

            <Image source={home} style={styles.logo}>
            </Image>           
            <Text style={styles.h1}>Questionários</Text>

            <RectButton
            onPress={handleNavigateToHomePage} 
            style={styles.voltar}>
            <Image source={voltar} >                
            </Image>
            </RectButton>  

            </View>

            <View style={styles.textoCorpo}>

            <Text style={styles.h2}>Gerencie os registros através das opções</Text>
            <Text style={styles.abaixo}> Abaixo</Text>

            </View>

            <View style={styles.buttons}>
            <RectButton
            onPress={handleNavigateToInserirPage} 
            style={styles.button1}>
              <Image source={inserir} style={styles.imagem1}>
              </Image>
              <Text style={styles.textbutton1}>Inserir</Text>
            </RectButton>

            <TouchableOpacity style={styles.button2}>
              <Image source={importar} style={styles.imagem2}>

              </Image>
              <Text style={styles.textbutton2}>Importar</Text>
            </TouchableOpacity>
        
            </View>

            <View style={styles.questionario32}>
                <Text style={styles.texto1}>Questionários</Text>
                <Text style={styles.texto2}>32</Text>
            </View>


            <View style={styles.frigorifico}>

                <Text style={styles.text1}>Frigorífico</Text>
                <Text style={styles.data}>01/09/2020 às 15:45</Text>

            <View style={styles.divisor} />

                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalnum}>45</Text>

            </View>



            <View style={styles.industria}>

                <Text style={styles.text2}>Indústria</Text>
                <Text style={styles.data}>01/09/2020 às 15:45</Text>

            <View style={styles.divisor} />

                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalnum}>45</Text>
            </View>
            
            <View style={styles.areaAgricola}>
            
                <Text style={styles.text3}>Área agricola</Text>
                <Text style={styles.data}>01/09/2020 às 15:45</Text>

            <View style={styles.divisor} />

                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalnum}>45</Text>
            </View>

            <View style={styles.campo}>
            
                <Text style={styles.text4}>Campo</Text>
                <Text style={styles.data}>01/09/2020 às 15:45</Text>

            <View style={styles.divisor} />

                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalnum}>45</Text>
            </View>
            
    
            </View>

}

export default Quest; 