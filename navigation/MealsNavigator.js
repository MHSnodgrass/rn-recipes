// All of these imports had to be installed via npm separately from react-navigation
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
// All of these imports had to be installed via npm separately from react-navigation
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreens from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  // Long form to set screen, allows more options in the future
  CategoryMeals: {
    screen: CategoryMealsScreens
  },
  MealDetail: MealDetailScreen
})

export default createAppContainer(MealsNavigator)
