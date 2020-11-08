import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Inicio from '../pages/Inicio';
import Checklist from '../pages/Checklist';
import Inspecionar from '../pages/Inspecionar';
import ImportarInserir from '../pages/ImportarInserir';
import Questionario from '../pages/Questionario';
import AlterarQuestao from '../pages/AlterarQuestao';
import Importar from '../pages/Importar';
import Questao from '../pages/Questao';
import Finalizacao from '../pages/Finalizacao';


const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={Login} /> 
                <Screen name="Inicio" component={Inicio} /> 
                <Screen name="Checklist" component={Checklist} /> 
                <Screen name="Inspecionar" component={Inspecionar} /> 
                <Screen name="ImportarInserir" component={ImportarInserir} /> 
                <Screen name="Questionario" component={Questionario} />
                <Screen name="AlterarQuestao" component={AlterarQuestao} /> 
                <Screen name="Importar" component={Importar} /> 
                <Screen name="Questao" component={Questao} /> 
                <Screen name="Finalizacao" component={Finalizacao} /> 
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;