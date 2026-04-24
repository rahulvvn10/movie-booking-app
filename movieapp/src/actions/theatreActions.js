import axios from "axios";
import { getTheatreFail, getTheatreRequest, getTheatresFail, getTheatresRequest, getTheatresSuccess, getTheatreSuccess } from "../slices/theatreSlice";
export const getTheatres=async(dispatch)=>{
    dispatch(getTheatresRequest());
    try{
        const {data}=await axios.get('http://localhost:5007/api/theatres');
        dispatch(getTheatresSuccess(data));
    }
    catch(err){
        dispatch(getTheatresFail(err.message));
    }
}

export const getTheatre=(id)=>async(dispatch)=>{
    dispatch(getTheatreRequest());
    try{
        const {data}=await axios.get(`http://localhost:5007/api/theatres/${id}`);
        dispatch(getTheatreSuccess(data));
    }
    catch(err){
        dispatch(getTheatreFail(err.message));
    }}