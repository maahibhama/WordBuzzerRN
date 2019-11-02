import {StyleSheet} from 'react-native';

import AppStyle from '../../helpers/AppStyle';
import {AppFont} from '../../helpers/Fonts';
import {Color} from '../../helpers/Colors';

export default StyleSheet.create({
  containerView: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buzzerStyle: {
    margin: 5,
    height: 50,
    width: 50,
  },
  playerName: {
    margin: 5,
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight,
    color: Color.themeBackground,
  },
  playerScore: {
    margin: 5,
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight,
    color: Color.themeBackground,
  },
  checkedImage: {
    marginHorizontal: 5,
    height: 25,
    width: 25,
  },
  disableStyle: {
    opacity: 0.4,
  },
});
