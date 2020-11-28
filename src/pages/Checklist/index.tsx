import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList, RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NativeRouter, Route, Link } from 'react-router-native';

import styles from './styles';

import home from '../../assets/images/logoHome.png';
import voltar from '../../assets/images/icons/botaoVoltar.png';
import inserir from '../../assets/images/icons/inserir.png';
import importar from '../../assets/images/icons/importar.png';




import { DatabaseConnection } from '../../database/database-connection'

function Checklist() {

    const { navigate } = useNavigation();
    let [flatListItems, setFlatListItems] = useState<any[]>([]);

    function handleNavigateToInicioPage() {
        navigate('Inicio');
    }
    function handleNavigateToQuestionario() {
        navigate('Questionario');
    }

    function handleNavigateToImportarInserir() {
        navigate('ImportarInserir');
    }
    function handleNavigateToImportarPage() {
        navigate('Importar');
    }

    useEffect(() => {
        var db = DatabaseConnection.getConnection();
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM table_questionario', [], (tx, results) => {
                const listQuestionario = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    listQuestionario.push(results.rows.item(i));
                }
                setFlatListItems(listQuestionario);
            });
        })
    }, []);

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.botaoTextoLogo}>
                    <RectButton
                        onPress={handleNavigateToInicioPage}
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
                        <RectButton onPress={handleNavigateToImportarInserir} style={styles.button1} >
                            <Image source={inserir} style={styles.imagem1}></Image>
                            <Text style={styles.textbutton1}>Inserir</Text>
                        </RectButton>
                        <RectButton onPress={handleNavigateToImportarPage} style={styles.button2} >
                            <Image source={importar} style={styles.imagem2}></Image>
                            <Text style={styles.textbutton2}>Importar</Text>
                        </RectButton>
                    </View>

                    <View style={styles.questionario32}>
                        <Text style={styles.texto1}>Questionários</Text>
                        <Text style={styles.texto2}>{flatListItems.length}</Text>
                    </View>

                    {flatListItems.map((item) => {

                        return (
                            <RectButton onPress={handleNavigateToQuestionario}
                                key={item.questionario_id} style={styles.itemnInspect}>
                                    
                                <View style={styles.containerTitleAndDate}>
                                    <View style={styles.titleAndDate}>
                                        <Text style={styles.titleInspect}>{item.questionario_name}</Text>
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
                            </RectButton>
                        );
                    })}

                </View>
            </ScrollView>
        </View>
    )

}

export default Checklist; 