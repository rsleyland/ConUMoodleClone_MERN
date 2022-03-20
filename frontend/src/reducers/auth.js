import { LOGGED_IN_USER, LOGOUT } from '../constants/auth.constants.js';

const userdata = localStorage.getItem('user');

const authReducer = (
    state = (userdata != null) ? {data : JSON.parse(userdata)} : {}, 
    action
) => {
    switch (action.type) {
      case LOGGED_IN_USER:
        return {...state, ...action.payload}
      case LOGOUT:
        return {};
      default:
        return state;
    }
  };

  
  export { authReducer };