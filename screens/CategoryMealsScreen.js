import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
  // Used to grap data from whatever screen navigated to this one
  const catId = props.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
      <Button
        title='Go Back'
        // goBack goes back to the previous screen in the stack
        onPress={() => {
          props.navigation.goBack()
        }}
      />
    </View>
  )
}

// react-navigation automatically passes data that can be accessed outside of the regular component
CategoryMealsScreen.navigationOptions = navigationData => {
  //navigationOptions can be used as a function to access navigation data and do things like set styles
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen
