import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import GetStartedView from '../controllers/GetStartedView'
import PlayGameView from '../controllers/PlayGameView';

import Routes from './Routes'
import WinnerView from '../controllers/WinnerView';
import InfoView from '../controllers/InfoView';

const AppNavigator = createStackNavigator(
  {
    [Routes.GetStartedView]: GetStartedView,
    [Routes.PlayGameView]: PlayGameView,
    [Routes.WinnerView]: WinnerView,
    [Routes.InfoView]: InfoView
  },
  {
    initialRouteName: Routes.GetStartedView
  }
)

export default createAppContainer(AppNavigator)
