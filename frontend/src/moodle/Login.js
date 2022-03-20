import LoginForm from '../components/LoginForm';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/login.action.js";
import { useNavigate } from "react-router-dom"
import { getCourseList } from "../actions/getCourseList.action";


const Login = () => {

    const [email, setEmail] = useState("rsleyland@hotmail.co.uk");
    const [password, setPassword] = useState("unsecurepassword");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        
        e.preventDefault();
        const result = await login({ email, password }, dispatch);
        setMessage(result);
        if (result === 'success') {
            await getCourseList(dispatch);
            navigate('/');
            window.location.reload();
        }
    };


    return (
        <div id='login-page-container'>
            <LoginForm 
            submitHandler={submitHandler}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            message={message}/>
        </div>
            
    )
}

export default Login;