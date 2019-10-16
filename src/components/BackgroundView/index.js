import React from 'react'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'

import { Color } from '../../helpers/Colors'

import styles from './styles'

export default function BackgroundView (props) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[Color.themeLight, Color.themeDark]}
      style={styles.linearGradient}
    >
      {props.children}
    </LinearGradient>
  )
}

BackgroundView.propTypes = {}

BackgroundView.defaultProps = {}
