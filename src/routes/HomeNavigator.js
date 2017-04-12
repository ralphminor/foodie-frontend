import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';
import {
  HomeScreen,
  NearbyScreen,
  ProfileScreen
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Nearby: {
    screen: NearbyScreen
  },
  Profile: {
    screen: ProfileScreen
  }
}, {
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    inactiveTintColor: Colors.whiteColor,
    indicatorStyle: { backgroundColor: Colors.redColor },
    activeTintColor: Colors.goldColor,
    pressColor: Colors.redColor,
    style: {
      backgroundColor: Colors.blackColor
    }
  }
});
