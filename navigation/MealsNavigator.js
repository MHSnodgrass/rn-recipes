// All of these imports had to be installed via npm separately from react-navigation
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
// All of these imports had to be installed via npm separately from react-navigation
import { createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreens from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'

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
    // Specific navigation options will override defaults
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white'
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitleAlign: 'center'
    }
    // More options can be added here if needed
  }
)

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    // Choose your tabs, can also take another navigator (MealsNavigator)
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        // tabInfo is automatically based in by the tab navigator
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={25}
              // The tintColor is coming from tabBarOptions down below
              color={tabInfo.tintColor}
            />
          )
        }
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        //tabBarLabel: "title" can be used to change the name of the tab labels
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name='ios-star'
              size={25}
              // The tintColor is coming from tabBarOptions down below
              color={tabInfo.tintColor}
            />
          )
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
)

export default createAppContainer(MealsFavTabNavigator)
