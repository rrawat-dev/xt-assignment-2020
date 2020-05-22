import {
  FETCH_SPACEX_SUCCESS,
  FETCH_SPACEX_ERROR,
  SET_SPACEX_YEAR_FILTER,
  SET_SPACEX_LAUNCH_FILTER,
  SET_SPACEX_LAND_FILTER
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
      case SET_SPACEX_YEAR_FILTER:
        return {
          ...spacex,
          filters: {
            ...spacex.filters,
            year: action.payload
          }
        };
      case SET_SPACEX_LAUNCH_FILTER:
        return {
          ...spacex,
          filters: {
            ...spacex.filters,
            launch_success: action.payload
          }
        };
      case SET_SPACEX_LAND_FILTER:
        return {
          ...spacex,
          filters: {
            ...spacex.filters,
            land_success: action.payload
          }
        };
      default:
        return spacex;
    }
}