
const LoginForm = (
    {
        submitHandler,
        email,
        setEmail,
        password,
        setPassword,
        message
    }
) => {

    return (
        
        <div id="login-form-container">
            <div id="login-messages"><p>{message}</p></div>
            <img src="/img/concordia-logo-detail.png" alt="" />
            <form onSubmit={submitHandler}>
                <h3>Sign in</h3>
                <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">SIGN IN</button>
            </form>
            <div>
                <h5><a>Forgot Password?</a></h5>
                <h5>New Employee?&nbsp; <a>Activate your account</a></h5>
            </div>
        </div>
    )
};


export default LoginForm;