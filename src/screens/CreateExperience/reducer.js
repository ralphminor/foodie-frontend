import {
  CREATE_EXPERIENCE,
  CREATE_EXPERIENCE_ERROR,
  CREATE_EXPERIENCE_SUCCESS
} from './actions';

const INITIAL_STATE = {
  error: {
    on: false,
    message: null
  },
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EXPERIENCE:
      return {
        ...INITIAL_STATE,
        isLoading: true
      };
    case CREATE_EXPERIENCE_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false
      };
    case CREATE_EXPERIENCE_ERROR:
      return {
        error: {
          on: true,
          message: 'There was an error!'
        },
        isLoading: false
      };
    default:
      return state;
  }
};