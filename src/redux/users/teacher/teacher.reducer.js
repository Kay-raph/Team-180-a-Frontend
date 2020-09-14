import { userActionTypes } from '../user.types'

const INITIAL_STATE = {
  current: null,
  error: null,
  signingIn: false,
  signingUp: false
}

const currentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.TEACHER_SIGNUP_START:
      return {
        ...state,
        signingUp: true
      }

    case userActionTypes.TEACHER_SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false
      }

    case userActionTypes.TEACHER_SIGNIN_START:
      return {
        ...state,
        signingIn: true
      }

    case userActionTypes.TEACHER_SIGNIN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        current: action.payload
      }

    case userActionTypes.TEACHER_SIGNOUT_SUCCESS:
      return {
        ...state,
        current: null
      }

    case userActionTypes.TEACHER_SIGNUP_FAIL:
    case userActionTypes.TEACHER_SIGNIN_FAIL:
    case userActionTypes.STUDENT_SIGNOUT_FAIL:
      return {
        ...state,
        error: action.payload,
        signingUp: false,
        signingIn: false
      }

    default:
      return state
  }
}

export default currentReducer
