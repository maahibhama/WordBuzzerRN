import { StyleSheet } from 'react-native'
import { Color } from '../../helpers/Colors'
import { AppFont } from '../../helpers/Fonts'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AppStyle from '../../helpers/AppStyle'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  topView: {
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  back: {
    tintColor: Color.themeBackground
  },
  tableView:{
    flex: 1,
  },
  itemText:{
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: AppFont.titleLarge.size,
    fontFamily: AppFont.titleLarge.name,
    fontWeight: AppFont.titleLarge.weight,
    color: Color.themeBackground,
  }
})

