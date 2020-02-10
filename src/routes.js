import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cliente from './pages/Cliente';
import Config from './pages/Config';
import Notific from './pages/Notific';
import Faturas from './pages/Faturas';

export default createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
      }),
      Dashboard: createBottomTabNavigator(
        {
          Cliente,
          Faturas,
          Config,
          Notific,
        },
        {
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255,255,255, 0.6)',
            style: {
              backgroundColor: '#8d41a8',
            },
          },
        },
      ),
    },
    {
      initialRouteName: 'Sign',
    },
  ),
);
