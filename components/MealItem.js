import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from 'react-native'

const MealItem = props => {
  let TouchableComponent = TouchableOpacity

  // TouchableNativeFeedback is for android (ripple effect) and only works on version 21 and above
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <View style={styles.mealItem}>
      {/* TouchableNativeFeedback can only have one child element, everything must be wrapped in a view */}
      <TouchableComponent onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              {/* Using a titleContainer for title styling due to IOS conflicts */}
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row'
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#dbdcdc',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  mealHeader: {
    height: '85%'
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white'
  }
})

export default MealItem
