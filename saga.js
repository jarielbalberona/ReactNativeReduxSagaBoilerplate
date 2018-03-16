import { fork } from 'redux-saga/effects'
import {
  userLogin
} from './app/saga'

export default function * rootSaga () {
  yield [
    fork(userLogin),
  ]
}