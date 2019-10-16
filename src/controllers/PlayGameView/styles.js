import { StyleSheet } from 'react-native'
import { Color } from '../../helpers/Colors'
import { AppFont } from '../../helpers/Fonts'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AppStyle from '../../helpers/AppStyle'

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  middleView: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  firstPlayer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  secondPlayer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  thirdPlayer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column-reverse'
  },
  fourthPlayer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column-reverse'
  },
  buttonContainerStyle:{
    flexDirection: 'row-reverse'
  },
  transalatedTextView:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 40, 
    borderRadius: 20,
    backgroundColor: Color.black,
    ...AppStyle.shadow
   },
  tranaslatedText: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.brightText
  },
  actualText: {
    marginTop: 15,
    fontSize: 30,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: "orange"
  },
  numberOfWordText: {
    marginTop: 15,
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.black
  },
  startButton: {
    width: '75%',
    marginTop: 20,
    backgroundColor: 'green'
  },
  startButtonText: {
    fontSize: AppFont.titleExtraLargeBold.size,
    color: Color.brightText
  },
  quitButton: {
    width: '75%',
    marginTop: 20,
    backgroundColor: 'red'
  }
})
