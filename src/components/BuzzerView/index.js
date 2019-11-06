import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import ImageButton from '../ImageButton';
import {Icons} from '../../helpers/Assets';

import styles from './styles';

export default function BuzzerView(props) {
  const icon = props.isSelected ? Icons.buzzerSelected : Icons.buzzerUnselected;
  const disableStyle = props.isEnable ? {} : styles.disableStyle;
  const rightWrongIcon = props.isRightAnswer
    ? Icons.checkRound
    : Icons.cancelRound;
  const rightWrongIconStyle = props.isRightAnswer
    ? { tintColor: 'lightgreen' }
    : {};  
  const onTouch = () => {
    if (props.isEnable) {
      props.onTouch();
    }
  };
  return (
    <View style={[styles.containerView, props.containerStyle]}>
      <View style={[styles.buttonContainer, props.buttonContainerStyle]}>
        <ImageButton
          source={icon}
          styles={[styles.buzzerStyle, disableStyle]}
          onTouch={() => {
            onTouch();
          }}
        />
        {props.showRightWrongSign && (
          <Image source={rightWrongIcon} style={[styles.checkedImage, rightWrongIconStyle]} />
        )}
        {props.isWinner && (
          <Image source={Icons.prize} style={styles.checkedImage} />
        )}
      </View>
      <Text style={[styles.playerName, props.playerNameStyle]}>
        {props.playerName}
      </Text>
      <Text style={[styles.playerScore, props.playerScoreStyle]}>
        {'Score: ' + props.playerScore}
      </Text>
    </View>
  );
}

BuzzerView.propTypes = {
  containerStyle: PropTypes.any,
  buttonContainerStyle: PropTypes.any,
  playerName: PropTypes.string,
  playerNameStyle: PropTypes.any,
  playerScore: PropTypes.string,
  playerScoreStyle: PropTypes.any,
  isSelected: PropTypes.bool,
  isWinner: PropTypes.bool,
  isEnable: PropTypes.bool,
  showRightWrongSign: PropTypes.bool,
  isRightAnswer: PropTypes.bool,
  onTouch: PropTypes.func,
};

BuzzerView.defaultProps = {
  containerStyle: {},
  buttonContainerStyle: {},
  playerName: '',
  playerNameStyle: {},
  playerScore: '',
  playerScoreStyle: {},
  isSelected: false,
  isWinner: true,
  isEnable: false,
  isRightAnswer: false,
  showRightWrongSign: false,
  onTouch: () => {},
};
