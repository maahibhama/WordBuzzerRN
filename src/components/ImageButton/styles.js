import { StyleSheet } from 'react-native'

import AppStyle from '../../helpers/AppStyle';
import { AppFont } from '../../helpers/Fonts';
import { Color } from '../../helpers/Colors';


export default StyleSheet.create({
  viewStyle: {
    height: 40,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  imageStyles: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'center'
  }
})
