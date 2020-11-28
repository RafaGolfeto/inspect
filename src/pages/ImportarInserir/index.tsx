import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import styles from './styles';

import fechar from '../../assets/images/icons/botaoFechar.png'
import { useNavigation } from '@react-navigation/native';

import { DatabaseConnection } from '../../database/database-connection'

function ImportarInserir() {

    const { navigate } = useNavigation();

    // ESTADOS
    let [questionarioName, setQuestionarioName] = useState('');

    function handleNavigateChecklist() {
        navigate('Checklist')
    }

    const Inserir = () => {

        var db = DatabaseConnection.getConnection();

        if (!questionarioName) {
            Alert.alert('Por favor, insira o nome');
            return;
        }

        db.transaction(function (tx) {

            const today = new Date();
            let dataDia = ((today.getDate() < 10) ? '0' : '') + today.getDate();
            let dataMes = ((today.getMonth() < 10) ? '0' : '') + today.getMonth();
            let dataAno = today.getFullYear();
            let dataHora = ((today.getHours() < 10) ? '0' : '') + today.getHours();
            let dataMinuto = ((today.getMinutes() < 10) ? '0' : '') + today.getMinutes();
            const todayDB = `${dataDia}/${dataMes}/${dataAno} ${dataHora}:${dataMinuto}`;

            tx.executeSql('INSERT INTO table_questionario (questionario_name,questionario_data) VALUES (?,?)', [questionarioName,todayDB], (tx, success) => {
                if (success.rowsAffected > 0) {

                    let questionarioId = success.insertId;

                    Alert.alert(
                        'Parabéns',
                        'Questionário registrado com sucesso',[{
                            text: 'Ok',
                            onPress: () => navigate('Questionario', {
                                itemId: questionarioId
                            }),
                        }],
                        { cancelable: false }
                    );
                }
                else {
                    Alert.alert('Registration Failed');
                }
            });
        });
    }

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.textoEBotao}>
                    <Text style={styles.h1}>Inserir</Text>
                    <RectButton
                        onPress={handleNavigateChecklist}
                        style={styles.fechar}>
                        <Image source={fechar}></Image>
                    </RectButton>
                </View>
            </View>

            <View style={styles.textoCorpo}>
                <Text style={styles.h2}>Informe o nome do questionário e salve</Text>

                <KeyboardAvoidingView>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do questionário"
                        onChangeText={(questionarioName) => setQuestionarioName(questionarioName)} />
                </KeyboardAvoidingView>

                <RectButton
                    onPress={Inserir}
                    style={styles.button}
                >
                    <Text style={styles.salvar}>Salvar</Text>
                </RectButton>
            </View>
        </View>


    );
}

export default ImportarInserir;
