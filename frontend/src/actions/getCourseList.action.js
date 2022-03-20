import { RECIEVE_COURSELIST } from '../constants/course.constants';
import axios from 'axios';
axios.defaults.withCredentials = true //auto send and recieve cookies - no need to add to every request now 


const getCourseList = async (dispatch) => {
    try {
        const result = await axios.get('http://localhost:5000/api/course/all-courses-for-student');
        localStorage.setItem('courselist', JSON.stringify(result.data));
        dispatch({
            type: RECIEVE_COURSELIST,
            payload: result.data,
        });
    } catch (error) {
        console.log("err:",error);
    }
};

export { getCourseList };