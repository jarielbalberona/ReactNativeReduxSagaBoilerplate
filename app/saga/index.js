import {
  put,
  take,
  call,
  takeLatest
} from 'redux-saga/effects'

import Auth from '../services/auth';


import {
  LOGIN,
  LOGIN_END,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from '../constants'

import {
  loginSuccess,
  loginError
} from '../actions'

import { Alert } from 'react-native'


export function * userLogin () {
  while (true) {
    try {
      const params = yield take(LOGIN)
      const { email, password } = params;
      const auth = new Auth()
      const response = yield call(auth.login, {email, password})
      if (response.status >= 400 || !response.token) {
        throw response
      }
      yield put({ type: LOGIN_SUCCESS, response})
    } catch (e) {
      const { error } = e;
      yield put({ type: LOGIN_ERROR, error})
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function * () {
  yield takeLatest(LOGIN, userLogin)
}