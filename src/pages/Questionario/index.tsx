import React, {useRef} from 'react'
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize'

import styles from './styles';


import home from '../../assets/images/logoHome.png';
import voltar from '../../assets/images/icons/botaoVoltar.png';
import editar from '../../assets/images/icons/editar.png';
import excluir from '../../assets/images/icons/excluir.png';
import inserirBranco from '../../assets/images/icons/inserirBranco.png';


import { useNavigation } from '@react-navigation/native';


function Questionario() {

    const { navigate } = useNavigation();

    function handleNavigateToChecklistPage() {
        navigate('Checklist')
    }

    function handleNavigateToAlterarQuestao() {
        navigate('AlterarQuestao')
    }

    return (
        <View style={styles.container1}>

            <View style={styles.header}>
                <View style={styles.botaoTextoLogo}>
                    <RectButton
                        onPress={handleNavigateToChecklistPage}
                        style={styles.voltar}
                    >
                        <Image source={voltar}></Image>
                    </RectButton>

                    <Text style={styles.h1}>Questionários</Text>
                    <Image source={home} style={styles.logo}></Image>
                </View>
            </View>

            <View style={styles.TitleButtonAndText}>
                <View style={styles.TitleDateDivisoriaAndIcons}>
                    <View>
                        <Text style={styles.h2}>Frigorífico</Text>
                        <Text style={styles.data}>Última atualização 01/09/2020 15:54</Text>
                    </View>

                    <View style={styles.divisoriaAndIcons}>
                        <View style={styles.divisoria} />

                        <View style={styles.editar}>
                            <RectButton
                                onPress={handleNavigateToAlterarQuestao}
                            >
                                <Image source={editar} />
                            </RectButton>
                        </View>
                        <View style={styles.excluir}>
                            <RectButton
                            >
                                <Image source={excluir} />
                            </RectButton>
                        </View>
                    </View>
                </View>

                <View style={styles.containerButtonAndRegistro}>
                    <RectButton
                        onPress={handleNavigateToAlterarQuestao}
                        style={styles.button}>
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