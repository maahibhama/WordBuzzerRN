import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'

import styles from './styles'

export default function App () {
  const [count, setCount] = useState(0)

  return <View style={styles.container} />
}
