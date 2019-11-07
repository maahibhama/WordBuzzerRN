import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';

import BackgroundView from '../../components/BackgroundView';

import styles from './styles';
import BuzzerView from '../../components/BuzzerView';
import WordButton from '../../components/WordButton';
import Routes from '../../routes/Routes';
import {getRandom, shuffle} from '../../helpers/Utility';
import {playerInfo} from '../../helpers/Constants';
import WordPopView from '../../components/WordPopView';

export default function PlayGameView(props) {
  const [is1stSelected, setIs1stSelected] = useState(false);
  const [is2ndSelected, setIs2ndSelected] = useState(false);
  const [is3rdSelected, setIs3rdSelected] = useState(false);
  const [is4thSelected, setIs4thSelected] = useState(false);

  const [playersInfo, setPlayersInfo] = useState(playerInfo);

  const [showRightWrongSign, setShowRightWrongSign] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [startGameText, setStartGameText] = useState('Start Game');
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [numberOfQuestion, setNumberOfQuestion] = useState(() => {
    return setNumberOfCount();
  });

  const [randomSelectedWordArray, setRandomSelectedWordArray] = useState([]);

  const [currentSpanishWord, setCurrentSpanishWord] = useState(null);

  const [currentWord, setCurrentWord] = useState(null);

  const [currentSWIndex, setCurrentSWIndex] = useState(0);
  useEffect(() => {
    const index = currentSWIndex - 1;
    if (currentSWIndex > 0 && randomSelectedWordArray.length > index) {
      const checkingCondition = checkQuestionAnswer();
      const isAllPlayerDisable = checkAllPlayerDisbale();
      if (checkingCondition == false && isAllPlayerDisable == false) {
        const spanishWord = randomSelectedWordArray[index];
        setCurrentSpanishWord(spanishWord);
      } else {
        setShowRightWrongSign(true);
        setIsTimerStart(false);
      }
    } else if (currentSWIndex == 6) {
      checkQuestionAnswer();
      setShowRightWrongSign(true);
      setIsTimerStart(false);
    } else if (currentSWIndex > 0) {
      setIsTimerStart(false);
    }
  }, [currentSWIndex]);

  const [isTimerStart, setIsTimerStart] = useState(false);
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (isTimerStart == true) {
        console.log(currentSWIndex);
        getSapnishWord();
      } else {
        window.clearInterval(timer);
      }
    }, 3000);

    return () => {
      // Return callback to run on unmount.
      window.clearInterval(timer);
    };
  }, [isTimerStart]);

  const onTouchBuzzerButton = ({buttonId}) => {
    const date = new Date().getTime();
    if (buttonId == '1') {
      playersInfo[0].selectedTime = date;
      setIs1stSelected(true);
    } else if (buttonId == '2') {
      playersInfo[1].selectedTime = date;
      setIs2ndSelected(true);
    } else if (buttonId == '3') {
      playersInfo[2].selectedTime = date;
      setIs3rdSelected(true);
    } else if (buttonId == '4') {
      playersInfo[3].selectedTime = date;
      setIs4thSelected(true);
    }
  };

  const startButtonAction = () => {
    if (numberOfQuestion > currentQuestionNumber) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
      setIsGameStarted(true);
      setIsTimerStart(true);
      setStartGameText('Next Word');
      resetEverything();
      setRandomCurrentWord();
      setCurrentSWIndex(0);
    } else {
      navigateToWinnerScreen();
    }
  };

  const quitButtonAction = () => {
    navigateToWinnerScreen();
  };

  function navigateToWinnerScreen() {
    props.navigation.navigate(Routes.WinnerView, {
      playerInfo: playersInfo,
      numberOfQuestions: numberOfQuestion,
    });
  }

  function resetEverything() {
    setCurrentSpanishWord(null);
    allPlayerDeseleted();
    allPlayersSelectedTime();
    setShowRightWrongSign(false);
  }

  function allPlayerDeseleted() {
    setIs1stSelected(false);
    setIs2ndSelected(false);
    setIs3rdSelected(false);
    setIs4thSelected(false);
  }

  function allPlayersSelectedTime() {
    playersInfo.forEach(element => {
      element.selectedTime = 0;
      element.isRight = false;
      element.isEnable = true;
      element.isWinner = false;
    });
  }

  function countPlayerScore() {
    const filterPlayer = playersInfo.filter(element => {
      return element.selectedTime > 0;
    });
    const sortedPlayer = filterPlayer.sort((first, second) => {
      return first.selectedTime > second.selectedTime;
    });
    playersInfo.forEach(element => {
      //filterMethods
      const elementExist = sortedPlayer.includes(element);

      if (elementExist) {
        element.isRight = true;
        if (sortedPlayer.length > 0) {
          const firstPlayer = sortedPlayer[0];
          if (firstPlayer.id == element.id) {
            const exitingScore = (parseInt(element.score) + 1).toString();
            element.score = exitingScore;
            element.isWinner = true;
          }
        }
      } else {
        element.isRight = false;
        element.isEnable = false;
      }
    });
  }

  function checkQuestionAnswer() {
    if (
      currentWord != null &&
      currentSpanishWord != null &&
      currentWord.text_spa == currentSpanishWord
    ) {
      countPlayerScore();
      return true;
    }
    disableSelectedPlayer();
    return false;
  }

  function disableSelectedPlayer() {
    playersInfo.forEach(element => {
      if (element.selectedTime > 0) {
        element.isEnable = false;
        element.isRight = false;
        element.selectedTime = 0;
      }
    });
  }

  function checkAllPlayerDisbale() {
    const filter = playersInfo.filter(element => {
      return element.isEnable == false;
    });

    return filter.length == 4;
  }

  function setNumberOfCount() {
    const {state} = props.navigation;
    const {randomElements} = state.params;
    return randomElements.length;
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
    if (randomSelectedWordArray.length > 0) {
      setCurrentSWIndex(currentSWIndex => currentSWIndex + 1);
    }
  }

  return (
    <BackgroundView>
      {currentWord != null && (
        <WordPopView
          showAlert={showRightWrongSign}
          noOfAnswers={currentQuestionNumber}
          totalNoOfQuestion={numberOfQuestion}
          onTouch={() => {
            startButtonAction();
          }}
          englishWord={currentWord.text_eng}
          spanishWord={currentWord.text_spa}
        />
      )}
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topView}>
          <BuzzerView
            playerName={playersInfo[0].name}
            playerScore={playersInfo[0].score}
            containerStyle={styles.firstPlayer}
            isWinner={playersInfo[0].isWinner}
            isSelected={is1stSelected}
            isEnable={playersInfo[0].isEnable}
            showRightWrongSign={showRightWrongSign}
            isRightAnswer={playersInfo[0].isRight}
            onTouch={() => {
              onTouchBuzzerButton({buttonId: '1'});
            }}
          />
          <BuzzerView
            playerName={playersInfo[1].name}
            playerScore={playersInfo[1].score}
            containerStyle={styles.secondPlayer}
            buttonContainerStyle={styles.buttonContainerStyle}
            isWinner={playersInfo[1].isWinner}
            isSelected={is2ndSelected}
            isEnable={playersInfo[1].isEnable}
            showRightWrongSign={showRightWrongSign}
            isRightAnswer={playersInfo[1].isRight}
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
              quitButtonAction();
            }}
          />
        </View>
        <View style={styles.bottomView}>
          <BuzzerView
            playerName={playersInfo[2].name}
            playerScore={playersInfo[2].score}
            containerStyle={styles.thirdPlayer}
            isWinner={playersInfo[2].isWinner}
            isSelected={is3rdSelected}
            isEnable={playersInfo[2].isEnable}
            showRightWrongSign={showRightWrongSign}
            isRightAnswer={playersInfo[2].isRight}
            onTouch={() => {
              onTouchBuzzerButton({buttonId: '3'});
            }}
          />
          <BuzzerView
            playerName={playersInfo[3].name}
            playerScore={playersInfo[3].score}
            containerStyle={styles.fourthPlayer}
            buttonContainerStyle={styles.buttonContainerStyle}
            isWinner={playersInfo[3].isWinner}
            isSelected={is4thSelected}
            isEnable={playersInfo[3].isEnable}
            showRightWrongSign={showRightWrongSign}
            isRightAnswer={playersInfo[3].isRight}
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
