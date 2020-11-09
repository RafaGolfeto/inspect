import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Image, Modal, Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import home from '../../assets/images/logoHome.png'
import quest from '../../assets/images/quest.png';
import voltar from '../../assets/images/icons/botaoVoltar.png'
import excluir from '../../assets/images/icons/excluir.png'
import fecharCinza from '../../assets/images/icons/botaoFecharCinza.png'
import irregular from '../../assets/images/icons/irregular.png'
import analisar from '../../assets/images/icons/analisar.png'
import regular from '../../assets/images/icons/regular.png'
import adicionarImagem from '../../assets/images/icons/adicionarImagem.png'
import adicionarVideo from '../../assets/images/icons/adicionarVideo.png'
import adicionarArquivo from '../../assets/images/icons/adicionarArquivo.png'
import adicionarAnotacao from '../../assets/images/icons/adicionarAnotacao.png'
import { Modalize } from 'react-native-modalize';


function IniciarInspencao() {
    const { navigate } = useNavigation();

    function handleNavigateQuestao() {
        navigate('Questao')
    }

    function handleNavigateToInspecionar() {
        navigate('Inspecionar')
    }

    function handleNavigateFinalizacao() {
        navigate('Finalizacao')
    }

    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    }


    const close = () => {
        modalizeRef.current?.close();
    }


    {/* MODAL BOTÃO IMAGEM*/ }

    const modalImagemRef = useRef<Modalize>(null);

    const onOpenImagem = () => {
        modalImagemRef.current?.open();
    }

    const closeImagem = () => {
        modalImagemRef.current?.close();
    }

    {/* MODAL BOTÃO VÍDEO */ }

    const modalVideoRef = useRef<Modalize>(null);

    const onOpenVideo = () => {
        modalVideoRef.current?.open();
    }

    const closeVideo = () => {
        modalVideoRef.current?.close();
    }


    {/* MODAL BOTÃO ARQUIVO */ }

    const modalArquivoRef = useRef<Modalize>(null);

    const onOpenArquivo = () => {
        modalArquivoRef.current?.open();
    }

    const closeArquivo = () => {
        modalArquivoRef.current?.close();
    }

    {/* MODAL BOTÃO ANOTAÇÃO */ }

    const modalAnotacaoRef = useRef<Modalize>(null);

    const onOpenAnotacao = () => {
        modalAnotacaoRef.current?.open();
    }

    const closeAnotacao = () => {
        modalAnotacaoRef.current?.close();
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


            <ScrollView>
                <View style={styles.corpo}>
                    <View style={styles.numeroECarregamento}>
                        <RectButton
                            onPress={onOpen}
                            style={styles.botaoNumeroInspencao}>
                            <Text style={styles.numeroInspencao}>01 de 45</Text>
                        </RectButton>
                        <View style={styles.bordaCarregamento}></View>
                    </View>

                    <Modalize
                        ref={modalizeRef}
                        snapPoint={450}
                    >
                        <View style={styles.containerFechar}>
                            <RectButton onPress={close}
                                style={styles.botao}
                            >
                                <Text style={styles.textoBotaoFechar}>FECHAR</Text>
                            </RectButton>

                        </View>

                        <ScrollView>

                            <View style={styles.itemnInspect}>

                                <View style={styles.containerTitle}>
                                    <View style={styles.title}>
                                        <Text style={styles.titleInspect}>01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. lob ortis justo a ...</Text>
                                    </View>
                                </View>

                                <View style={styles.divisoriaESelecionar}>
                                    <View style={styles.divisoria} />
                                    <RectButton style={styles.selecionar} />
                                </View>
                            </View>

                        </ScrollView>

                    </Modalize>


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

                            <RectButton onPress={onOpenImagem}
                                style={styles.botaoImagem}>
                                <Image source={adicionarImagem} style={styles.imagemButtonImagemVideoArquivoAnotacao} />
                                <Text style={styles.textoImagem}>Imagem</Text>
                            </RectButton>

                            <RectButton onPress={onOpenVideo}
                                style={styles.botaoVideo}>
                                <Image source={adicionarVideo} style={styles.imagemButtonImagemVideoArquivoAnotacao} />
                                <Text style={styles.textoVideo}>Vídeo</Text>
                            </RectButton>

                            <RectButton onPress={onOpenArquivo}
                                style={styles.botaoArquivo}>
                                <Image source={adicionarArquivo} style={styles.imagemButtonImagemVideoArquivoAnotacao} />
                                <Text style={styles.textoArquivo}>Arquivo</Text>
                            </RectButton>

                            <RectButton onPress={onOpenAnotacao}
                                style={styles.botaoAnotacao}>
                                <Image source={adicionarAnotacao} style={styles.imagemButtonImagemVideoArquivoAnotacao} />
                                <Text style={styles.textoAnotacao}>Anotação</Text>
                            </RectButton>
                        </View>

                        <View style={styles.botaoProximoVoltar}>
                            <RectButton style={styles.botaoProximo}
                                onPress={handleNavigateFinalizacao}
                            >
                                <Text style={styles.textoProximo}>Próximo</Text>
                            </RectButton>

                            <RectButton style={styles.botaoVoltar}>
                                <Text style={styles.textoVoltar}>Voltar</Text>
                            </RectButton>

                        </View>

                    </View>

                    {/* MODAL BOTÃO IMAGEM*/}
                    <Modalize
                        ref={modalImagemRef}
                        snapPoint={400}>


                        <View style={styles.containerFechar}>
                            <RectButton onPress={closeImagem}
                                style={styles.botao}
                            >
                                <Text style={styles.textoBotaoFechar}>FECHAR</Text>
                            </RectButton>
                        </View>
                        <View style={styles.itemnInspect}>

                            <View style={styles.imageTitleAndDate}>
                                <Image source={quest} />
                                <View style={styles.titleAndDate}>
                                    <Text style={styles.titleInspec}>IMG_412674261.JPG</Text>
                                    <Text style={styles.data}>01/09/2020 às 15:45</Text>
                                </View>
                            </View>

                            <View style={styles.divisoriaContainerBotaoExcluir}>
                                <View style={styles.divisoria} />
                                <View style={styles.containerBotaoExcluirImagem}>
                                    <RectButton style={styles.botaoExcluirImagem}>
                                        <Image source={excluir} />
                                    </RectButton>
                                </View>
                            </View>
                        </View>

                        <View style={styles.containerBotaoInserirImagem}>

                            <RectButton style={styles.botaoInserirImagem}>
                                <Text style={styles.textoBotaoInserirImagem}>INSERIR IMAGEM</Text>
                            </RectButton>
                        </View>
                    </Modalize>


                    {/* MODAL BOTÃO VÍDEO */}
                    <Modalize
                        ref={modalVideoRef}
                        snapPoint={350}>
                        <View style={styles.containerFechar}>
                            <RectButton onPress={closeVideo}
                                style={styles.botao}
                            >
                                <Text style={styles.textoBotaoFechar}>FECHAR</Text>
                            </RectButton>
                        </View>
                        <View style={styles.itemnInspect}>

                            <View style={styles.imageTitleAndDate}>
                                <Image source={quest} />
                                <View style={styles.titleAndDate}>
                                    <Text style={styles.titleInspec}>IMG_412674261.JPG</Text>
                                    <Text style={styles.data}>01/09/2020 às 15:45</Text>
                                </View>
                            </View>

                            <View style={styles.divisoriaContainerBotaoExcluir}>
                                <View style={styles.divisoria} />
                                <View style={styles.containerBotaoExcluirImagem}>
                                    <RectButton style={styles.botaoExcluirImagem}>
                                        <Image source={excluir} />
                                    </RectButton>
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerBotaoInserirImagem}>

                            <RectButton style={styles.botaoInserirImagem}>
                                <Text style={styles.textoBotaoInserirImagem}>INSERIR VÍDEO</Text>
                            </RectButton>
                        </View>
                    </Modalize>


                    {/* MODAL BOTÃO ARQUIVO */}
                    <Modalize
                        ref={modalArquivoRef}
                        snapPoint={350}>
                        <View style={styles.containerFechar}>
                            <RectButton onPress={closeArquivo}
                                style={styles.botao}
                            >
                                <Text style={styles.textoBotaoFechar}>FECHAR</Text>
                            </RectButton>
                        </View>
                        <View style={styles.itemnInspect}>

                            <View style={styles.imageTitleAndDate}>
                                <Image source={quest} />
                                <View style={styles.titleAndDate}>
                                    <Text style={styles.titleInspec}>IMG_412674261.JPG</Text>
                                    <Text style={styles.data}>01/09/2020 às 15:45</Text>
                                </View>
                            </View>

                            <View style={styles.divisoriaContainerBotaoExcluir}>
                                <View style={styles.divisoria} />
                                <View style={styles.containerBotaoExcluirImagem}>
                                    <RectButton style={styles.botaoExcluirImagem}>
                                        <Image source={fecharCinza} />
                                    </RectButton>
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerBotaoInserirImagem}>

                            <RectButton style={styles.botaoInserirImagem}>
                                <Text style={styles.textoBotaoInserirImagem}>INSERIR DOCUMENTO</Text>
                            </RectButton>
                        </View>
                    </Modalize>

                    {/* MODAL BOTÃO ANOTAÇÃO */}
                    <Modalize
                        ref={modalAnotacaoRef}
                        snapPoint={350}>
                        <View style={styles.containerFechar}>
                            <RectButton onPress={closeAnotacao}
                                style={styles.botao}
                            >
                                <Text style={styles.textoBotaoFechar}>FECHAR</Text>
                            </RectButton>
                        </View>
                        <View style={styles.bordaTextoModalAnotacao}>

                            <TextInput
                                multiline={true}
                                numberOfLines={6}
                                style={styles.textoModalAnotacao} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis justo a pellentesque facilisis. Sed porta at arcu vitae rutrum. Nulla fermentum nisl vel nunc posuere laoreet. Sed vel tempus purus." />

                        </View>

                        <View style={styles.containerBotaoInserirImagem}>

                            <RectButton style={styles.botaoInserirImagem}>
                                <Text style={styles.textoBotaoInserirImagem}>SALVAR ANOTAÇÃO</Text>
                            </RectButton>
                        </View>
                    </Modalize>

                </View>
            </ScrollView>
        </View>
    );
}

export default IniciarInspencao;