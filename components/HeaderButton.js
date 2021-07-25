import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

const CustomHeaderButton = props => {
  return (
    /*
     * HeaderButton (not HeaderButtons) is from 'react-navigation-header-buttons
     * {...props} is a way to take in all props passed in via destructuring
     * IconComponent is used to select a set of icons, the name of the icon will be passed in to this component
     */
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  )
}

export default CustomHeaderButton
