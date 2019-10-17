import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'

import AppNavigation from '../../../routes/AppNavigation'

import styles from './styles'

export default function App () {

  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  )
}
