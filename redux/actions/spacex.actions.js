import { fetchSpaceXData } from '../../services/spacex/spacex.service';

export const FETCH_SPACEX_SUCCESS = 'FETCH_SPACEX_SUCCESS';
export const FETCH_SPACEX_ERROR = 'FETCH_SPACEX_ERROR';
export const SHOW_FULLPAGE_LOADER = 'SHOW_FULLPAGE_LOADER';
export const SET_SPACEX_YEAR_FILTER = 'SET_SPACEX_YEAR_FILTER';
export const SET_SPACEX_LAUNCH_FILTER = 'SET_SPACEX_LAUNCH_FILTER';
export const SET_SPACEX_LAND_FILTER = 'SET_SPACEX_LAND_FILTER';

export function showFullPageLoaderAction(showFullPageLoader) {
  return {
      type: SHOW_FULLPAGE_LOADER,
      payload: showFullPageLoader
  };
}

export function fetchSpaceXDataAsyncAction(options) {
  return (dispatch) => {
    dispatch(showFullPageLoaderAction(true));
    return fetchSpaceXData(options).then((data) => {
      dispatch(fetchSpaceXDataSuccessAction(data));
      dispatch(showFullPageLoaderAction(false));
    }).catch(() => {
        dispatch(showFullPageLoaderAction(false));
    });
  };
}

export function fetchSpaceXDataSuccessAction(data) {
  return {
    type: FETCH_SPACEX_SUCCESS,
    payload: data
  }
}
