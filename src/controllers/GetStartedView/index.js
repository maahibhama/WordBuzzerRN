import React, { useState } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import WordButton from '../../components/WordButton'
import BackgroundView from '../../components/BackgroundView'
import ImageButton from '../../components/ImageButton'
import { Icons } from '../../helpers/Assets'

import styles from './styles'
import Routes from '../../routes/Routes'

export default function GetStartedView (props) {
  const [count, setCount] = useState(0)

  return (
    <BackgroundView>
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <ImageButton
            source={Icons.info}
            imageStyles={styles.info}
            onTouch={() => { infoButtonAction({ navigation: props.navigation })}}
          />
        </View>
        <View style={styles.middleView}>
          <Text style={styles.headingText}>{'Number of Words'}</Text>
          <WordButton
            title={'20 Words'}
            styles={styles.buttonStyles}
            textStyles={styles.buttonText}
          />
          <WordButton
            title={'40 Words'}
            styles={styles.buttonStyles}
            textStyles={styles.buttonText}
          />
          <WordButton
            title={'60 Words'}
            styles={styles.buttonStyles}
            textStyles={styles.buttonText}
          />
          <WordButton
            title={'80 Words'}
            styles={styles.buttonStyles}
            textStyles={styles.buttonText}
          />
          <WordButton
            title={'Start Game'}
            styles={styles.startButton}
            textStyles={styles.startButtonText}
            onTouch={() => { startGameButtonAction({ navigation: props.navigation })}}
          />
        </View>
        <View style={styles.bottomView} />
      </SafeAreaView>
    </BackgroundView>
  )
}

GetStartedView.navigationOptions = {
  header: null
}

const infoButtonAction = ({ navigation }) => {
  navigation.navigate(Routes.InfoView)
}

const startGameButtonAction = ({ navigation }) => {
  navigation.navigate(Routes.PlayGameView)
}
