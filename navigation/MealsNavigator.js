// All of these imports had to be installed via npm separately from react-navigation
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
// All of these imports had to be installed via npm separately from react-navigation
import { createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreens from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    // Long form to set screen, allows more options in the future
    CategoryMeals: {
      screen: CategoryMealsScreens
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white'
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitleAlign: 'center'
    }
  }
)

export default createAppContainer(MealsNavigator)
