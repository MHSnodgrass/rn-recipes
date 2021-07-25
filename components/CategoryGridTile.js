import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from 'react-native'

const CategoryGridTile = props => {
  let TouchableComponent = TouchableOpacity

  // TouchableNativeFeedback is for android (ripple effect) and only works on version 21 and above
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          // Using ...{} to as the backgroundColor is just one property
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLine={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    // Flexbox is default in react native, flex: 1 takes all available space
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    // overflow: 'hidden' will distrupt IOS shadows, and is only needed for android ripple via elevation
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    /*
     * elevation is for android
     * must be in the same style configuration as overflow: hidden
     * if overflow: hidden is somewhere else, elevation will be overidden
     */
    elevation: 5
  },
  container: {
    flex: 1,
    borderRadius: 10,
    // shadow properties only work on IOS
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
})

export default CategoryGridTile
