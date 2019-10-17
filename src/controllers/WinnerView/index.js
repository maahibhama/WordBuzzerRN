import React, { useState } from 'react'
import { Image,Text, View } from 'react-native'

import WordButton from '../../components/WordButton'
import BackgroundView from '../../components/BackgroundView'
import { Icons, Logos } from '../../helpers/Assets'

import styles from './styles'
import Routes from '../../routes/Routes'

export default function WinnerView (props) {
  const [count, setCount] = useState(0)

  return (
    <BackgroundView>
      <View style={styles.container}>
        <View style={styles.topView}/>
        <View style={styles.middleView}>
        <Image source={Logos.winner} style={styles.winnerLogo} />
            <Text style={styles.headingText}>{'Winner'}</Text>
            <Text style={styles.playerName}>{'First Player'}</Text>
          <Text style={styles.headingText}>{'Score: 1/20'}</Text>
          <WordButton
            title={'Start New Game'}
            styles={styles.startButton}
            textStyles={styles.startButtonText}
            onTouch={() => { startNewGameButtonAction({ navigation: props.navigation })}}
          />
        </View>
        <View style={styles.bottomView} />
      </View>
    </BackgroundView>
  )
}

WinnerView.navigationOptions = {
  header: null
}

const startNewGameButtonAction = ({ navigation }) => {
  navigation.navigate(Routes.GetStartedView)
}