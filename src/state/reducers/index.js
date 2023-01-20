import Loader from './LoaderReducers';
import AlertReducer from './AlertReducer';
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    Loader, AlertReducer
});
export default rootReducers;