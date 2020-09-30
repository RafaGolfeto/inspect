import React from 'react';
import { Alert, Image, ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToHomePage() {
        navigate('Home');
    }

    return (

        
        <View style={styles.container}>  
            <ImageBackground 
         source={require('../../assets/images/landingFundo.png')}
         style={styles.container}
         imageStyle={{width: 410, height: 308.64, position: 'absolute', left: 0, top: 0}}
         >  

            <View style={styles.logo}>
                <Image source={landingImg} />
            </View> 

           <View style={styles.title}>
                <Text style={styles.title1}>
                Bem vindo {'\n'}
                <Text style={styles.title2}>Acesse para continuar</Text>
                </Text>
            </View>

            <View>
            <TextInput
            style={styles.input}
            placeholder="Senha" 
            />
            </View>
            


            <RectButton 
                style={styles.button}
                onPress={handleNavigateToHomePage}
            >
                    <Text style={styles.login}>LOGIN</Text>

            </RectButton>
            </ImageBackground>
            
        </View>
        
    );
}

export default Landing;