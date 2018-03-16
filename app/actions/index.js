import { Alert } from 'react-native'

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  LOGIN,
  LOGOUT,
  CHANGE_EMAIL,
  CHANGE_PASSWORD
} from "../constants";

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email
  }
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password
  }
}

export function login(email, password) {
  return {
    type: LOGIN,
    email,
    password
  }
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response
  }
}

export function loginError(response) {
  return {
    type: LOGIN_ERROR,
    response
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function incrementAction() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrementAction() {
  return {
    type: DECREMENT_COUNTER
  }
}

