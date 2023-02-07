import { put, call, delay } from 'redux-saga/effects';
import { getAll, createUser, getAllCars, createCar, serviceRecords, createService } from './ApiCall';

//get all user details
export function* getAllUsers() {
  try {
    yield put({ type: 'show' })
    const mydata = yield call(getAll);
    delay(500)
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
    const data = yield call(getAllCars, payload.message);
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
export function* createNewCar(payload) {
  const user = payload.message.currentUser;
  yield put({ type: 'show' })
  try {
    const data = yield call(createCar, payload.message);
    delay(500)
    if (data.error === 0) {
      yield put({ type: "getUsercars",message: user})
      yield put({ type: 'AlertSuccess', message: `Entry created !!!` })
    } else {
      throw new Error();
    }
  } catch (error) {
    yield put({ type: 'AlertFailed', message: error })
  }
  yield put({ type: 'hide' })
}

// get service record of cars
export function* getServiceRecord(payload) {
  yield put({ type: 'show' })
  try {
    const data = yield call(serviceRecords, payload.message);
    if (data.error === 0) {
      yield delay(500)
      yield put({ type: 'data', message: data.Car.Servicing });
    }
  } catch (error) {
    yield put({ type: 'AlertFailed', message: error });
  }
  yield put({ type: 'hide' })
}

//Creating new service record
export function* creatServiceRecord(payload) {
  yield put({ type: 'show' })
  const user = payload.message.user;
  try {
    const data = yield call(createService, payload.message);
    delay(500)
    if (data.error === 0) {
      yield put({ type: 'AlertSuccess', message: `Service record created successfully` });
      yield put({ type: 'getServiceRecord', message: user })
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    yield put({ type: 'AlertFailed', message: `Error occured!!! please contact admin` });
  }
  yield put({ type: 'hide' })
}