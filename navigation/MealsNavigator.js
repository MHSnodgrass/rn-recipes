import React from 'react'
// All of these imports had to be installed via npm separately from react-navigation
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// All of these imports had to be installed via npm separately from react-navigation
import { createAppContainer } from 'react-navigation'
import { Platform, NativeModules } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreens from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

// This is a hack, this version of drawer navigator goes into the status bar, this forces it down
const { StatusBarManager } = NativeModules
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

const defaultStackNavOptions = {
  // Specific navigation options will override defaults
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  // More options can be added here if needed
}

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
  { defaultNavigationOptions: defaultStackNavOptions }
)

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
)

const bottomTabConfig = {
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
      },
      // tabBarColor only works in android, and only if it has shifting: true
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
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
      },
      // tabBarColor is needed on both tabs to have a nice ripple effect between them
      tabBarColor: Colors.accentColor
    }
  }
}

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabConfig, {
        activeColor: 'white',
        shifting: true,
        // barStyle is used to change the tab bar color if not using shifting/tabBarColor
        barStyle: {
          backgroundColors: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(bottomTabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      })

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
)

const MainNavigator = createDrawerNavigator(
  {
    Tabs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      },
      // This is a hack, this version of drawer navigator goes into the status bar, this forces it down
      itemsContainerStyle: {
        marginTop: STATUSBAR_HEIGHT
      }
    }
  }
)

export default createAppContainer(MainNavigator)
