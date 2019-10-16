import { StyleSheet } from 'react-native'

import AppStyle from '../../helpers/AppStyle';
import { AppFont } from '../../helpers/Fonts';
import { Color } from '../../helpers/Colors';


export default StyleSheet.create({
  viewStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    ...AppStyle.shadow
  },
  textStyle: {
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.themeDark
  }
})
