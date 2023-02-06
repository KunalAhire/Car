import { put, call, delay } from 'redux-saga/effects';
import { getAll, createUser, getAllCars, createCar, serviceRecords } from './ApiCall';

//get all user details
export function* getAllUsers() {
  try {
    yield put({ type: 'show' })
    const mydata = yield call(getAll);
    yield put({ type: 'data', message: mydata.Users })
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

// get users Cars 
export function* getcars(payload) {
  try {
    yield put({ type: 'show' })
    const data = yield call(getAllCars, payload);
    if (data.error === 0) {
      yield put({ type: 'data', message: data.User.Cars })
      yield put({ type: 'hide' })
    } else {
      throw Error("Somethinng went wrong please try again")
    }

  } catch (error) {
    yield put({ type: 'AlertFailed', message: error })
    yield put({ type: 'hide' })
  }
}

// create new car for user
export function* createNewCar(payload){
  
  try {
    const data = yield call(createCar, payload.message);
    if(data.error === 0){
      window.location.reload();
    }else{
      throw new Error();
    }
  } catch (error) {
    yield put({ type: 'AlertFailed', message: error })
  }
}

// get service record of cars
export function* getServiceRecord(payload){
  try {
    const data = yield call(serviceRecords, payload.message);
    if(data.error === 0){
      delay(1000)
      console.log(data.Car);
      
      yield put({ type: 'data', message: data.Car })
    }
  } catch (error) {
    yield put({ type: 'AlertFailed', message: error })
  }
}