import React, { useEffect, useRef, useState } from 'react'
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize'

import styles from './styles';

import home from '../../assets/images/logoHome.png';
import voltar from '../../assets/images/icons/botaoVoltar.png';
import editar from '../../assets/images/icons/editar.png';
import excluir from '../../assets/images/icons/excluir.png';
import inserirBranco from '../../assets/images/icons/inserirBranco.png';

import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { DatabaseConnection } from '../../database/database-connection';

interface QuestionarioParams {
    itemId: number;
}

interface Questionario {
    questionario_id: number;
    questionario_name: string;
    questionario_data: string;
}

function Questionario() {

    const { navigate } = useNavigation();
    const [questionario, setQuestionario] = useState<Questionario>();
    const route = useRoute();
    const { itemId } = route.params as QuestionarioParams;

    useEffect(() => {
        var db = DatabaseConnection.getConnection();
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM table_questionario WHERE questionario_id = ? LIMIT 1', [itemId], (tx, results) => {
                console.log(results.rows.item(0));
                let resultadoQuestionario = results.rows.item(0)
                setQuestionario(resultadoQuestionario);
            });
        })
    }, [itemId]);
    
    function handleNavigateToChecklistPage() {
        navigate('Checklist')
    }

    function handleNavigateToAlterarQuestao() {
        navigate('AlterarQuestao')
    }

    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    }

    const close = () => {
        modalizeRef.current?.close();
    }

    return (
        <View style={styles.container1}>

            <View style={styles.header}>
                <View style={styles.botaoTextoLogo}>
                    <RectButton onPress={handleNavigateToChecklistPage} style={styles.voltar} >
                        <Image source={voltar}></Image>
                    </RectButton>
                    <Text style={styles.h1}>Questionários </Text>
                    <Image source={home} style={styles.logo}></Image>
                </View>
            </View>

            <View style={styles.TitleButtonAndText}>
                <View style={styles.TitleDateDivisoriaAndIcons}>
                    <View>
                        <Text style={styles.h2}>{((questionario) ? questionario.questionario_name : '')}</Text>
                        <Text style={styles.data}>Última atualização {((questionario) ? questionario.questionario_data : '')}</Text>
                    </View>

                    <View style={styles.divisoriaAndIcons}>
                        <View style={styles.divisoria} />

                        <View style={styles.editar}>
                            <RectButton onPress={handleNavigateToAlterarQuestao}>
                                <Image source={editar} />
                            </RectButton>
                        </View>
                        <View style={styles.excluir}>
                            <RectButton onPress={onOpen}>
                                <Image source={excluir} />
                            </RectButton>
                        </View>
                    </View>
                </View>
                <Modalize ref={modalizeRef} snapPoint={120} >
                    <View style={styles.modal}>
                        <View style={styles.containerFechar}>
                            <RectButton onPress={close} style={styles.botaoFecharModal} >
                                <Text style={styles.textoBotaoFechar}>FECHAR</Text>
                            </RectButton>
                        </View>
                        <View>
                            <RectButton style={styles.botaoExcluirRegistro}>
                                <Text style={styles.textoExcluirRegistro}>EXCLUIR REGISTRO</Text>
                            </RectButton>
                        </View>
                    </View>
                </Modalize>
                <View style={styles.containerButtonAndRegistro}>
                    <RectButton onPress={handleNavigateToAlterarQuestao} style={styles.button}>
                        <Image source={inserirBranco} />
                        <Text style={styles.inserir}>Inserir</Text>
                    </RectButton>
                    <Text style={styles.registros}>32 registros</Text>
                </View>
            </View>
        </View>
    );
}

export default Questionario;