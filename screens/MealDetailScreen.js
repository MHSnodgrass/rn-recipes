import React, { useEffect, useCallback } from 'react'
import { ScrollView, Image, View, StyleSheet, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { toggleFavorite } from '../store/actions/meals'

// Custom component only used inside this component, leaving it here
const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = props => {
  // Using redux to get Meals using useSelector, no filter (getting by id)
  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.navigation.getParam('mealId')
  // .some returns true if it finds even one item in the array that satisfies the condition
  const currentMealsIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  )
  const selectedMeal = availableMeals.find(meal => meal.id === mealId)

  /*
   * Using useDispatch to access the redux action to update favorite meal state
   * Using it this way as the dispatch must be added to a navigationOption, has to be passed to params first
   */
  const dispatch = useDispatch()

  // useCallback will make it so toggleFavoriteHandler will only be recreated when dispatch or mealId changes
  const toggleFavoriteHandler = useCallback(() => {
    // toggleFavorite from actions is setting action with this meal id to be used to update state in the store
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  // useEffect is being used to avoid unnecessary rerenders when updating navigation params
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealsIsFavorite })
  }, [currentMealsIsFavorite])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam('mealTitle')
  const toggleFavorite = navigationData.navigation.getParam('toggleFav')
  const isFavorite = navigationData.navigation.getParam('isFav')

  return {
    headerTitle: mealTitle,
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
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    backgroundColor: '#dbdcdc'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
})

export default MealDetailScreen
