import { takeEvery, all, takeLatest, } from 'redux-saga/effects';
import {getAllUsers,createNewUser, getcars, createNewCar, getServiceRecord} from './sagas';
export function* watchApi() {
    yield takeEvery('getAllUsers', getAllUsers)
    yield takeEvery('getUsercars', getcars)
    yield takeEvery('getServiceRecord', getServiceRecord)
    yield takeLatest('createNewUser', createNewUser)
    yield takeLatest('createNewCar', createNewCar)
  }
  
  export default function* rootSaga() {
    yield all([
      watchApi()
    ])
  }