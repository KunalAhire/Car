import { put, takeEvery, call, all } from 'redux-saga/effects';
import {data} from '../action-creators'
import {getAll} from './ApiCall';



export function* getAllUsers() {
    const mydata =  yield call(getAll);
     yield put(data(mydata))
}

export function* watchApi() {
    yield takeEvery('getAllUsers', getAllUsers)
}
export default function* rootSaga() {
    yield all([
      watchApi()
    ])
  }