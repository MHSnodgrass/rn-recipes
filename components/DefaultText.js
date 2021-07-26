import React from 'react'
import { StyleSheet, Text } from 'react-native'

// This is a presentational component using props.children to bring in whatever is between the component
const DefaultText = props => {
  return <Text style={styles.text}>{props.children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
})

export default DefaultText
