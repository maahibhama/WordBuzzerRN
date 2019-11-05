import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';

import BackgroundView from '../../components/BackgroundView';

import styles from './styles';
import BuzzerView from '../../components/BuzzerView';
import WordButton from '../../components/WordButton';
import Routes from '../../routes/Routes';
import {getRandom, shuffle} from '../../helpers/Utility';

export default function PlayGameView(props) {
  const [is1stSelected, setIs1stSelected] = useState(false);
  const [is2ndSelected, setIs2ndSelected] = useState(false);
  const [is3rdSelected, setIs3rdSelected] = useState(false);
  const [is4thSelected, setIs4thSelected] = useState(false);

  const [is1stEnable, setIs1stEnable] = useState(false);
  const [is2ndEnable, setIs2ndEnable] = useState(false);
  const [is3rdEnable, setIs3rdEnable] = useState(false);
  const [is4thEnable, setIs4thEnable] = useState(false);

  const [winnerPlayer, setWinnerPlayer] = useState(null);
  const [showRightWrongSign, setShowRightWrongSign] = useState(false);
  const [rightPlayerList, setRightPlayerList] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [startGameText, setStartGameText] = useState('Start Game');
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [numberOfQuestion, setNumberOfQuestion] = useState(()=>{
    return setNumberOfCount()
  });

  const [randomSelectedWordArray, setRandomSelectedWordArray] = useState([])
  
  const [currentSpanishWord, setCurrentSpanishWord] = useState(null);
  const [currentSWIndex, setCurrentSWIndex] = useState(0);

  const [currentWord, setCurrentWord] = useState(null);
  const [isTimerStart, setIsTimerStart] = useState(false);

  useEffect(() => {
    const index = currentSWIndex - 1
    if(currentSWIndex > 0 && randomSelectedWordArray.length > index) {
      const spanishWord = randomSelectedWordArray[index]
      setCurrentSpanishWord(spanishWord);
    }else if(currentSWIndex == 5){
      setIsTimerStart(false)
    }else if(currentSWIndex > 0){
      setIsTimerStart(false)
    }
  }, [currentSWIndex]);

  useEffect(() => {
      const timer = window.setInterval(() => { 
        if(isTimerStart == true) {
          console.log(currentSWIndex)
          getSapnishWord()
        }else {
          window.clearInterval(timer);
        }
      }, 2000);
    
    return () => { // Return callback to run on unmount.
        window.clearInterval(timer);
    };
  }, [isTimerStart]);

  const onTouchBuzzerButton = ({buttonId}) => {
    if (buttonId == '1') {
      setIs1stSelected(true);
    } else if (buttonId == '2') {
      setIs2ndSelected(true);
    } else if (buttonId == '3') {
      setIs3rdSelected(true);
    } else if (buttonId == '4') {
      setIs4thSelected(true);
    }
  };

  const startButtonAction = () => {
    if (numberOfQuestion > currentQuestionNumber) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
      setIsGameStarted(true);
      setIsTimerStart(true)
      setStartGameText('Next Word');
      resetEverything();
      setRandomCurrentWord();
      setCurrentSWIndex(0)
    } else {
      props.navigation.navigate(Routes.WinnerView);
    }
  };

  function resetEverything() {
    allPlayerDeseleted();
    setWinnerPlayer(null);
    setShowRightWrongSign(false);
    setRightPlayerList([]);
    allPlayerEnable();
  }

  function allPlayerDeseleted() {
    setIs1stSelected(false);
    setIs2ndSelected(false);
    setIs3rdSelected(false);
    setIs4thSelected(false);
  }

  function allPlayerEnable() {
    setIs1stEnable(true);
    setIs2ndEnable(true);
    setIs3rdEnable(true);
    setIs4thEnable(true);
  }

  function setNumberOfCount() {
    const {state} = props.navigation;
    const {randomElements} = state.params;
    return randomElements.length
  }

  function setRandomCurrentWord() {
    const {state} = props.navigation;
    const {randomElements, allSpanishWord} = state.params;
    const currentWord = randomElements[currentQuestionNumber];
    setNumberOfQuestion(randomElements.length);
    setSpanishWordArray({
      currentWord: currentWord,
      allSpanishWord: allSpanishWord,
    });
    setCurrentWord(currentWord);
  }

  function setSpanishWordArray({currentWord, allSpanishWord}) {
    const randomSpanishWord = getRandom({arr: allSpanishWord, n: 4});
    const spanishWordArray = [currentWord.text_spa];
    const allSapnishWord = shuffle([...randomSpanishWord, ...spanishWordArray]);
    setRandomSelectedWordArray(allSapnishWord);
  }

  function getSapnishWord() {
    if(randomSelectedWordArray.length > 0) {
      setCurrentSWIndex(currentSWIndex => currentSWIndex + 1);
    }
  }

  return (
    <BackgroundView>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topView}>
          <BuzzerView
            playerName={'First Player'}
            playerScore={'10'}
            containerStyle={styles.firstPlayer}
            isWinner={winnerPlayer == '1'}
            isSelected={is1stSelected}
            isEnable={is1stEnable}
            showRightWrongSign={showRightWrongSign}
            isRightAnswer={rightPlayerList.includes('1')}
            onTouch={() => {
              onTouchBuzzerButton({buttonId: '1'});
            }}
          />
          <BuzzerView
            playerName={'Second Player'}
            playerScore={'10'}
            containerStyle={styles.secondPlayer}
            buttonContainerStyle={styles.buttonContainerStyle}
            isWinner={winnerPlayer == '1'}
            isSelected={is2ndSelected}
            isEnable={is2ndEnable}
            showRightWrongSign={showRightWrongSign}
            isRightAnswer={rightPlayerList.includes('2')}
            onTouch={() => {
              onTouchBuzzerButton({buttonId: '2'});
            }}
          />
        </View>
        <View style={styles.middleView}>
          {isGameStarted && currentSpanishWord != null && (
            <View style={styles.transalatedTextView}>
              <Text style={styles.tranaslatedText}>{currentSpanishWord}</Text>
            </View>
          )}
          {isGameStarted && currentWord != null && (
            <Text style={styles.actualText}>{currentWord.text_eng}</Text>
          )}
          {isGameStarted && (
            <Text style={styles.numberOfWordText}>
              {'Number of Words: ' +
                currentQuestionNumber +
                '/' +
                numberOfQuestion}
            </Text>
          )}
          <WordButton
            title={startGameText}
            styles={styles.startButton}
            textStyles={styles.startButtonText}
            onTouch={() => {
              startButtonAction();
            }}
          />
          <WordButton
            title={'Quit Game'}
            styles={styles.quitButton}
            textStyles={styles.startButtonText}
            onTouch={() => {
              quitButtonAction({navigation: props.navigation});
            }}
          />
        </View>
        <View style={styles.bottomView}>
          <BuzzerView
            playerName={'Third Player'}
            playerScore={'10'}
            containerStyle={styles.thirdPlayer}
            isWinner={winnerPlayer == '3'}
            isSelected={is3rdSelected}
            isEnable={is3rdEnable}
            showRightWrongSign={showRightWrongSign}
            isRightAnswer={rightPlayerList.includes('3')}
            onTouch={() => {
              onTouchBuzzerButton({buttonId: '3'});
            }}
          />
          <BuzzerView
            playerName={'Fourth Player'}
            playerScore={'10'}
            containerStyle={styles.fourthPlayer}
            buttonContainerStyle={styles.buttonContainerStyle}
            isWinner={winnerPlayer == '4'}
            isSelected={is4thSelected}
            isEnable={is4thEnable}
            showRightWrongSign={showRightWrongSign}
            isRightAnswer={rightPlayerList.includes('4')}
            onTouch={() => {
              onTouchBuzzerButton({buttonId: '4'});
            }}
          />
        </View>
      </SafeAreaView>
    </BackgroundView>
  );
}

PlayGameView.navigationOptions = {
  header: null,
};

PlayGameView.propTypes = {};

PlayGameView.defaultProps = {};

const quitButtonAction = ({navigation}) => {
  navigation.navigate(Routes.WinnerView);
};
