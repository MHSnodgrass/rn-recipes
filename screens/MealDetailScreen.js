import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId')

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='Go Back to Categories'
        onPress={() => {
          props.navigation.popToTop()
        }}
      />
    </View>
  )
}

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return {
    headerTitle: selectedMeal.title,
    // headerRight: () => <Component /> is the new syntax
    headerRight: () => (
      /*
       * HeaderButtons (not HeaderButton) is from react-navigation-header-buttons
       * HeaderButtonComponent prop takes in the custom header button component you created
       * Item is from react-navigation-header-buttons
       * Item takes props such as a fallback title, which icon you would like to use, and the method you wish to call if it is pressed
       * iconName must match a name in the icon set you selected in your custom header button
       */
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => {
            console.log('Mark as favorite!')
          }}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailScreen
