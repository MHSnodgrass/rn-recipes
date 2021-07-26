import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/meals'

// enableScreens tells the app to use native screens, performance increase in most cases
enableScreens()

// combineReducers combines reducers to then be applied to a store
const rootReducer = combineReducers({
  meals: mealsReducer
})

// Redux store for state
const store = createStore(rootReducer)

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
    // Provider is used to apply the store to the top most component so the app can access it
    <Provider store={store}>
      <React.Fragment>
        <MealsNavigator />
        <StatusBar style='auto' />
      </React.Fragment>
    </Provider>
  )
}
