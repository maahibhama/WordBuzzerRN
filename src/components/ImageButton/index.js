import React from 'react'
import { TouchableHighlight, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default function ImageButton (props) {
  return (
    <TouchableHighlight
      style={[styles.viewStyle, props.styles]}
      onPress={props.onTouch}
      underlayColor={'transparent'}
    >
      <Image source={props.source} style={[styles.imageStyles, props.imageStyles]}/>
    </TouchableHighlight>
  )
}

ImageButton.propTypes = {
  source: PropTypes.any.isRequired,
  styles: PropTypes.any,
  imageStyles: PropTypes.any,
  onTouch: PropTypes.func
}

ImageButton.defaultProps = {
  styles: {},
  imageStyles: {},
  onTouch: () => {}
}
