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

            console.log(questionarioName);

            tx.executeSql('INSERT INTO table_questionario (questionario_name) VALUES (?)', [questionarioName], (tx, success) => {
                if (success.rowsAffected > 0) {
                    Alert.alert(
                        'Success',
                        'You are Registered Successfully',
                        [
                            {
                                text: 'Ok',
                                onPress: () => navigate('Questionario',),
                            },
                        ],
                        { cancelable: false }
                    );
                }
                else {
                    Alert.alert('Registration Failed');
                }
            });
        });


        /*
        
        ,(tx,e) => {
            console.log(tx);
            console.log(e);
        }
        
        */

        /*
        tx.exec('INSERT INTO table_questionario (questionario_name) VALUES (?)',[questionarioName],(tx, results) => {

            console.log('2222');
            console.log(results);
            console.log(tx);
            
            Alert.alert('Por favor!');


            if (results.rowsAffected > 0) {
                Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                        {
                            text: 'Ok',
                            onPress: () => navigate('Questionario'),
                        },
                    ],
                    { cancelable: false }
                );
            }
            else {
                Alert.alert('Registration Failed');
            }

        });
        */


        /*

        db.transaction(function (tx) {

            tx.executeSql(
                'INSERT INTO table_questionario (questionario_name) VALUES (?)',
                [questionarioName],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Sucesso',
                            'Questionário cadastrado com sucesso',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigate('Questionario', {
                                        itemId: results.insertId,
                                        otherParam: questionarioName
                                    }),
                                },
                            ],
                            { cancelable: false }
                        );
                    }
                    else {
                        alert('Cadastro falhou, tente novamente');
                    }
                }
            );
        });
        */
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
