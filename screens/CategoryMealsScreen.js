import React from 'react'
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {
  // Using redux to get MEALS using useSelector, using filteredMeals to respect any filters that are active
  const availableMeals = useSelector(state => state.meals.filteredMeals)

  // Used to grap data from whatever screen navigated to this one
  const catId = props.navigation.getParam('categoryId')

  // If catId is not in the array, indexOf will return -1
  const displayedMeals = availableMeals.filter(
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
