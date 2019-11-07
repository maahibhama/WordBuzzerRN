import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

import WordButton from '../../components/WordButton';
import BackgroundView from '../../components/BackgroundView';
import {Icons, Logos} from '../../helpers/Assets';

import styles from './styles';
import Routes from '../../routes/Routes';

export default function WinnerView(props) {
  const {state} = props.navigation;
  const {playerInfo, numberOfQuestions} = state.params;

  const sortPlayer = playerInfo.sort((first, second) => {
    return first.score < second.score;
  });

  const firstPlayer = sortPlayer[0];
  const isValidPlayer = firstPlayer.score > 0;
  const logo = isValidPlayer ? Logos.winner : Logos.sad;
  const headingText = isValidPlayer ? 'Winner' : 'No Winner';

  return (
    <BackgroundView>
      <View style={styles.container}>
        <View style={styles.topView} />
        <View style={styles.middleView}>
          <Image source={logo} style={styles.winnerLogo} />
          <Text style={styles.headingText}>{headingText}</Text>
          {isValidPlayer && (
            <Text style={styles.playerName}>{firstPlayer.name}</Text>
          )}
          {isValidPlayer && (
            <Text style={styles.headingText}>
              {'Score: ' + firstPlayer.score + '/' + numberOfQuestions}
            </Text>
          )}
          <WordButton
            title={'Start New Game'}
            styles={styles.startButton}
            textStyles={styles.startButtonText}
            onTouch={() => {
              startNewGameButtonAction({navigation: props.navigation});
            }}
          />
        </View>
        <View style={styles.bottomView} />
      </View>
    </BackgroundView>
  );
}

WinnerView.navigationOptions = {
  header: null,
};

const startNewGameButtonAction = ({navigation}) => {
  navigation.navigate(Routes.GetStartedView);
};
