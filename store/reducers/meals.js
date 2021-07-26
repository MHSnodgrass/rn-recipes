import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

// state = initialState sets the initialState as the default argument
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      )
      // Check if index is not -1 (if it is -1, it wasn't in the array)
      if (existingIndex >= 0) {
        // Copy the existing favoriteMeals array
        const updatedFavMeals = [...state.favoriteMeals]
        // Remove the meal by index, 1 is telling it to only remove the meal at that index
        updatedFavMeals.splice(existingIndex, 1)
        // Grab original state so we don't overwrite anything else, only chaning favoriteMeals
        return { ...state, favoriteMeals: updatedFavMeals }
      } else {
        // Grab the meal from the state
        const meal = state.meals.find(meal => meal.id === action.mealId)
        // Overwrite just the favoriteMeals state using the current state with the new meal added (concat)
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
      }
    case SET_FILTERS:
      const appliedFilters = action.filters
      // Check each meal to see if they should be excluded based on filters
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false
        }
        if (appliedFilters.vegtarian && !meal.isVegatarian) {
          return false
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false
        }
        return true
      })
      return { ...state, filteredMeals: updatedFilteredMeals }
    default:
      return state
  }
  return state
}

export default mealsReducer
