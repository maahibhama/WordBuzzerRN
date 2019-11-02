import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';

import BackgroundView from '../../components/BackgroundView';

import styles from './styles';
import BuzzerView from '../../components/BuzzerView';
import WordButton from '../../components/WordButton';
import Routes from '../../routes/Routes';

export default function PlayGameView(props) {
  const [is1stSelected, setIs1stSelected] = useState(false);
  const [is2ndSelected, setIs2ndSelected] = useState(false);
  const [is3rdSelected, setIs3rdSelected] = useState(false);
  const [is4thSelected, setIs4thSelected] = useState(false);

  const [is1stEnable, setIs1stEnable] = useState(true);
  const [is2ndEnable, setIs2ndEnable] = useState(true);
  const [is3rdEnable, setIs3rdEnable] = useState(true);
  const [is4thEnable, setIs4thEnable] = useState(true);

  const [winnerPlayer, setWinnerPlayer] = useState(null);
  const [showRightWrongSign, setShowRightWrongSign] = useState(false);
  const [rightPlayerList, setRightPlayerList] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [startGameText, setStartGameText] = useState('Start Game');

  useEffect(() => {
    return () => {};
  });

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
    setIsGameStarted(true);
    setStartGameText('Next Word');
    resetEverything();
  };

  function resetEverything() {
    allPlayerDeseleted();
    setWinnerPlayer(null);
    setShowRightWrongSign(false);
    setRightPlayerList([]);
  }

  function allPlayerDeseleted() {
    setIs1stSelected(false);
    setIs2ndSelected(false);
    setIs3rdSelected(false);
    setIs4thSelected(false);
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
          {isGameStarted && (
            <View style={styles.transalatedTextView}>
              <Text style={styles.tranaslatedText}>{'Ola'}</Text>
            </View>
          )}
          {isGameStarted && <Text style={styles.actualText}>{'Hello'}</Text>}
          {isGameStarted && (
            <Text style={styles.numberOfWordText}>
              {'Number of Words: 1/20'}
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
