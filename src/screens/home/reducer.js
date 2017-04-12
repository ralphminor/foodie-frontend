import {
  FETCH_EXPERIENCES
} from './actions';

const INITIAL_STATE = {
  experiences: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      messsage: null
    }
  }
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_EXPERIENCES}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_EXPERIENCES}_FULFILLED`:
      return {
        experiences: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null
          }
        }
      };
    case `${FETCH_EXPERIENCES}_REJECTED`:
      return {
        experiences: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Error when fetching experiences.'
          }
        }
      };
    default:
      return state;
  }
};
