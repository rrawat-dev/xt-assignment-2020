import {
  FETCH_SPACEX_SUCCESS,
  FETCH_SPACEX_ERROR,
  SET_SPACEX_FILTERS
} from '../actions/spacex.actions';

const DEFAULT_STATE = {
  data: [],
  error: false,
  isFetching: false,
  filters: {
    limit: 100,
    launch_year: null,
    launch_success: null,
    land_success: null
  }
};

export default function spacex(spacex = DEFAULT_STATE, action) {
    switch(action.type) {
      case FETCH_SPACEX_SUCCESS:
        return {
            ...spacex,
            data: action.payload
        };
      case FETCH_SPACEX_ERROR:
        return {
          ...spacex,
          data: []
        };
      case SET_SPACEX_FILTERS:
        return {
          ...spacex,
          filters: {
            ...spacex.filters,
            ...action.payload
          }
        };
      default:
        return spacex;
    }
}