import Loader from './LoaderReducers';
import AlertReducer from './AlertReducer';
import DataReducers from './DataReducers';
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    Loader, AlertReducer,DataReducers
});
export default rootReducers;