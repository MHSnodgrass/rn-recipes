import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

// react-navigator is automatically passing a prop to this component
const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title='Go to Meals!'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen
