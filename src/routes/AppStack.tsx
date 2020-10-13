import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Quest from '../pages/Quest';
import Inspencionar from '../pages/Inspencionar';
import Inserir from '../pages/Inserir';
import Importar from '../pages/Importar';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="Home" component={Home} />
                <Screen name="Quest" component={Quest} />
                <Screen name="Inspencionar" component={Inspencionar} />
                <Screen name="Inserir" component={Inserir} />
                <Screen name="Importar" component={Importar} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;