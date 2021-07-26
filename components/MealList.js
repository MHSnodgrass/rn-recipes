import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import MealItem from './MealItem'

const MealList = props => {
  // Grabbing if it is a favorite meal in MealList for initial value
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  const renderMealItem = listData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === listData.item.id)
    return (
      <MealItem
        title={listData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: listData.item.id,
              mealTitle: listData.item.title,
              isFav: isFavorite
            }
          })
        }}
        duration={listData.item.duration}
        complexity={listData.item.complexity}
        affordability={listData.item.affordability}
        image={listData.item.imageUrl}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
})

export default MealList
