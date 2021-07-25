import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'

import MealsNavigator from './navigation/MealsNavigator'

enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App () {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <React.Fragment>
      <MealsNavigator />
      <StatusBar style='auto' />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({})
