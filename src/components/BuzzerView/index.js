import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import ImageButton from '../ImageButton'
import { Icons } from '../../helpers/Assets'

import styles from './styles'

export default function BuzzerView (props) {
  return (
    <View style={[styles.containerView, props.containerStyle]}>
      <View style={[styles.buttonContainer, props.buttonContainerStyle]}>
        <ImageButton
          source={Icons.buzzerUnselected}
          styles={styles.buzzerStyle}
        />
        <Image source={Icons.checkRound} style={styles.checkedImage} />
        <Image source={Icons.prize} style={styles.checkedImage} />
      </View>
      <Text style={[styles.playerName, props.playerNameStyle]}>
        {props.playerName}
      </Text>
      <Text style={[styles.playerScore, props.playerScoreStyle]}>
        {props.playerScore}
      </Text>
    </View>
  )
}

BuzzerView.propTypes = {
  containerStyle: PropTypes.any,
  buttonContainerStyle: PropTypes.any,
  playerName: PropTypes.string,
  playerNameStyle: PropTypes.any,
  playerScore: PropTypes.string,
  playerScoreStyle: PropTypes.any,
  onTouch: PropTypes.func
}

BuzzerView.defaultProps = {
  containerStyle: {},
  buttonContainerStyle: {},
  playerName: '',
  playerNameStyle: {},
  playerScore: '',
  playerScoreStyle: {},
  onTouch: () => {}
}
