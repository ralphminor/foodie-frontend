import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  HomeReducer,
  CreateExperienceReducer
} from '../screens';

export default combineReducers({
  home: HomeReducer,
  createExperience: CreateExperienceReducer,
  form
});
