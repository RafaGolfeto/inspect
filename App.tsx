import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import {Montserrat_700Bold, Montserrat_300Light, useFonts, Montserrat_600SemiBold, Montserrat_500Medium} from '@expo-google-fonts/montserrat';
import AppStack from './src/routes/AppStack';


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
  return (
    <>
    <AppStack />
    <StatusBar style="auto" />
    </>
  );
}
}