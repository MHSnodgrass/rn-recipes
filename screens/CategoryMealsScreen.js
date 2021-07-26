import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText'

const CategoryMealsScreen = props => {
  // Using redux to get MEALS using useSelector, using filteredMeals to respect any filters that are active
  const availableMeals = useSelector(state => state.meals.filteredMeals)

  // Used to grap data from whatever screen navigated to this one
  const catId = props.navigation.getParam('categoryId')

  // If catId is not in the array, indexOf will return -1
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  )

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    )
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen
