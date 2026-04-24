import React, { useState } from 'react';
import '../styles/signup.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

function Signup() {
    const [name, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const {loading,error}=useSelector(state=>state.user)
   const handleRegister=async(e)=>{
    e.preventDefault();
    if(!error){
        dispatch(register(name,lastName,email,password))
        setFirstname("");
  setLastname("");
  setEmail("");
  setPassword("");
  navigate('/login')
    }
   }

    return (
        <>
            <div className="register-container" id="register">
                <div className="top">
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="two-forms">
                        <div className="input-box1">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Firstname"
                                value={name}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                            />
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box1">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Lastname"
                                value={lastName}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                            />
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="bx bx-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="bx bx-lock-alt"></i>
                    </div>
                    <div className="submit">
                        <input type="submit" className="submit" value="Register" />
                    </div>
                </form>
                <div className="two-col">
                    <div className="two">
                        <label><a href="#">Terms & conditions</a></label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;