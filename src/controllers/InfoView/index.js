import React, { useState } from 'react'
import { FlatList, View, SafeAreaView, Text } from 'react-native'

import BackgroundView from '../../components/BackgroundView'
import { Icons } from '../../helpers/Assets'
import ImageButton from '../../components/ImageButton'
import { instructions } from '../../helpers/Constants'

import styles from './styles'

export default function InfoView (props) {
  const [count, setCount] = useState(0)

  return (
    <BackgroundView>
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <ImageButton
            source={Icons.back}
            imageStyles={styles.back}
            onTouch={() => {
              backButtonAction({ navigtion: props.navigation })
            }}
          />
          <Text style={styles.instructionText}>{'Instructions'}</Text>
        </View>
        <FlatList
          data={instructions}
          renderItem={renderItem}
          keyExtractor={(item, index) => item}
          style={styles.tableView}
        />
      </SafeAreaView>
    </BackgroundView>
  )
}

InfoView.navigationOptions = {
  header: null
}

const renderItem = ({ item, index }) => {
  return (
    <Text numberOfLines={0} style={styles.itemText}>
      {item}
    </Text>
  )
}

const backButtonAction = ({ navigtion }) => {
  navigtion.goBack()
}
