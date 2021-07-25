import React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

// react-navigator is automatically passing navigation props to this component
const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            // The routeName is what was specified in MealsNavigator
            routeName: 'CategoryMeals',
            // You can pass data between navigated screens (like props) using params
            params: {
              categoryId: itemData.item.id
            }
          })
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    /*
     * numColumns sets the list up as a grid
     * CATEGORIES have an id which is accepted as a key and automatically passed in to renderGridItem under itemData
     */
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  )
}

const styles = StyleSheet.create({
  gridItem: {
    // Flexbox is default in react native, flex: 1 takes all available space
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoriesScreen
