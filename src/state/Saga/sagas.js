import { put, call, delay } from 'redux-saga/effects';
import { getAll, createUser } from './ApiCall';

//get all user details
export function* getAllUsers() {
  try {
    yield put({ type: 'show' })
    const mydata = yield call(getAll);
    yield put({type:'data', message:mydata})
    yield put({ type: 'hide' })
  } catch (error) {
    yield put({ type: 'AlertFailed', message: error })
  }

}

//create new user
export function* createNewUser(payload) {
  
  try {
    yield put({ type: 'show' })
    const status = yield call(createUser, payload.message);
    if (status.data.error === 0) {
      delay(500);
      yield put({ type: 'AlertSuccess', message: "User created Successfully!" })
      yield put({ type: 'hide' })
    } else {
      yield put({ type: 'AlertFailed', message: "Duplicate user not allowted!!!" })
      yield put({ type: 'hide' })
    }
  } catch (error) {
    yield put({ type: 'AlertSuccess', message: `Error while creating new user ${error}` })
    yield put({ type: 'hide' })
  }
}
