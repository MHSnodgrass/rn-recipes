import React from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {
  // Used to grap data from whatever screen navigated to this one
  const catId = props.navigation.getParam('categoryId')

  // If catId is not in the array, indexOf will return -1
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  )

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

export default CategoryMealsScreen
