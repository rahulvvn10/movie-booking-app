import axios from "axios";
import { getFoodsFail, getFoodsRequest, getFoodsSuccess } from "../slices/foodSlice"

export const getFoods=async(dispatch)=>{
    dispatch(getFoodsRequest);
    try{
        const {data}=await axios.get('http://localhost:5007/api/foods');
        dispatch(getFoodsSuccess(data));
    }
    catch(err){
        dispatch(getFoodsFail(err.message));
    }
}

