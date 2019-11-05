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
  container:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyles:{
    marginHorizontal: 10,
    width: 25,
    height: 25
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.themeDark
  }
})
