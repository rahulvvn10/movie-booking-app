import React, { useEffect, useState } from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

function Login() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const {isAuthenticated,error}=useSelector(state=>state.user)
    useEffect(()=>{
        if(isAuthenticated){
            navigate('/movies')
        }
    },[isAuthenticated,navigate])
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            dispatch(login(email,password));
            if(isAuthenticated && !error){
                setEmail('');
                setPassword('');
                
            }
        }
        catch(err){
            return <p>{err.message}</p>
        }
    }
        

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button type="submit" className="btne">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/signup">Register</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;