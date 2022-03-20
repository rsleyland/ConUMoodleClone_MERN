import { LOGGED_IN_USER } from '../constants/auth.constants';

import axios from 'axios';
axios.defaults.withCredentials = true //auto send and recieve cookies - no need to add to every request now 


const login = async (user, dispatch) => {

    try {
        const result = await axios.post('http://localhost:5000/api/auth/login', user);

        localStorage.setItem('user', JSON.stringify(result.data));
        dispatch({
            type: LOGGED_IN_USER,
            payload: result.data,
        });

        return "success"
    } catch (error) {
        console.log(error.response.data.message);
        return error.response.data.message
    }
};

export { login };