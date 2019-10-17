import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import PropTypes from 'prop-types'

import BackgroundView from '../../components/BackgroundView'

import styles from './styles'
import BuzzerView from '../../components/BuzzerView'
import WordButton from '../../components/WordButton'
import Routes from '../../routes/Routes'

export default function PlayGameView (props) {
  return (
    <BackgroundView>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topView}>
          <BuzzerView
            playerName={'First Player'}
            playerScore={'Score: 10'}
            containerStyle={styles.firstPlayer}
          />
          <BuzzerView
            playerName={'Second Player'}
            playerScore={'Score: 10'}
            containerStyle={styles.secondPlayer}
            buttonContainerStyle={styles.buttonContainerStyle}
          />
        </View>
        <View style={styles.middleView}>
          <View style={styles.transalatedTextView}>
            <Text style={styles.tranaslatedText}>{'Ola'}</Text>
          </View>
          <Text style={styles.actualText}>{'Hello'}</Text>
          <Text style={styles.numberOfWordText}>{'Number of Words: 1/20'}</Text>
          <WordButton
            title={'Start Game'}
            styles={styles.startButton}
            ˆ
            textStyles={styles.startButtonText}
          />
          <WordButton
            title={'Quit Game'}
            styles={styles.quitButton}
            textStyles={styles.startButtonText}
            onTouch={() => { quitButtonAction({ navigation: props.navigation })}}
          />
        </View>
        <View style={styles.bottomView}>
          <BuzzerView
            playerName={'Third Player'}
            playerScore={'Score: 10'}
            containerStyle={styles.thirdPlayer}
          />
          <BuzzerView
            playerName={'Fourth Player'}
            playerScore={'Score: 10'}
            containerStyle={styles.fourthPlayer}
            buttonContainerStyle={styles.buttonContainerStyle}
          />
        </View>
      </SafeAreaView>
    </BackgroundView>
  )
}

PlayGameView.navigationOptions = {
  header: null
}

PlayGameView.propTypes = {}

PlayGameView.defaultProps = {}


const quitButtonAction = ({ navigation }) => {
  navigation.navigate(Routes.WinnerView)
}

