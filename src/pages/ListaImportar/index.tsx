import React from 'react'
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';


import home from '../../assets/images/logoHome.png';
import editar from '../../assets/images/icons/editar.png';
import excluir from '../../assets/images/icons/excluir.png';
import voltar from '../../assets/images/icons/voltar.png';

import { useNavigation } from '@react-navigation/native';


function ListaImportar() {

    const { navigate } = useNavigation();

    function handleNavigateToHomePage() {
        navigate('Home')
    }

    function handleNavigateToItemInserido() {
        navigate('ItemInserido')
    }
    return (
        <View style={styles.container1}>

            <View style={styles.header}>
                <View style={styles.botaoTextoLogo}>
                    <RectButton
                        onPress={handleNavigateToHomePage}
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
                            <Image source={editar} />
                        </View>
                        <View style={styles.excluir}>
                            <Image source={excluir} />
                        </View>
                    </View>
                </View>

                <View style={styles.containerButtonAndRegistro}>
                    <RectButton 
                    onPress={handleNavigateToItemInserido}
                    style={styles.button}>
                        <Text style={styles.inserir}>Inserir</Text>
                    </RectButton>
                    <Text style={styles.registros}>32 registros</Text>
                </View>


                <ScrollView>

                    <View style={styles.containerTextoDivisoriaIcons}>
                        <View style={styles.containerTexto}>
                            <Text style={styles.textoCorpo}>Lorem ipsum dolor</Text>
                        </View>

                        <View style={styles.divisoriaAndIcons}>
                            <View style={styles.divisoria} />

                            <View style={styles.editar}>
                                <Image source={editar} />
                            </View>
                            <View style={styles.excluir}>
                                <Image source={excluir} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerTextoDivisoriaIcons}>
                        <View style={styles.containerTexto}>
                            <Text style={styles.textoCorpo}>Lorem ipsum dolor</Text>
                        </View>

                        <View style={styles.divisoriaAndIcons}>
                            <View style={styles.divisoria} />

                            <View style={styles.editar}>
                                <Image source={editar} />
                            </View>
                            <View style={styles.excluir}>
                                <Image source={excluir} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerTextoDivisoriaIcons}>
                        <View style={styles.containerTexto}>
                            <Text style={styles.textoCorpo}>Lorem ipsum dolor</Text>
                        </View>

                        <View style={styles.divisoriaAndIcons}>
                            <View style={styles.divisoria} />

                            <View style={styles.editar}>
                                <Image source={editar} />
                            </View>
                            <View style={styles.excluir}>
                                <Image source={excluir} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerTextoDivisoriaIcons}>
                        <View style={styles.containerTexto}>
                            <Text style={styles.textoCorpo}>Lorem ipsum dolor</Text>
                        </View>

                        <View style={styles.divisoriaAndIcons}>
                            <View style={styles.divisoria} />

                            <View style={styles.editar}>
                                <Image source={editar} />
                            </View>
                            <View style={styles.excluir}>
                                <Image source={excluir} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerTextoDivisoriaIcons}>
                        <View style={styles.containerTexto}>
                            <Text style={styles.textoCorpo}>Lorem ipsum dolor</Text>
                        </View>

                        <View style={styles.divisoriaAndIcons}>
                            <View style={styles.divisoria} />

                            <View style={styles.editar}>
                                <Image source={editar} />
                            </View>
                            <View style={styles.excluir}>
                                <Image source={excluir} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerTextoDivisoriaIcons}>
                        <View style={styles.containerTexto}>
                            <Text style={styles.textoCorpo}>Lorem ipsum dolor</Text>
                        </View>

                        <View style={styles.divisoriaAndIcons}>
                            <View style={styles.divisoria} />

                            <View style={styles.editar}>
                                <Image source={editar} />
                            </View>
                            <View style={styles.excluir}>
                                <Image source={excluir} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerTextoDivisoriaIcons}>
                        <View style={styles.containerTexto}>
                            <Text style={styles.textoCorpo}>Lorem ipsum dolor</Text>
                        </View>

                        <View style={styles.divisoriaAndIcons}>
                            <View style={styles.divisoria} />

                            <View style={styles.editar}>
                                <Image source={editar} />
                            </View>
                            <View style={styles.excluir}>
                                <Image source={excluir} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}

export default ListaImportar;