import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import {
  CreateExperienceScreen
} from '../screens';

export default StackNavigator({
  Home: { screen: HomeNavigator },
  CreateExperience: { screen: CreateExperienceScreen }
}, {
  mode: 'modal'
});
