import axios from "axios";
import { loadUserFail, loadUserRequest, loadUserSuccess, loginRequest, loginSuccess, logoutFail, logoutRequest, logoutSuccess, registerFail, registerRequest, registerSuccess } from "../slices/userSlice"

export const register=(name,lastName,email,password)=>async(dispatch)=>{
    dispatch(registerRequest());
    try{
        const {data}=await axios.post('http://localhost:5007/api/register',{name,lastName,email,password});
        dispatch(registerSuccess());
    }
    catch(err){
        dispatch(registerFail(err.message));
    }
}

export const login=(email,password)=>async(dispatch)=>{
    dispatch(loginRequest());
    try{
        const {data}=await axios.post('http://localhost:5007/api/login',{email,password},{ withCredentials: true });
        dispatch(loginSuccess(data));
    }
    catch(err){
        dispatch(registerFail(err.message));
    }
}

export const loadUser=async(dispatch)=>{
    dispatch(loadUserRequest());
    try{
        const {data}=await axios.get('http://localhost:5007/api/load', { withCredentials: true });
        dispatch(loadUserSuccess(data));
    }
    catch(err){
        dispatch(loadUserFail(err.message))
    }
}

export const logout=async(dispatch)=>{
    dispatch(logoutRequest());
    try{
        const {data}=axios.post('http://localhost:5007/api/load');
        dispatch(logoutSuccess());
    }
    catch(err){
        dispatch(logoutFail(err));
    }
}