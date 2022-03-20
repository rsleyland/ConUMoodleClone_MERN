import { RECIEVE_COURSE, RECIEVE_COURSELIST, REMOVE_COURSE, REMOVE_COURSELIST } from '../constants/course.constants.js';

const courselist = localStorage.getItem('courselist');
const course = localStorage.getItem('course');

const courseListReducer = (
    state = (courselist != null) ? {data : JSON.parse(courselist)} : {}, 
    action
) => {
    switch (action.type) {
      case RECIEVE_COURSELIST:
        return {...state, ...action.payload}
      case REMOVE_COURSELIST:
        return {};
      default:
        return state;
    }
  };

  const courseReducer = (
    state = (course != null) ? {data : JSON.parse(course)} : {}, 
    action
) => {
    switch (action.type) {
      case RECIEVE_COURSE:
        return {...state, ...action.payload}
      case REMOVE_COURSE:
        return {};
      default:
        return state;
    }
  };

  
  export { courseListReducer, courseReducer };