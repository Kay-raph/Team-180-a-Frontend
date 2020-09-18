import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import teacherReducer from './users/teacher/teacher.reducer'

const rootReducer = combineReducers({
  teacher: teacherReducer
})

// persist teacher in local storage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['teacher']
}

export default persistReducer(persistConfig, rootReducer)
