import { takeEvery, all, takeLatest, } from 'redux-saga/effects';
import {getAllUsers,createNewUser} from './sagas';
export function* watchApi() {
    yield takeEvery('getAllUsers', getAllUsers)
    yield takeLatest('createNewUser', createNewUser)
  }
  
  export default function* rootSaga() {
    yield all([
      watchApi()
    ])
  }