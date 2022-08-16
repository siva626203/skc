import React from 'react';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            
            <form action='' method='GET'>
                <h1>User</h1>
                <input type="text"></input>
                <h1>Password</h1>
                <input type="password"></input><br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;