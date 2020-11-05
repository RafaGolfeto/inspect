import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Quest from '../pages/Quest';
import Inspecionar from '../pages/Inspecionar';
import Inserir from '../pages/Inserir';
import Importar from '../pages/Importar';
import ListaImportar from '../pages/ListaImportar';
import AlterarQuestionario from '../pages/AlterarQuestionario';
import ListaInserir from '../pages/ListaInserir';
import ItemInserido from '../pages/ItemInserido';
import IniciarInspencao from '../pages/IniciarInspencao';
import InspecaoFinalizada from '../pages/InspecaoFinalizada';


const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="Home" component={Home} />
                <Screen name="Quest" component={Quest} />
                <Screen name="Inspecionar" component={Inspecionar} />
                <Screen name="Inserir" component={Inserir} />
                <Screen name="Importar" component={Importar} />
                <Screen name="ListaImportar" component={ListaImportar} />
                <Screen name="AlterarQuestionario" component={AlterarQuestionario} />
                <Screen name="ListaInserir" component={ListaInserir} />
                <Screen name="ItemInserido" component={ItemInserido} />
                <Screen name="IniciarInspencao" component={IniciarInspencao} />
                <Screen name="InspecaoFinalizada" component={InspecaoFinalizada} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;