import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default function WordButton (props) {
  return (
    <TouchableHighlight
      style={[styles.viewStyle, props.styles]}
      onPress={props.onTouch}
      underlayColor={'transparent'}
    >
      <Text style={[styles.textStyle, props.textStyles]}>
        {props.title}
      </Text>
    </TouchableHighlight>
  )
}

WordButton.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.any,
  textStyles: PropTypes.any,
  onTouch: PropTypes.func
}

WordButton.defaultProps = {
  styles: {},
  textStyles: {},
  onTouch: () => {}
}
