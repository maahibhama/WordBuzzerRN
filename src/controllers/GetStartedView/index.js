import React, { useState } from 'react'
import { Text, View, SafeAreaView, Alert } from 'react-native'

import WordButton from '../../components/WordButton'
import BackgroundView from '../../components/BackgroundView'
import ImageButton from '../../components/ImageButton'
import { Icons } from '../../helpers/Assets'
import Routes from '../../routes/Routes'
import { wordsData } from '../../helpers/Constants'
import { getRandom } from '../../helpers/Utility'

import styles from './styles'

export default function GetStartedView (props) {
  const [numberOfWord, setNumberOfWord] = useState(0)

  return (
    <BackgroundView>
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <ImageButton
            source={Icons.info}
            imageStyles={styles.info}
            onTouch={() => {
              infoButtonAction({ navigation: props.navigation })
            }}
          />
        </View>
        <View style={styles.middleView}>
          <Text style={styles.headingText}>{'Number of Words'}</Text>
          <WordButton
            title={'20 Words'}
            styles={styles.buttonStyles}
            imageStyles={styles.imageStyles}
            textStyles={styles.buttonText}
            source={numberOfWord == 20 ? Icons.checkRound : null}
            onTouch={() => {
              setNumberOfWord(20)
            }}
          />
          <WordButton
            title={'40 Words'}
            styles={styles.buttonStyles}
            imageStyles={styles.imageStyles}
            textStyles={styles.buttonText}
            source={numberOfWord == 40 ? Icons.checkRound : null}
            onTouch={() => {
              setNumberOfWord(40)
            }}
          />
          <WordButton
            title={'60 Words'}
            styles={styles.buttonStyles}
            imageStyles={styles.imageStyles}
            textStyles={styles.buttonText}
            source={numberOfWord == 60 ? Icons.checkRound : null}
            onTouch={() => {
              setNumberOfWord(60)
            }}
          />
          <WordButton
            title={'80 Words'}
            styles={styles.buttonStyles}
            imageStyles={styles.imageStyles}
            textStyles={styles.buttonText}
            source={numberOfWord == 80 ? Icons.checkRound : null}
            onTouch={() => {
              setNumberOfWord(80)
            }}
          />
          <WordButton
            title={'Start Game'}
            styles={styles.startButton}
            textStyles={styles.startButtonText}
            onTouch={() => {
              startGameButtonAction({
                navigation: props.navigation,
                numberOfWord: numberOfWord
              })
            }}
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

const startGameButtonAction = ({ navigation, numberOfWord }) => {
  if (numberOfWord > 0 && wordsData.length > 0) {
    let randomElements = getRandom({ arr: wordsData, n: numberOfWord })
    let allSpanishWord = wordsData.map(word => word.text_spa)
    navigation.navigate(Routes.PlayGameView, {
      randomElements: randomElements,
      allSpanishWord: allSpanishWord
    })
  } else {
    Alert.alert('Error', 'Please Select Number of Words.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }
    ])
  }
}
