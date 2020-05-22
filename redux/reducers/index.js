import { combineReducers } from 'redux';
import fullPageLoader from './fullPageLoader.reducer';
import spacex from './spacex.reducer';

export default combineReducers({
    spacex,
    fullPageLoader
});