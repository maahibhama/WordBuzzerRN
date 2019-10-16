import { StyleSheet } from 'react-native'
import { Color } from '../../helpers/Colors';
import { AppFont } from '../../helpers/Fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppStyle from '../../helpers/AppStyle';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  topView:{
    padding: 10,
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-start',
  },
  middleView:{
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView:{
    flex: 1
  },
  info:{
    tintColor: Color.themeBackground
  },
  headingText:{
    fontSize: 25,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText,
    marginBottom: 20
  },
  buttonStyles:{
    width: 200,
    backgroundColor: 'orange',
    borderRadius: 5,
    marginBottom: 15
  },
  startButton:{
    width: '75%',
    marginTop: 35,
    backgroundColor: 'lightgreen'
  },
  buttonText:{
    color: Color.brightText
  },
  startButtonText:{
    fontSize: AppFont.titleExtraLargeBold.size,
    color: Color.brightText
  }
})
