import Loader from './LoaderReducers';
import AlertReducer from './AlertReducer';
import DataReducers from './DataReducers';
import arrReducer from './arrReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    Loader, AlertReducer,DataReducers, arrReducer
});
export default rootReducers;