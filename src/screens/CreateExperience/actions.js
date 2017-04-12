import { ExperienceApi } from '../../../constants/api';
import { fetchLocationExperiences } from '../home/actions';

const experienceApi = new ExperienceApi();

export const CREATE_EXPERIENCE = 'CREATE_EXPERIENCE';
export const CREATE_EXPERIENCE_SUCCESS = 'CREATE_EXPERIENCE_SUCCESS';
export const CREATE_EXPERIENCE_ERROR = 'CREATE_EXPERIENCE_ERROR';

export const createExperience = args => async dispatch => {
  dispatch({ type: CREATE_EXPERIENCE });
  pth = this.state.locationId
  try {
    await experienceApi.createLocationExperience(args);
    dispatch({ type: CREATE_EXPERIENCE_SUCCESS });
  } catch (e) {
    return dispatch({ type: CREATE_EXPERIENCE_ERROR });
  }
  return await dispatch(fetchLocationExperiences());
};