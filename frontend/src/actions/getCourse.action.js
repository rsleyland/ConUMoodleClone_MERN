import { RECIEVE_COURSE } from '../constants/course.constants';
import axios from 'axios';
axios.defaults.withCredentials = true //auto send and recieve cookies - no need to add to every request now 


const getCourse = async (cid, dispatch) => {
    try {
        const result = await axios.get(`http://localhost:5000/api/course/id/${cid}`);
        localStorage.setItem('course', JSON.stringify(result.data));
        dispatch({
            type: RECIEVE_COURSE,
            payload: result.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export { getCourse };