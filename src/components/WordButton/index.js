import React from 'react'
import { TouchableHighlight, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default function WordButton (props) {
  const newTextStyle = props.source != null ? { marginRight: 45 } : {}
  return (
    <TouchableHighlight
      style={[styles.viewStyle, props.styles]}
      onPress={props.onTouch}
      underlayColor={'transparent'}
    >
      <View style={[styles.container, props.containerStyle]}>
        {props.source != null && <Image
          source={props.source}
          style={[styles.imageStyles, props.imageStyles]}
        />}
        <Text style={[styles.textStyle, newTextStyle, props.textStyles]}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  )
}

WordButton.propTypes = {
  title: PropTypes.string.isRequired,
  containerStyle: PropTypes.any,
  imageStyles: PropTypes.any,
  source: PropTypes.any,
  styles: PropTypes.any,
  textStyles: PropTypes.any,
  onTouch: PropTypes.func
}

WordButton.defaultProps = {
  styles: {},
  source: null,
  imageStyles: {},
  containerStyle: {},
  textStyles: {},
  onTouch: () => {}
}
