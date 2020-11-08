import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import home from '../../assets/images/logoHome.png'
import voltar from '../../assets/images/icons/botaoVoltar.png'
import irregular from '../../assets/images/icons/irregular.png'
import analisar from '../../assets/images/icons/analisar.png'
import regular from '../../assets/images/icons/regular.png'
import adicionarImagem from '../../assets/images/icons/adicionarImagem.png'
import adicionarVideo from '../../assets/images/icons/adicionarVideo.png'
import adicionarArquivo from '../../assets/images/icons/adicionarArquivo.png'
import adicionarAnotacao from '../../assets/images/icons/adicionarAnotacao.png'


function IniciarInspencao() {
    const { navigate } = useNavigation();

    function handleNavigateToInspecionar() {
        navigate('Inspecionar')
    }

    function handleNavigateFinalizacao() {
        navigate('Finalizacao')
    }
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.botaoTextoLogo}>
                    <RectButton
                        onPress={handleNavigateToInspecionar}
                        style={styles.voltar}
                    >
                        <Image source={voltar}></Image>
                    </RectButton>

                    <Text style={styles.h1}>Inspecionar</Text>
                    <Image source={home} style={styles.logo}></Image>
                </View>
            </View>

            <View style={styles.corpo}>
                <View style={styles.numeroECarregamento}>
                    <Text style={styles.numeroInspencao}>01 de 45</Text>
                    <View style={styles.bordaCarregamento}></View>
                </View>

                <Text style={styles.textoCorpo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis justo a pellentesque facilisis. Sed porta at arcu vitae rutrum. Nulla fermentum nisl vel nunc posuere laoreet. Sed vel tempus purus?
                </Text>

                <View style={styles.botaoCorpo}>

                    <View style={styles.botaoIrregularAnalisarERegular}>
                        <RectButton style={styles.botaoIrregular}>
                            <Image source={irregular} style={styles.imagemButtonIrregularAnalisarERegular} />
                            <Text style={styles.textoIrregular}>Irregular</Text>
                        </RectButton>

                        <RectButton style={styles.botaoAnalisar}>
                            <Image source={analisar} style={styles.imagemButtonIrregularAnalisarERegular} />
                            <Text style={styles.textoAnalisar}>Analisar</Text>
                        </RectButton>

                        <RectButton style={styles.botaoRegular}>
                            <Image source={regular} style={styles.imagemButtonIrregularAnalisarERegular} />
                            <Text style={styles.textoRegular}>Regular</Text>
                        </RectButton>
                    </View>

                    <View style={styles.botaoImagemVideoArquivoAnotacao}>

                        <RectButton style={styles.botaoImagem}>
                            <Image source={adicionarImagem} style={styles.imagemButtonImagemVideoArquivoAnotacao} />
                            <Text style={styles.textoImagem}>Imagem</Text>
                        </RectButton>

                        <RectButton style={styles.botaoVideo}>
                            <Image source={adicionarVideo} style={styles.imagemButtonImagemVideoArquivoAnotacao} />
                            <Text style={styles.textoVideo}>Vídeo</Text>
                        </RectButton>

                        <RectButton style={styles.botaoArquivo}>
                            <Image source={adicionarArquivo} style={styles.imagemButtonImagemVideoArquivoAnotacao} />
                            <Text style={styles.textoArquivo}>Arquivo</Text>
                        </RectButton>

                        <RectButton style={styles.botaoAnotacao}>
                            <Image source={adicionarAnotacao} style={styles.imagemButtonImagemVideoArquivoAnotacao} />
                            <Text style={styles.textoAnotacao}>Anotação</Text>
                        </RectButton>
                    </View>

                    <View style={styles.botaoProximoVoltar}>
                        <RectButton style={styles.botaoProximo}
                            onPress={handleNavigateFinalizacao}
                        >
                            <Text style={styles.textoProxino}>Próximo</Text>
                        </RectButton>

                        <RectButton style={styles.botaoVoltar}>
                            <Text style={styles.textoVoltar}>Voltar</Text>
                        </RectButton>

                    </View>

                </View>
            </View>
        </View>
    );
}

export default IniciarInspencao;