import {  combineReducers } from 'redux';
import { authReducer } from './auth.js';
import { courseListReducer, courseReducer } from './courses.js';

const rootReducer = combineReducers({
    user: authReducer,
    courselist: courseListReducer,
    course: courseReducer
  });

  export { rootReducer };