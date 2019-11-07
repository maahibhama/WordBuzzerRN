import {StyleSheet} from 'react-native';
import {AppFont} from '../../helpers/Fonts';
import {Color} from '../../helpers/Colors';

export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  alertViewWrapper: {
    padding: 15,
    backgroundColor: 'blue',
    width: 300,
    borderRadius: 10,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  numberOfWordText: {
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.black,
  },
  qaContainer: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  baseQAText: {
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.black,
  },
  questionText: {
    flex: 1,  
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: 'red',
  },
  answerText: {
    flex: 1,  
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: 'orange',
  },
  startButton: {
    width: '75%',
    marginTop: 20,
    backgroundColor: 'green',
  },
  startButtonText: {
    fontSize: AppFont.titleExtraLargeBold.size,
    color: Color.brightText,
  },
});
